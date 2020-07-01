const GAME_TIME = 60
const rules = document.getElementById("myrules");
const btnForRules = document.getElementById("information");
const closeBox = document.getElementsByClassName("close")[0];


//Class created with methods for gameplay
class SimpleMemoryGame {
 constructor(cards) {
  this.cardsList = cards;
  this.time = GAME_TIME;
  this.timeLeft = GAME_TIME;
  this.timerElement = document.getElementById("time-left");
 }
 /*This method calls other methods such as the shuffle method at 
 start of a game*/
 startGame() {
  this.cardToCheck = null;
  this.timeLeft = this.time;
  this.matches = [];
  this.busy = true;
  setTimeout(() => {
   this.shuffle();
   this.timer = this.startTimer();
   this.busy = false;
  }, 500);
  this.hideCards();
  this.timerElement.innerText = this.timeLeft;
 }

 /*Goes through all the cards to remove the "show-front" 
 class at the start of every game*/
 hideCards() {
  this.cardsList.forEach(card => {
   card.classList.remove("show-front");
  });

 }

 //Triggers the class overlay-wrapper and display either Win or Lose message
 afterGame(message) {
  clearInterval(this.timer);
  document.getElementById("overlay-text").innerHTML = message
  document.getElementById("overlay-wrapper").classList.add("show-front");

 }


 //Timer with if statement to trigger gameOver function when it is equal to 0. 
 //setInterval set at 1000 ms to replicate 1s countdown
 startTimer() {
  return setInterval(() => {
   this.timeLeft -= 1;
   this.timerElement.innerHTML = this.timeLeft;
   if (this.timeLeft === 0) this.afterGame("You Lost!");

  }, 1000);
 }

 /*Function to check whether a card can be flipped by checking other 
 functions as conditions with an if statement */
 flip(card) {
  if (this.cardIsFlippable(card)) {
   card.classList.add("show-front");

   if (this.cardToCheck) {
    this.matchedCardChecker(card);
   } else {
    this.cardToCheck = card;
   }
  }

 }
 /*Checks card matches by checking if getCardType is equal to
  cardToCheck through their img file name*/
 matchedCardChecker(card) {

  if (this.getCardType(card) === this.getCardType(this.cardToCheck))
   this.cardMatches(card, this.cardToCheck);
  else
   this.cardDoesNotMatch(card, this.cardToCheck);

  this.cardToCheck = null;

 }
 /*Matching cards are stored into card1 and card2 which will then 
 check if the length is equal to the length of the cards array*/
 cardMatches(card1, card2) {
  this.matches.push(card1);
  this.matches.push(card2);
  if (this.matches.length === this.cardsList.length) this.afterGame("You Win!");


 }
 //This method hides the cards again when they do not match
 cardDoesNotMatch(card1, card2) {
  this.busy = true;
  setTimeout(() => {
   card1.classList.remove("show-front");
   card2.classList.remove("show-front");
   this.busy = false;
  }, 1000)

 }
 //Identifies the cards by their file name
 getCardType(card) {
  return card.getElementsByClassName("card-match")[0].src;
 }
 /*Shuffles the cards by taking a random item in the cards list 
 and swapping the ccs grid list order*/
 shuffle() {

  for (let i = this.cardsList.length - 1; i > 0; i--) {
   let randomise = Math.floor(Math.random() * (i + 1));
   this.cardsList[randomise].style.order = i;
   this.cardsList[i].style.order = randomise;
  }
 }
 /*Function to check if the user can flip the card
 All statements need to return false in order for it to 
 be true so they can flip the card*/
 cardIsFlippable(card) {
  return !this.busy && !this.matches.includes(card) && card !== this.cardToCheck && !this.timeLeft == 0;
 }

}

// Statement to check if the page has loaded 
if (document.readyState === "loading") {
 document.addEventListener("DOMContentLoaded", gameReady());
} else {
 gameReady();
}

function gameReady() {
 let overlay = document.getElementById("overlay-wrapper");
 const overlayText = document.getElementById("overlay-text");
 let cards = Array.from(document.getElementsByClassName("card"));
 let startButton = document.getElementById("start");
 let reStartButton = document.getElementById("reStart")
 let game = new SimpleMemoryGame(cards);
 const timer = this.timer;
 reStartButton.style.display = "none";

 //To dismiss overlay message after page loads
 overlay.addEventListener("click", () => {
  overlayText.innerHTML = ""
  overlay.classList.remove("show-front");
 });

 //Makes the cards clickable 
 cards.forEach(card => {
  card.addEventListener("click", () => {
   game.flip(card);
  });
 });
 //starts the game after the button is clicked
 startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  reStartButton.style.display = "initial";
  game.startGame();
 });
 //restarts the game after the button is clicked
 reStartButton.addEventListener("click", () => {
  clearInterval(game.timer);
  reStartButton.disabled = true;
  setTimeout(function(){
      reStartButton.disabled=false;
  },3000);
  game.timerElement.innerHTML = GAME_TIME;
  game.time = GAME_TIME;
  game.timeLeft = GAME_TIME;
  game.startGame();

  console.log(setTimeout)

 });

}


//Based on code from w3schools How to Create a Modal Box
//Displays the rules on click
btnForRules.onclick = function() {
 rules.style.display = "block";
}
//Closes the rules when "x" is pressed
closeBox.onclick = function() {
 rules.style.display = "none";
}
//Closes the rules if anywhere else on the window is clicked
window.onclick = function(event) {
 if (event.target == rules) {
  rules.style.display = "none";
 }
}