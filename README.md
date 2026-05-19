# 🍔 Burger Thief

![Burger Thief Demo](./src/assets/hero.png) *Replace this with a screenshot of your app later if you want!*

**Burger Thief** is a modern, highly polished, and fully accessible take on the classic Hangman word-guessing game. Defend your delicious burger from hungry snack thieves by correctly guessing the secret word before all your ingredients are stolen!

---

## ✨ Key Features

- **Dynamic Theme Engine:** Choose from a variety of word categories (Food, Tech, Animals, or Random) featuring a massive, curated library of words for endless replayability.
- **Glassmorphism UI:** Built with a premium, responsive glassmorphism aesthetic tailored to look stunning on both mobile and desktop screens.
- **Flawless Victory System:** Achieve 100% freshness (zero wrong guesses) to trigger a special golden UI state and a massive 3,000-piece confetti explosion.
- **True Randomization:** Status messages dynamically generate based on gameplay state using a seed-based algorithm to prevent React re-render flickering.
- **Robust State Persistence:** Best streaks are automatically saved to your browser's `localStorage` so your high scores survive page refreshes.
- **Full Accessibility (a11y):** Built with screen-reader users in mind. Features visually-hidden live regions that announce the word state, proper semantic ARIA labels, and disabled states.
- **Physical Keyboard Support:** Seamlessly integrated `useEffect` listeners allow players to use their physical laptop/desktop keyboard instead of clicking on-screen keys.

## 🛠 Tech Stack

- **React 18** (Hooks: `useState`, `useEffect`, `useRef`)
- **Vite** (Lightning-fast build tool)
- **Vanilla CSS** (Custom properties, Flexbox layouts, Keyframe animations)
- **react-confetti** (For victory celebrations)

## 📁 Folder Structure

The project follows a clean, scalable component and utility architecture:

```text
src/
├── assets/             # Image assets (burger states, background, etc.)
├── utils/
│   ├── messages.js     # Dynamic status message arrays & randomization logic
│   └── words.js        # Massive arrays of categorized words & theme engine
├── App.jsx             # Core game logic, state management, and main UI layout
├── App.css             # Glassmorphism styling and responsive layout rules
├── index.css           # Global resets, CSS variables, and accessibility classes
└── main.jsx            # React application entry point
```

## 🚀 Run Locally

Want to test it out on your own machine? 

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/burger-thief.git
   ```
2. Navigate into the directory:
   ```bash
   cd burger-thief
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 💡 Design Decisions

- **Why Vanilla CSS?** Instead of relying on heavy CSS frameworks like Tailwind or Bootstrap, this project demonstrates a strong fundamental grasp of Vanilla CSS. The glassmorphism effect is achieved cleanly using CSS variables, `backdrop-filter`, and subtle box-shadows.
- **A11y First:** Web games often ignore accessibility. By explicitly mapping physical keystrokes and using `aria-live="polite"` regions, this app proves that visually complex interactive experiences can still be fully accessible to screen readers.

---
*Built as a portfolio project to demonstrate advanced React state management and UI/UX design.*
