/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// quotes array with 5 objects
let quotes = [
  {
    quote: 'Works of art make rules; rules do not make works of art.',
    source: 'Claude Debussy'
  },
  {
    quote: 'Always believe something wonderful is about to happen.',
    source: 'Unknown'
  },
  {
    quote: 'Do or do not. There is no try.',
    source: 'Yoda',
    citation: 'Star Wars: The Empire Strikes Back'
  },
  {
    quote: 'You are never too old to set another goal or to dream a new dream.',
    source: 'Les Brown',
    year: 1992
  },
  {
    quote: 'Today you are you. That is truer than true. There is no one who is youer than you!',
    source: 'Dr. Seuss'
  }
];

let funcMax; // for use in the randomNumber action
let randomNumber; // to store the random number between 0 - array length
let randomQuote; // to store the randomly chosen quote
let message; // to store the HTML string being printed

// get a random quote from the quotes array
function getRandomQuote() {
  funcMax = quotes.length;
  randomNumber = Math.floor(Math.random() * funcMax); // Guil
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

// print the random quote to the page
function printQuote() {
  getRandomQuote()
  message =
    '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source;
  // confirm that a .citation property exists, if it does then add it to the HTML string
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + '</span>'
  }
  // confirm that a .year property exists, if it does then add it to the HTML string
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year + '</span>' + '</p>'
  }

  document.getElementById('quote-box').innerHTML = message;
}
printQuote();

// event listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);
