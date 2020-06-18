class SimpleMemoryGame {
    constructor (time, cards) {
        this.cardsList = cards;
        this.time = time;
        this.timeLeft= time;
        this.timerElement = document.getElementById("time-left");
        
    }

    startGame (){
        this.cardToCheck = null;
        this.timeLeft = this.time;
        this.matches = []; 
        this.busy = true;
        setTimeout(()=> {
            this.shuffle(this.cardsList);
            this.timerStarted = this.startTimer();
            this.busy = false;
        },500);
        this.hideCards();
        this.timerElement.innerText = this.timeLeft;
    }

    //Goes through all the cards to remove the "show-front" class at the start of every game

    hideCards() {
        this.cardsList.forEach (card => {
        card.classList.remove("show-front");
    });

    }


    gameOver(){
        clearInterval(this.timerStarted);
        document.getElementById("game-over-screen").classList.add("show-front");

    }

    win (){
        clearInterval(this.timerStarted);
        document.getElementById("you-won").classList.add("show-front");
    }

    //Timer with if statement to trigger gameOver function when it is equal to 0. 
    //setInterval set at 1000 ms to replicate 1s countdown
    startTimer() {
            return setInterval(() => {
            this.timeLeft-=1 ;
            this.timerElement.innerHTML = this.timeLeft;
            if (this.timeLeft === 0) this.gameOver();

        },1000);
    }
    
    //Function to check whether card can be flipped by checking other functions as conditions with an if statement 
    flip(card) {
        if (this.cardIsFlippable(card)){
            card.classList.add("show-front");

            if(this.cardToCheck) {
                this.matchedCardChecker(card);
            } else {
              this.cardToCheck = card;
            }
        }

    }

    matchedCardChecker (card){

        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatches(card,this.cardToCheck);
        else
            this.cardDoesNotMatch (card,this.cardToCheck);

        this.cardToCheck = null;

    }

    cardMatches(card1,card2) {
        this.matches.push(card1);
        this.matches.push(card2);
        if (this.matches.length === this.cardsList.length)  this.win();
           

    }

    cardDoesNotMatch(card1,card2){
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove("show-front");
            card2.classList.remove("show-front");
            this.busy= false;
        },1000
        )

    }

    getCardType(card){
        return card.getElementsByClassName("card-match")[0].src;
    }

    shuffle() {
        
        for(let i = this.cardsList.length -1; i>0; i--) {
            let randomise = Math.floor(Math.random() * (i+1));
            this.cardsList[randomise].style.order = i; 
            this.cardsList [i].style.order = randomise;
        }
    }
   // Function to check if the user can flip the card
   cardIsFlippable(card){ 
   //All statements need to return false in order for it to be true so they can flip the card
        return !this.busy && !this.matches.includes(card) && card !== this.cardToCheck;
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
    let startButton = Array.from(document.querySelectorAll("#start"));
    let reStartButton = Array.from(document.querySelectorAll("#reStart"))
    let game = new SimpleMemoryGame (60, cards);
    
    overlays.forEach(overlay => {
        overlay.addEventListener("click",() =>{
            overlay.classList.remove("show-front");
            //game.startGame();
        });
    });

    cards.forEach(card =>{
        card.addEventListener("click" , () => {
            game.flip(card);
        });
    });

    startButton.forEach(start => {
        start.addEventListener("click" , () => {
            game.startGame();
  });
});

     reStartButton.forEach(start => {
        start.addEventListener("click" , () => {
            location.reload();
  });
});
    

}  

function disableButton(){
    document.getElementById("start").disabled = true;

}
