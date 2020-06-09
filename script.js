class SimpleMemoryGame {
    constructor (time, card) {
        this.cardsArray = card;
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

    flip() {
        if (this.cardIsFlippable(cards)){
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
    let card = Array.from(document.getElementsByClassName("cards"));
    let game = new SimpleMemoryGame (60, card);

    card.forEach(cards => {
        cards.addEventListener("click" , () => {
            game.flip (cards);
        });
    });
}   
