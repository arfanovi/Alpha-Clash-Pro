
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

        const newScore = currentScore + 1;


        removeBackgroundColorById(expectedAlphabet);
        continueGame();


    }
 
    else{

        const currentLife  = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

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
    showElementById('play-ground');
    continueGame();

}



