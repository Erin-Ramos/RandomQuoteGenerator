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
    source: 'Unknown',
    tag: 'Motivational'
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

let rgbPicker; 
let colorPicker;
let ranNumMax;
let randomNumber;
let randomQuote;

// get a value to be used for the red, green, and blue
function randomRGB() {
  rgbPicker = Math.floor(Math.random() * 256);
  return rgbPicker;
}

// create the RGB value and change the background color
function randomColors() {
  colorPicker = 'rgb(' + randomRGB() + ', ' + randomRGB() + ', ' + randomRGB() + ')';
  document.body.style.background = colorPicker; // stack overflow; user: defau1t; https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
}

// call the randomColors function
// get a random quote from the quotes array
function getRandomQuote() {
  randomColors();
  ranNumMax = quotes.length;
  randomNumber = Math.floor(Math.random() * ranNumMax); // Guil
  randomQuote = quotes[randomNumber];
  return randomQuote;
}

// print the random quote to the page
// confirm the existence of .citation, .year, .tag properties
// include them in the final message if they exist
function printQuote() {
  getRandomQuote()
  message =
    '<p class="quote">' + randomQuote.quote + '</p>' +
    '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    message += '<span class="citation">' + randomQuote.citation + '</span>'
  }
  if (randomQuote.year) {
    message += '<span class="year">' + randomQuote.year + '</span>' + '</p>'
  }
  if (randomQuote.tag) {
    message += '<span class="tag">, ' + randomQuote.tag + '</span>' + '</p>'
  }

  document.getElementById('quote-box').innerHTML = message;
}
printQuote();

// event listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);
