const quotes = [
  "Now or never",
  "Do it at any cost",
  "You are beautiful just the way you are",
  "The each second you are spending now is going to build the golden way of your future",
  "Hardwork, persevrance and patience are more loyal friends than any human being",
];

const quoteN = document.getElementById("quote");
const genbtn = document.getElementById("button");
genbtn.addEventListener("click", generateQuote);

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];
  quoteN.textContent = randomQuote;
}
