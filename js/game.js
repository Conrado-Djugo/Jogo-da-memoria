const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
   '1',
   '2',
   '3', 
   '4',
   '5',
   '6',
   '7',
   '8',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

/* pode ser feito assim sem ser simplificado
const creatCard = () => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');


    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    
    grid.appendChild(card);

}
*/

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabledCard');

    if(disabledCards.length == 16){

        clearInterval(this.loop);

        alert(`Parabés, ${spanPlayer.innerHTML} ! Seu tempo foi ${timer.innerHTML}s`);
    }

 

}


const checkCards = () =>{
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if(firstCharacter==secondCharacter){
        firstCard.classList.add('disabledCard');
        secondCard.classList.add('disabledCard');
        firstCard = '';
        secondCard = '';

        checkEndGame();

    }else{

        setTimeout(()=> {
            firstCard.classList.remove('revealCard');
            secondCard.classList.remove('revealCard');

            firstCard = '';
            secondCard = '';

        }, 500);
       

    }
}

   
const revealCard = ({target}) => {
    if(target.parentNode.className.includes('revealCard')){
        return;
    }

    if(firstCard == ''){

        target.parentNode.classList.add('revealCard');
        firstCard = target.parentNode

    }else if( secondCard == ''){

        target.parentNode.classList.add('revealCard');
        secondCard = target.parentNode;
        
        checkCards();
     }
    
}

const createCard = (character) => {
    const card = createElement('div','card');
    const front = createElement('div','face front');
    const back = createElement('div','face back');

    front.style.backgroundImage = `url('../img/${character}.png ')`

    card.appendChild(front);
    card.appendChild(back);


        
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}

const loadGame = () =>{

    const duplicatecharacter = [...characters, ...characters];

    const shuffledArray = duplicatecharacter.sort(()=> Math.random() - 0.5);

   

    duplicatecharacter.forEach((character) => {

    const card = createCard(character);
    grid.appendChild(card);

      
    });
}

const startTime = () =>{

     this.loop =  setInterval(() =>{

            const currentTime = +timer.innerHTML;
            timer.innerHTML = currentTime + 1;

        }, 1000);
}

window.onload = () =>{

 
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTime();
    loadGame();

}



