//Keyboard and game element variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');

//hidden letters of phrase
const letters = document.querySelectorAll('.letters');

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
["Sir Winston Churchill" , "If you are going through hell keep going"],
["Winnie the Pooh"        , "Doing nothing often leads to the very best of something"],
["Aldous Huxley"          , "Never have so many been manipulated so much by so few"],
["Albert Einstein"       , "The most beautiful experience we can have is the mysterious"]
];

//Generate random quote

const li = document.createElement("li");

const getRandomPhraseAsArray = () => {
    //create random number between 1 - 7 for quote selection
    let randNum = Math.floor(Math.random() * (quotes.length));
    //retrieve object value (quote) with random number
    let randQuote = quotes[randNum][1];
    //select the ul .phrase div
    const ul = document.querySelector('#phrase ul');
    //Append to li element created in const li 
    li.textContent = randQuote;
    ul.appendChild(li);
}; 

getRandomPhraseAsArray();

console.log(li.innerText);
console.log(letters.innerText);


//Main problem: Const "li" is the quote element li that has been created by the getRandomPhraseAsArray function.  
//              Its innerText is what must be split and compared to the .keyrows button innerText.

//loop through li.innerText, split and append each letter to a newly created li element
// add the class .letter to each element (all li elements created)
//store .letter class selector in a const "phrase"

//now, select .keyrows button innerText and store it in a constant "keys"
//loop through keys.length and compare the iteration value to the phrase const.
// -> if there is a match, add the .show class
// -> set the .show class elements style.display value to "show" so that they appear on the screen.
// -> if there is a match, add add .chosen class to event target that was clicked.

//  *NOTE: I do realize that I have created a random quote generator that appends the quote to the page,
//   which is not what is needed (i thought it was at the time... :) 


//things I am unable to do, thus far*
// 1.  I am not able to accurately select the innerText of .keyrow button ( i have tried storing 
//     document.querySelectorAll('.keyrow button').innertext in a const, but it's value is undefined)
//     it is undefined, I think, because it must be looped through.  If that is the case, how does one loop 
//     through two different strings, to compare their values?

// 2.  If I am incorrect, and what is actually required is to compare two strings by iterating through them and 
//     comparing their iteration values(the .keyrows button innerText and the innerText of the li element that I created),
//     then, I literally have no idea how that would be performed.  How would you create two loops and compare 
//     their iteration values?




//     numerous, failed code can be found below:


// checkLetter.addEventListener('click', function (event) {
//     if ( event.target === 'BUTTON' ){
//         console.log(event.target.innerText);
//     }
// });


// const checkLetter = button => {

//     let letterMatch = null;
//         for (let i = 0; i < li.length; i++) {
//             if ( event.target.tagName === 'BUTTON') {
//                 li.addClass(" show");
//                 letterMatch = li.innerText;
//             } 
//         }
//         return letterMatch;
//     };

// qwerty.addEventListener('click', event => {
//     if( event.target.tagName === 'BUTTON' && event.target != document.querySelector('.choosen') ) {
//         event.target.className = 'chosen';
//         checkLetter
//     }
// });
