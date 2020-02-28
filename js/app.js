//Keyboard and game element variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const keyLetters = document.querySelectorAll('.keyrow button').innerText;

//hidden letters of phrase
const letters = document.querySelectorAll('.letters');

//Game score 

const missed = 0;
const matched = 0;

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
["Sir Winston Churchill" , "If you are going through hell keep going"],
["Winnie the Pooh"       , "Doing nothing often leads to the very best of something"],
["Aldous Huxley"         , "Never have so many been manipulated so much by so few"],
["Albert Einstein"       , "The most beautiful experience we can have is the mysterious"]
];


//Generate random quote

const getRandomPhraseAsArray = () => {
    //create random number between 1 - 7 for quote selection
    let randNum = Math.floor( Math.random() * (quotes.length) );
    //retrieve object value (quote) with random number
    let randQuote = quotes[randNum][1];
    //select the ul .phrase div
    const ul = document.querySelector('#phrase ul');
    //Append to li element created in const li 
    randQuote = randQuote.toString().split("");
    //iterate though each string value in randQuote, create an li element
    //then set the innerText of the li to the string value

    for( let i = 0; i < randQuote.length; i++ ) {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerText = randQuote[i]; 
            if ( randQuote[i] != " " ) {
                li.className = "letter";
            } else {
                li.className = "space";
              }
    };
}; 

getRandomPhraseAsArray();

//keypress function

qwerty.addEventListener('click', function (event) {
    if ( event.target.tagName === "BUTTON" ) {
            event.target.className = "chosen";
        for( const value of letters ) {
            if( event.target.innerText === letters.textContent.toLowerCase() ) {
                letters.className = 'show';
                matched += 1;
            }
        }
    }
});

//psuedo-code:

//              3. Create keypress function  - compare the key-pressed value to the values of .letter                

//              4. add .chosen class to target pressed

//              5. if there is a match, add .show class

//              6. if not a match -> missed counter ++

//              7. create a checkWin function -> create a variable to store li elements that have .letter class
//                 create a variable to store elements that have .show class
//                 if length of the two variables is the same, display win overlay (win overlay needs to be created)

