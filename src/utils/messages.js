const playingMessages = [

  ["A perfect, fully loaded burger. Don't let them ruin it!", "Order up! Fresh out of the kitchen.", "Looks delicious! Protect it at all costs.", "The perfect burger. Not a single flaw.", "Untouched and beautiful. Let's keep it that way."],

  ["Wait, the ketchup is missing. This is getting dry.", "Who scraped off the ketchup?", "No ketchup? I guess we're doing it plain.", "The chef forgot the sauce... again.", "It's a bit dry now. Someone took the ketchup."],

  ["Hey! Where did the pickles go? I paid for those!", "No pickles? That ruins the crunch!", "Someone definitely stole the pickles.", "The pickles are missing. This is unacceptable.", "Who eats a burger without pickles?!"],

  ["Someone is stealing the onions right off the plate!", "The onions vanished. At least your breath will smell better.", "No onions? Where's the flavor?", "I specifically asked for extra onions. They're gone.", "The onions were literally just there!"],

  ["The tomatoes have vanished. Did the chef eat them?", "No tomatoes? This is basically a sandwich now.", "Someone snagged the tomatoes when you weren't looking.", "The tomatoes slipped right out of the bun.", "Who is taking the ingredients?! The tomatoes are gone."],

  ["The lettuce is gone. So much for eating healthy.", "Where did the greens go? This is a meat-only zone now.", "A rabbit must have stolen the lettuce.", "No lettuce? The crunch is completely gone.", "This burger is getting incredibly sad. Goodbye lettuce."],

  ["The cheese! Who steals just the cheese?!", "They took the cheese! This is a war crime.", "The cheese melted into the void. It's gone.", "Not the cheese! Anything but the cheese!", "A rat definitely ran off with the cheese slice."],

  ["The patty is gone! It's just a sad piece of bread now...", "They took the meat! You're eating a plain bun.", "Where is the beef?! The patty has vanished.", "You let them steal the main course!", "It's just bread. You're fighting for a piece of bread."]
]

export function getRandomPlayingMessage(guessCount) {
  const options = playingMessages[guessCount]

  return options[Math.floor(Math.random() * options.length)]
}

const winMessages = [
  { title: "ORDER COMPLETE", text: "You saved the burger! The customer is highly satisfied." },
  { title: "MASTER CHEF", text: "Perfect execution! This burger is a work of art." },
  { title: "BURGER SECURED", text: "You kept all the ingredients safe. Time to dig in!" },
  { title: "KITCHEN HERO", text: "You successfully defended lunch from the snack thieves." },
  { title: "PERFECT BITE", text: "Not a single ingredient was lost. Delicious victory!" },
  { title: "FIVE STARS", text: "The food critic loved it. You kept the burger perfectly intact." },
  { title: "FAST FOOD LEGEND", text: "Nobody steals food on your watch. Incredible work." },
  { title: "LUNCH IS SAVED", text: "The burger survives another day. Bon appétit!" },
  { title: "CULINARY GENIUS", text: "You correctly guessed the secret recipe. Well done." },
  { title: "BURGER CHAMPION", text: "You beat the hungry thieves. Enjoy the feast!" }
]

const loseMessages = [
  { title: "ORDER RUINED", text: "You lost all the good ingredients. It's just a plain bun now." },
  { title: "CUSTOMER WALKED OUT", text: "Nobody wants a burger this sad. Better luck next time." },
  { title: "LUNCHTIME DISASTER", text: "The seagulls got to it. Your lunch is completely ruined." },
  { title: "KITCHEN NIGHTMARE", text: "What happened here? This isn't what I ordered!" },
  { title: "STOMACH GROWLING", text: "You took too long and someone ate your food." },
  { title: "HEALTH INSPECTOR", text: "The restaurant has been shut down due to missing patties." },
  { title: "SAD SANDWICH", text: "You failed to protect the meat. Enjoy your bread." },
  { title: "BURGER HEIST", text: "The thieves got away with everything. You have nothing." },
  { title: "ONE STAR REVIEW", text: "'I ordered a burger and got a plain bun.' - Angry Customer" },
  { title: "FIRED", text: "The chef is furious. Hand in your apron immediately." }
]

export function getRandomWinMessage() {
  return winMessages[Math.floor(Math.random() * winMessages.length)]
}

export function getRandomLoseMessage() {
  return loseMessages[Math.floor(Math.random() * loseMessages.length)]
}
