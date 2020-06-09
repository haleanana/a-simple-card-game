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
        this.busy = true

        this.hideCards();
        this.timer.innerText = this.timeLeft
    }

    hideCards() {
        this.cardsArray.forEach (card => {
        card.classList.remove("show-front");
    })

    }


    flip(card) {
        if (this.cardIsFlippable(card)){
            card.classList.add("show-front");
        }

    }

    countDown (){
        return setInterval(() => {
            this.timeLeft--;
            this.timer.innerText = time.timeLeft;
            if(this.timeLeft === 0)
            this.gameOver();
        }, 1000);
    }


    shuffle() {
        for(let i = this.cardsArray.length -1; i>0; i--) {
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i; 
            this.cardsArray [i].style.order = randIndex;
        }
    }
// Function to check if the user can flip the card
    cardIsFlippable(){ 
        return true;
        //return !this.busy && !this.matches.includes(cards) && cards !== this.cardToCheck //All statements need to return false in order for it to be true and they can flip the card
    }

}


function gameReady() {
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new SimpleMemoryGame (60, cards);

    cards.forEach(card =>{
        card.addEventListener("click" , () => {
            game.flip(card);
        });
    });
}  

// Statement to check if the page has loaded 
if (document.readyState === "loading") {
    document.addEventListener ("DOMContentLoaded",gameReady());
} else {
    gameReady();
}