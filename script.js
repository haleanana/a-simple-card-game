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
        this.timer.innerText = this.timeLeft
        setTimeout(()=> {
            this.busy=false
            this.timerStarted = this.startTimer;
        },500);
       

    }

    hideCards() {
        this.cardsArray.forEach (card => {
        card.classList.remove("show-front");
    })

    }

    gameOver(){
        clearInterval(this.timerStarted);
        document.getElementById("game-over-screen").classList.add("show-front");

    }

    startTimer(){
        return setInterval(() => {
            this.timeLeft-- ;
            this.timer.innerText = this.timeLeft;
            if (this.timeLeft === 0)
            this.gameOver();

        },1000);
    }


    flip(card) {
        if (this.cardIsFlippable(card)){
            card.classList.add("show-front");
        }

    }

    shuffle() {
        
        for(let i = this.cardsArray.length -1; i>0; i--) {
            let randomise = Math.floor(Math.random() * (i+1));
            this.cardsArray[randomise].style.order = i; 
            this.cardsArray [i].style.order = randomise;
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
    let overlays = Array.from(document.getElementsByClassName("screen-overlay"));
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new SimpleMemoryGame (5, cards);
    
    overlays.forEach(overlay => {
        overlay.addEventListener("click",() =>{
            overlay.classList.remove("show-front");
            game.startGame()
        });
    });

    cards.forEach(card =>{
        card.addEventListener("click" , () => {
            game.flip(card);
        });
    });
}  