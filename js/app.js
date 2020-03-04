//Keyboard and game element variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const keyLetters = document.querySelectorAll('.keyrow button').innerText;
let hearts = document.querySelectorAll(".lost"); 

//Game score 

let missed = 0;
let matched = 0;

// Randomly chosen quote string length
let randQuote;


//Start screen overlay
const overlay = document.querySelector('.start');

//Start button (hides start screen overlay and begins game)
const startGame = document.querySelector('.btn_reset');

startGame.addEventListener('click', () => {
    overlay.style.display = 'none'; 
});

//Game reset

//reset function 

const reset = () => {
    startGame.addEventListener('click', () => {
                location.reload()
        });
};



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

//letter check function
const checkLetter = (button) => {
    const letters = document.querySelectorAll('.letter');
    let letterFound = null;
    //hidden letters of phrase
    for (let i = 0; i < letters.length; i += 1) {
      if (button.innerText === letters[i].textContent.toLowerCase()) {
        // Adds the class show as a second class to letter 
        letters[i].classList.add("show");
        letterFound = true;
        matched += 1;
      } 
    }
    return letterFound;
}


//keypress function
qwerty.addEventListener('click', (event) => {
    let match;
    if ( event.target.tagName === "BUTTON" ) {
          event.target.className = "chosen";
          // Disables button so can't be clicked twice
          event.target.disabled = true;
          match = checkLetter(event.target);
     if(!match && missed < 6) {
        hearts[missed].src = "images/lostHeart.png";
        missed++;
    }
    //checkWin function 
    let show = document.querySelectorAll(".show");
    let shownLetters = document.querySelectorAll(".letter");
    if(show.length === shownLetters.length) {
        setTimeout(function(){
            overlay.className = "win";
            overlay.style.display = "flex"; 
           }, 3000);
        document.querySelector("h2").innerText = "You win!";
        startGame.innerText = "Play again?";
        reset();
    } else if (missed === 5) {
        setTimeout(function(){
            overlay.className = "lose";
            overlay.style.display = "flex"; 
           }, 300);
        document.querySelector("h2").innerText = "Sorry, you lose.";
        startGame.innerText = "Try again?";
        reset();
        }
    }
});









