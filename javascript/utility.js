console.log("ovi")







// hide element 
function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}



// show eelement 
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
};


function addBackgroutColorById(elementId){
    const element  = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    element.classList.add('text-black');
    element.classList.add('font-bold');
};

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
};


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
};


function setTextElementValueById(elementId, value){
    const element  = document.getElementById(elementId);
    element.innerText = value;
};


function getElementTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}



function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetes = alphabetString.split('');
    console.log(alphabetes);


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabetes[index];
    console.log(index, alphabet);
    return alphabet;

};


