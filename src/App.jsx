import { useState, useRef, useEffect } from "react"
import Confetti from 'react-confetti'
import './App.css'
import img0 from './assets/image-removebg-preview.png'
import img1 from './assets/image_copy-removebg-preview.png'
import img2 from './assets/image_copy_2-removebg-preview.png'
import img3 from './assets/image_copy_3-removebg-preview.png'
import img4 from './assets/image_copy_4-removebg-preview.png'
import img5 from './assets/image_copy_5-removebg-preview.png'
import img6 from './assets/image_copy_6-removebg-preview.png'
import img7 from './assets/image_copy_7-removebg-preview.png'

const burgerImages = [img0, img1, img2, img3, img4, img5, img6, img7]
import clsx from 'clsx'
import { getRandomWord, THEMES } from "./utils/words"
import { getRandomPlayingMessage, getRandomWinMessage, getRandomLoseMessage } from "./utils/messages"

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('Random')
  const [actualWord, setActualWord] = useState(() => getRandomWord('Random'))
  const [clickedLetters, setClickedLetters] = useState([])
  const [streak, setStreak] = useState(0)
  const [best, setBest] = useState(() => {

    const savedBest = localStorage.getItem("burgerThiefBestScore")
    return savedBest ? parseInt(savedBest, 10) : 0
  })

  const keyboard = "abcdefghijklmnopqrstuvwxyz"
  const guessCount = clickedLetters.filter(letter => !actualWord.includes(letter)).length
  const gameWon = [...actualWord].every((letter) => clickedLetters.includes(letter))
  const gameLost = guessCount >= 7
  const gameOver = gameWon || gameLost

  const newGameBtnRef = useRef(null)

  const [playingMessage, setPlayingMessage] = useState(() => getRandomPlayingMessage(0))

  useEffect(() => {
    setPlayingMessage(getRandomPlayingMessage(guessCount))
  }, [guessCount])

  useEffect(() => {
    if (gameOver && newGameBtnRef.current) {
      newGameBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [gameOver])

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      if (gameOver || !keyboard.includes(key) || key.length !== 1) return

      setClickedLetters(prev => prev.includes(key) ? prev : [...prev, key])
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [gameOver, keyboard])

  useEffect(() => {
    localStorage.setItem("burgerThiefBestScore", best.toString())
  }, [best])

  const freshnessPercent = Math.round(((7 - guessCount) / 7) * 100)
  const freshnessColor = freshnessPercent > 50 
    ? "var(--success-color)" 
    : freshnessPercent > 25 
      ? "#facc15"
      : "var(--error-color)"

  const currentWordState = [...actualWord].map(letter => 
    clickedLetters.includes(letter) ? letter + "." : 'blank.'
  ).join(' ')

  const wordItems = [...actualWord].map((letter, index) => {
    if (clickedLetters.includes(letter)) {
      return (<span className="word-span" key={index}>{letter.toUpperCase()}</span>)
    } else if (gameLost) {
      return (<span className="word-span missed" key={index}>{letter.toUpperCase()}</span>)
    } else {
      return (<span key={index}></span>)
    } 
  })

  function handleClick(letter) {
    if (!clickedLetters.includes(letter)) {
      setClickedLetters(prev => [...prev, letter])
    } else {
      return
    }

  }

  const keyboardItems = [...keyboard].map((letter) => {
     const buttonColor = clsx({
    "bg-green" : actualWord.includes(letter) && clickedLetters.includes(letter),
    "bg-red" : !actualWord.includes(letter) && clickedLetters.includes(letter)

  })
    return (
      <button 
        disabled={guessCount >= 7 || clickedLetters.includes(letter)} 
        className={buttonColor} 
        onClick={() => handleClick(letter)} 
        key={letter}
        aria-label={`Guess letter ${letter}`}
        aria-disabled={clickedLetters.includes(letter)}
      >
        {letter}
      </button>
    )
  })

  function handleReset() {
    if (gameWon) {
      const newStreak = streak + 1
      setStreak(newStreak)
      if (newStreak > best) {
        setBest(newStreak)
      }
    } else if (gameLost) {
      setStreak(0)
    }

    setActualWord(getRandomWord(currentTheme))
    setClickedLetters([])
  }

  function handleThemeChange(e) {
    const newTheme = e.target.value
    setCurrentTheme(newTheme)
    setActualWord(getRandomWord(newTheme))
    setClickedLetters([])
    setStreak(0) 
  }

  return (
    <main>
      {gameWon && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>
          <Confetti numberOfPieces={guessCount === 0 ? 3000 : 1000} recycle={false} run={gameOver} />
        </div>
      )}

      <nav className="top-nav">
        <div className="logo">🍔 BURGER THIEF</div>

        <select 
          className="theme-selector" 
          value={currentTheme} 
          onChange={handleThemeChange}
          aria-label="Select Game Theme"
        >
          {THEMES.map(t => <option key={t} value={t}>{t} Theme</option>)}
        </select>

        <div className="stats">
          <span className="stat-badge">🔥 Streak: <strong>{streak}</strong></span>
          <span className="stat-badge">🏆 Best: <strong>{best}</strong></span>
        </div>
      </nav>

      <div className="content-wrapper">

        <div className="freshness-section">
          <div className="freshness-bar-wrapper">
            <div className="freshness-labels">
              <span>Burger Freshness</span>
              <span className="freshness-percent">{freshnessPercent}% Fresh</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                role="progressbar"
                aria-valuenow={freshnessPercent}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: `${freshnessPercent}%`,
                  backgroundColor: freshnessColor
                }}>

                </div>

            </div>
          </div>

          <div className="wrong-guesses-badge">
            Wrong Guesses: {guessCount} / 7
          </div>
        </div>

        {}
        <div className="sr-only" aria-live="polite" role="status">
          Current word: {currentWordState}
        </div>

        {!gameOver &&
          <p className="status-message playing" aria-live="polite" role="status">
            {playingMessage}
          </p>
        }

        {gameWon && (() => {
          const winMsg = getRandomWinMessage();
          return (
            <div className={clsx("status-message winner", { flawless: guessCount === 0 })} role="alert" aria-live="assertive">
              {guessCount === 0 && <div className="flawless-badge">✨ FLAWLESS VICTORY ✨</div>}
              <h2>{winMsg.title}</h2>
              <p>{winMsg.text}</p>
            </div>
          )
        })()}

        {gameLost && (() => {
          const loseMsg = getRandomLoseMessage();
          return (
            <div className="status-message loser" role="alert" aria-live="assertive">
              <h2>{loseMsg.title}</h2>
              <p>{loseMsg.text}</p>
            </div>
          )
        })()}

        <section className="burger-section">
          <img
            src={burgerImages[guessCount]}
            alt="A loaded burger losing its ingredients"
            className="burger-img"
          />
        </section>

        <section className="guess-section">
          {wordItems}
        </section>

        <section className="keyboard-section">
          {keyboardItems}
        </section>

        {gameOver && <button ref={newGameBtnRef} onClick={handleReset} className="new-game-btn" aria-label="Start New Game">New Game</button>}

      </div>

    </main>
  )
}