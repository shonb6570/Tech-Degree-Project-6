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

const getRandomPhraseAsArray = () => {
    //create random number between 1 - 7 for quote selection
    let randNum = Math.floor(Math.random() * (quotes.length));
    //retrieve object value (quote) with random number
    let randQuote = quotes[randNum][1];
    //select the ul .phrase div
    const ul = document.querySelector('#phrase ul');
    //Append to li element created in const li 
    randQuote = randQuote.toString().split("");

    //iterate though each string value in randQuote, create an li element
    //then set the innerText of the li to the string value

    for( let i = 0; i < randQuote.length; i++) {
        document.createElement("li");
        li.innerText = randQuote[i];  // <-- this does not work without setting a variable (how to do this without declaring a variable?) 
            if (randQuote[i] != " ") {
                li.className = "letter";
            } else {
                li.className = "space";
            }
        };
    li.textContent = randQuote;
    console.log(randQuote);
}; 

getRandomPhraseAsArray();

console.log(li.innerText);


//Main problem: 1. Create a variable inside getRandomPhraseArray that uses the toString method 
//                 to convert const li into string values (each letter converted into a string).btn__reset

//              2. Add the .letter or .space class to the values

//              3. Compare the key-pressed value to the values of the created string variable's values 
//                 (iterate through the variable with the LetterKey function).

//              4. If there is a match, set display to show element?





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
