gameBoard = document.getElementById("game-container");
const cardsArray = ['🐶','🐱','🐭','🐰','🦊','🐻','🐸','🐼'];
let firstCard = null;
let secondCard = null;

let lockBoard = false;

let correct = 0;

function init_board(){

    let cards = [...cardsArray,...cardsArray]
    shuffle_cards(cards);
    
    for (let i = 0; i < 16; i++){
        const card = document.createElement("div");
        card.classList.add("card");
    
        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");
    
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.innerText = cards[i];
    
        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
    
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
    
        card.appendChild(cardInner);
    
        card.addEventListener("click",() => flip_card(card));
        gameBoard.appendChild(card);
    }
}

function shuffle_cards(cards){
    for (let i = cards.length - 1; i > 0; i--){
        const index = Math.floor(Math.random() * (i+1));
        [cards[i], cards[index]] = [cards[index],cards[i]];
    }
}

function flip_card(card){
    if (lockBoard || card.classList.contains("flip")){
        return;
    }

    card.classList.toggle("flip");

    if (firstCard == null){
        firstCard = card;
    }
    else {
        secondCard = card;
        check_match();
    }
}

function reset_turn(){
    [firstCard,secondCard] = [null,null];
    lockBoard = false;
}

function reset_cards(){
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
}

function check_match(){
    const isMatch = firstCard.querySelector(".card-front").textContent == secondCard.querySelector(".card-front").textContent;
    lockBoard = true;

    if (isMatch){
        correct++;
        reset_turn();
    }
    else{
        setTimeout(reset_cards,1000);
        setTimeout(reset_turn,1000);
    }
    
    if (correct == 8){
        clearInterval(timerID);
    }
}

init_board();