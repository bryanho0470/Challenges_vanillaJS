const quotes = [
  {
    quote : "The only way to do great work is to love what you do.",
    author: " - Steve Jobs"
  },
  {
    quote : "Believe you can and you're halfway there.",
    author: " - Theodore Roosevelt"
  },
  {
    quote : "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: " - Winston Churchill"
  },
  {
    quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: " - Nelson Mandela"
  },
  {
    quote : "The future belongs to those who believe in the beauty of their dreams.",
    author: " - Eleanor Roosevelt"
  },
  {
    quote : "In the middle of every difficulty lies opportunity.",
    author: " - Albert Einstein"
  },
  {
    quote : "Happiness is not something ready-made. It comes from your own actions.",
    author: " - Dalai Lama"
  },
  {
    quote : "The only limit to our realization of tomorrow will be our doubts of today.",
    author: " - Franklin D. Roosevelt"
  },
  {
    quote : "Don't watch the clock; do what it does. Keep going.",
    author: " - Sam Levenson"
  },
  {
    quote : "The best way to predict the future is to create it.",
    author: " - Peter Drucker"
  },
]

const quote = document.querySelector("#quote span:nth-child(1)")
const author = document.querySelector("#quote span:nth-child(2)")

const random_quotes = quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = random_quotes.quote
author.innerText = random_quotes.author