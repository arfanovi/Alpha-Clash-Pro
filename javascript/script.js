
function handleKeyboardKeyUpEvent(event){

    const playerPressed = event.key;
    // console.log(playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet  = currentAlphabet.toLocaleLowerCase();


    if(playerPressed === expectedAlphabet){

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
 
    else{

        const currentLife  = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            // console.log('game over ');
            gameOver();
        }

    };
};






document.addEventListener('keyup' , handleKeyboardKeyUpEvent );



function continueGame(){
    // step generate random alphabet 
    const alphabet = getRandomAlphabet();
    // console.log(alphabet)


    const p = document.getElementById('current-alphabet');
    p.innerText = alphabet;

    addBackgroutColorById(alphabet);
};


// Start All 
function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');



    // reset score 
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);


    continueGame();

}



function gameOver(){
hideElementById('play-ground');
showElementById('final-score');

const lastScore = getTextElementValueById('current-score');
console.log(lastScore);
setTextElementValueById('last-score', lastScore);

};




function playAgain(){

}