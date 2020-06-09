class SimpleMemoryGame {
    constructor (time, cards) {
        this.cardsArray = cards;
        this.time = time;
        this.timeLeft= time;
        this.timer = document.getElementById("time-left");
        
    }
    startGame (){
        this.cardToCheck = null;
        this.timeLeft = this.time;
        this.matches = [];
        this.busy = true;

    }

    flip(card) {
        if (this.cardIsFlippable(card)){
            card.classList.add("show-front");
        }

    }
// Function to check if the user can flip the card
    cardIsFlippable(){ 
        return true;
        //return !this.busy && !this.matches.includes(cards) && cards !== this.cardToCheck //All statements need to return false in order for it to be true and they can flip the card
    }

}


// Statement to check if the page has loaded 
if (document.readyState === "loading") {
    document.addEventListener ("DOMContentLoaded",gameReady());
} else {
    gameReady();
}

function gameReady() {
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new SimpleMemoryGame (60, cards);

    cards.forEach(card =>{
        card.addEventListener("click" , () => {
            game.flip (card);
        });
    });
}  
