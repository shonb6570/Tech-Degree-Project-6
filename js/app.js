//Keyboard and game phrase variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

//Game score 

const missed = 0;

//Start button (hides start screen overlay and begins game)
const startGame = document.querySelector('.btn_reset');

startGame.addEventListener('click', function () {
    document.querySelector('.start').style.display = 'none'; 
});


//Game quotes

const quotes = [
["René Descartes"        , "I think therefore I am"],
["Friedrich Nietzsche"   , "What does not kill me makes me stronger"],
["Socrates"              , "The unexamined life is not worth living"],
["Sir Winston Churchill" , "If you're going through hell keep going"],
["Winne the Pooh"        , "Doing nothing often leads to the very best of something"],
["Aldus Huxley"          , "Never have so many been manipulated so much by so few"],
["Albert Einstein"       , "The most beautiful experience we can have is the mysterious"]
];

//Generate random quote

function getRandomPhraseAsArray(){
    //create random number between 1 - 7 for quote selection
    let randNum = Math.floor(Math.random() * (quotes.length));
    //retrieve object value (quote) with random number
    let randQuote = quotes[randNum][1];
    //select the ul .phrase div
    const ul = document.querySelector('#phrase ul');
    //create li and append to 
    const li = document.createElement("li");
    console.log(li);
    li.textContent = randQuote;
    ul.appendChild(li);
} 

getRandomPhraseAsArray();


