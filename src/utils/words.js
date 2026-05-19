import { generate } from 'random-words'

export const THEMES = ['Random', 'Food', 'Tech', 'Animals']

const themeWordLists = {
  Food: [
    "burger", "cheese", "tomato", "lettuce", "pickle", "onion", "ketchup", "mustard", "bacon", "waffle", "pancake", 
    "pizza", "sandwich", "hotdog", "steak", "chicken", "nugget", "salad", "pasta", "noodle", "spaghetti", "macaroni",
    "sushi", "salmon", "shrimp", "lobster", "crab", "oyster", "cookie", "muffin", "brownie", "cupcake", "donut",
    "bagel", "croissant", "biscuit", "toast", "butter", "garlic", "pepper", "salt", "sugar", "honey", "syrup",
    "chocolate", "vanilla", "strawberry", "banana", "apple", "orange", "grape", "melon", "mango", "peach", "cherry",
    "carrot", "potato", "broccoli", "spinach", "cabbage", "celery", "cucumber", "zucchini", "squash", "pumpkin"
  ],
  Tech: [
    "react", "javascript", "browser", "component", "frontend", "backend", "database", "server", "syntax", "hacker",
    "network", "router", "switch", "firewall", "proxy", "cache", "memory", "storage", "processor", "keyboard",
    "monitor", "screen", "pixel", "vector", "raster", "graphics", "software", "hardware", "firmware", "malware",
    "virus", "trojan", "spyware", "phishing", "encryption", "cipher", "binary", "hexadecimal", "algorithm", "variable",
    "function", "object", "array", "string", "boolean", "integer", "float", "pointer", "reference", "class",
    "module", "package", "library", "framework", "compiler", "interpreter", "debugger", "terminal", "console", "command"
  ],
  Animals: [
    "elephant", "giraffe", "penguin", "dolphin", "cheetah", "kangaroo", "ostrich", "octopus", "panther", "gorilla",
    "monkey", "chimpanzee", "baboon", "lemur", "tiger", "lion", "leopard", "jaguar", "cougar", "lynx",
    "zebra", "rhino", "hippo", "camel", "llama", "alpaca", "horse", "donkey", "mule", "sheep",
    "goat", "cattle", "pig", "boar", "deer", "moose", "elk", "caribou", "bear", "wolf",
    "coyote", "fox", "jackal", "hyena", "badger", "weasel", "otter", "mink", "ferret", "skunk",
    "raccoon", "possum", "koala", "wombat", "platypus", "beaver", "squirrel", "chipmunk", "gopher", "mouse"
  ]
}

export function getRandomWord(theme = "Random") {
  if (theme === "Random") {
    return generate({ minLength: 5, maxLength: 8 }).toLowerCase()
  }

  const wordList = themeWordLists[theme]
  if (wordList && wordList.length > 0) {
    return wordList[Math.floor(Math.random() * wordList.length)].toLowerCase()
  }

  return generate({ minLength: 5, maxLength: 8 }).toLowerCase()
}
