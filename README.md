<h2 align ="center">A Simple Card Game</h2>

<p align ="center">Fun,simple and interactive memory game.<br>
 A game designed to improve memory and  kill "waiting times" like waiting for your bus or for your food/coffee order and etc.<br>
 Features include easy to operate controls, a timer to make it challenging and eye catching visuals.</p>

## Table of Contents

[**Demo**](#demo)

[**UX**](#ux)

[**Technologies Used**](#technologies-used)

[**Testing**](#testing)

[**Bugs and Fixes**](#bugs-and-fixes)

[**Deployment**](#deployment)

[**Credits**](#credits)

## Demo
<a href= "https://haleanana.github.io/a-simple-card-game/" target= "_blank">Live Demo</a>

<img src = "https://github.com/haleanana/a-simple-card-game/blob/master/assets/mockup/demo1.PNG" style = "max-width:100%"/>

[**back to top**](#table-of-contents)
## UX

### Goals

The main objective of the game is to provide a quick ,fun and challenging game to it's users while also helping them improve their memory.<br>
This game is suitable and catered for young adults and adults. 

### Target audience goals

The main target audience of this game are people aged 16+.

Player goals:
- Quick time killer. 
- Fun and challenging.
- Helps improve memory.
- Simple and visually pleasing.
- Easy to use on whatever device you are using.

How this game meets their needs:
- The look and feel of the game is designed to have a mature feel to it.
- Timer implemented to ensure a quick challenging game.
- Game features more cards than your standard game to help improve memory and also to provide more challenge.
- Game is designed to be responsive on any device.

### Goals as a developer

- Learn  and improve my JavaScript skills as well as further improve my CSS/HTML skills.
- Expand my portofolio.
- Satisfy my love for gaming by creating something that I will enjoy playing.
- Provide entertainment to users thats fun and easy to use without encountering any bugs that might ruin their experience.

### User stories

As a player aged 16+ , what I would want in a game: 

1. A mature look and feel whilst also visually pleasing to cater for my age group.
2. A quick game to kill time and provide entertainment whilst I'm waiting for a friend or waiting for the train etc.
3. A game that is not too easy and provides a bit of a challenge so that I'm not easily bored.
4. The ability to play the game in whichever device I am using so I can play at home or on my phone.
5. Simple design and easy to use so I dont have to navigate through content to play the game. 


### Design choices

**Colour scheme**
- The colour scheme was based on the Xbox logo because of the simplicity and because it is visually striking. 
- I also hoped to give ex-gamers a sense of nostalgia that is associated with the colour combination.

**Card images and icon**
- Simple colour combination for a nice, clear and  clean contrast.
- Images of animals used as it is neutral and caters to almost everybody. 

**Fonts**
- The primary font used in this website is *Concert one*. This was used because it has a gaming feel but at the same time, a kind of mature feel  to it.

**Gameplay**
- Initially, the number of cards were lower but was increased significantly to provide more challenge.

### Wireframes

I used Figma to create my mock ups for this project.

- <a href="https://www.figma.com/proto/IfUFGbuWbM2nSSeQGDbmP3/Untitled?node-id=2%3A2&scaling=min-zoom" target="_blank"> Mock up with screen overlay on PC.</a>
- <a href="https://www.figma.com/proto/IfUFGbuWbM2nSSeQGDbmP3/Untitled?node-id=16%3A6&scaling=scale-down" target="_blank"> Mock up with Win overlay on Tablet.</a>
- <a href="https://www.figma.com/proto/IfUFGbuWbM2nSSeQGDbmP3/Untitled?node-id=16%3A198&scaling=scale-down" target="_blank"> Mock up with Lose overlay on mobile.</a>

[**back to top**](#table-of-contents)

## Features


### Exisitng Features
1. **Screen overlay** 
- Screen overlay to show at the start of the game to explain the rules of the game. A different screen overlay will also show up during a win or a loss. 
- All overlays can be dismmised by pressing anywhere on the screen.

2. **Timer and Start button**
- Countdown timer starts when the Start button is pressed. Upon reaching zero, it will trigger the "game over" overlay.
- Designed so that the timer doesnt start and none of the cards are flippable unless the player presses the start button first.
- The start button is designed to disable itself when pressed to avoid being pressed again.

3. **Restart Button and Rules**
- Restart button reloads the page to start a new game. Can be pressed anytime so the player can restart whenever they want.
- Rules button implemented to give the player the option to view the rules again. The timer will not stop to avoid exploiting the game. 
- Rules box dismissable by clicking anywhere on "X" mark as well as anywhere on the screen for ease of use.

4. **Cards and Shuffle cards** 
- Cards are made interactive. When you hover on the back of the card, the icon will start spinning. 
- Card flip animation implemented to imitate real life card flips.
- Cards are shuffled at the start of the new game to avoid repetition. 


### Features left to implement 
1. **Restructuring of the restart button**
- At the moment, this feature is achieved by reloading the whole page. I would like to recode this in the future so that it will restart the game without having to reload the page.
- **Update**: Restart recoded with the help of my Mentor and now restart button doesnt simply reload the page. Restart button clears the timer and reshuffles the deck.

2. **Adding a difficulty level**
- Add another level to the game a player can select where it will be more diffult and more challenging. Perhaps I can increase the number of the cards or decrease the timer.

3. **Scoreboard**
- I would like to add a Scoreboard so players can keep track of their games and try beat their highscores. This will add replayabilty to my game.

[**back to top**](#table-of-contents)

## Technologies used


**HTML** - To create the structure of the website. <br>
**CSS** - To add styles and make my website visually appealing.<br>
**Figma** - To create the wireframe of my website.<br>
**Javascript**- To expand the capability and interactivity of my website.<br>
**GitHub**- To store and share this project.<br>
**Google Fonts**- To access the fonts that I wanted for this website.<br>
**Font Awesome**- To access the icons that I wanted for this website.<br>
**Gitpod**- To write my code using their IDE.<br>

[**back to top**](#table-of-contents)

## Testing

### Validated through: 

- [W3C Markup Validation]( https://validator.w3.org/) for HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) for CSS.
- [JSHint](https://jshint.com/) for JavaScript.
- [Autoprefixer CSS]( https://autoprefixer.github.io/) for browser compatibility.

### Tested through:

- Google Lighthouse
- [Mobile Friendly Test]( https://search.google.com/test/mobile-friendly?id=cErBlLKhLhSe_SlDTsC0nQ)
- Chrome developer tools
- [BrowserStack](https://www.browserstack.com/)


**Testing was done by me and 4 other users.**
Below are the following scenarios that was tested: 

1. **Start ,Restart and Rules buttons**
- All buttons where tested on different browsers and devices to make sure they work and responsive.
- Buttons execute the proper command when pressed. For example, pressing "Start" button initiates the countdown timer and disables itself as intended to avoid being pressed again.
- Buttons pressed multiple times to see if it creates any bugs and or if it breaks the game. (For more info, see [**Bugs**](#bugs-and-fixes) section ).
- Confirmed that screen overlays are dismissable by clicking anywhere on the screen using touch screen or using a mouse.
2. **Cards & Gameplay** 
- Tried to flip more than 2 mismatching cards and confirmed that this is not doable as intended.
- Matched cards stay revealed as intended.
- Confirmed that you are unable to click outside of a card to reveal any cards by clicking on non card element.
- Clicked on the same card multiple times to reveal any hidden bugs (see [**Bugs**](#bugs-and-fixes) section)
- Mismatching cards stay hidden as intended.
- Game played on different platforms (iPhone, Samsung s10, iPad, PC) and confirmed that it runs as intended on every platform it was tested on.
- Cards are shuffled at every new game as intended. 
3. **Win**
- Matched every card before timer runs out . This was done over and over again and confirms that "Win" condition executes properly.
- Win overlay shows as soon as all cards are matched and is dismissable by pressing anywhere as intended.
4. **Lose**
- Timer set at 10 seconds to simulate losing with 0 matching cards and confirmed that "Lose"condition executes when timer reaches 0.
- Timer set at 10 seconds to simulate losing with a few matching cards and confirmed that "Lose" condition executes when timer reaches 0.
- Lose overlay shows when the timer reaches 0 as inteded.
- Player unable to flip any further cards when overlay is dismissed as intended. 
5. **Layout and Design** 
- Tested on multiple browsers and different devices (see [**Bugs**](#bugs-and-fixes) section)
- Increased and decreased window size to test responsiveness. 
6. **Links**
- Links redirect to the correct page. 

### Further testing
1. Friends and relatives are asked to report any bugs they encounter in the future.
2. Device emulator to be downloaded to test the game on even more platforms.

[**back to top**](#table-of-contents)

## Bugs and Fixes
1. On the iPhone, the cards when pressed revealed the hidden image before it flipped. 
- Fixed:  I added -webkit to my classes to fix this issue. 
2. It was possible to press "Start" button multiple times and this would make the timer run twice as fast.
- Temporary Fix: Disabled "Start"button once its pressed.
- Update: Start button now completely disappears and is replaced with a restart button. This should improve user experience compared to the disabled button.
3. During game over or when the timer reached 0, users were still able to flip cards and continue with the game and still win.
- Fixed: Statement !this.timeLeft ==0 added to my cardIsFlippable function. This ensures that cards are no longer flippable when timer is at 0.
```javascript 
cardIsFlippable(card){ 
        return !this.busy && !this.matches.includes(card) && card !== this.cardToCheck && !this.timeLeft ==0;
    }
```
4. When played on Samsung phones, the timer and button seem to overlap. Doesnt show on Chrome developer tools. 
- Fixed: Added margin to push buttons further down.
5. When restart button is clicked multiple times really fast, the timer countdown goes twice as fast and timer goes to negative. 
- Unsolved: Tried to implement clearInterval() and setTimeout() but so far no solution has been found.
- Update: Temporary fix implemented. Added a setTimeout function to disable restart button for 3 seconds to prevent clicking it consecutively which was causing the bug.
6. Similar case happens when restart button is pressed right after the start button is pressed, the countdown timer will also countdown twice as fast.
- Fixed: Implemented restart button timeout on startButton function so it disables the button momentarily to prevent double clicking it. 
7. Some cards would shrink in width when using Firefox browser. 
- Fixed: Removed height property on .card-front img  as this was what was causing the bug and only slightly alters the images on other browsers.
8. Favicon error 404.
- Fixed: Added Favicon image to address the error and prevent future errors.
9. When timer hasnt started, if you press the cards, console shows errors "Cannot read property "includes" of undefined".
- Fixed: By adding this.matches, it is no longer undefined for when this.matches.includes executes.
```javascript
cardIsFlippable(card){ 
        return !this.busy && this.matches && !this.matches.includes(card) && card !== this.cardToCheck && !this.timeLeft ==0;
    }
```

[**back to top**](#table-of-contents)

## Deployment ##

This project was built using Gitpod IDE , commited and published using GitHub.

### To deploy: ###
1. Log into GitHub.
2. Select haleanana/a-simple-card-game from the list of repositories.
3. Once the repository has loaded, click on the settings near the top of the page.
4. Scroll down to the GitHub Pages section.
5. Click on the drop down menu under Source and select Master Branch.
6. Once Master Branch is selected, the page will refresh and your link will show up on the GitHub pages section.
7. Retrieve link.

### To run this project locally ###
1. Follow this <a href= "https://github.com/haleanana/a-simple-card-game" target = "_blank"> link </a>
2. Click "Clone or Download". 
3. Copy the clone URL under the HTTPs section.
4. Run the files in your local IDE.

[**back to top**](#table-of-contents)

## Credits 

[Fontawesome](https://fontawesome.com/) 
- Icons used for github link and back of the card icons.


[PNG ALL](http://www.pngall.com/)
- Images for front of the card.


[StackOverflow](https://stackoverflow.com/questions/62425382/initiating-gameready-function-on-button-click?noredirect=1#comment110418639_62425382)
- Helped me solve my problem with gameReady function not initiating when the button is pressed.


[Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)


- Guided me through the code and helped me understand how the code works in a memory game.


[W3schools](https://www.w3schools.com/)
- Used numerous times to help understand errors and solve problems. 

### Special Mention:

- Estefi, Hines, Craig & Keitel for helping me test the game extensively and reporting any bugs they find.
- Mentor Femi Medale for his suggestions to help improve my over all website.

### Disclaimer: 
This entire website is used for educational purpose only.

[**back to top**](#table-of-contents)













