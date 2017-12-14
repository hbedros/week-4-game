// The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.
// Here's how the app works:
// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.
var gameRandomNumber = getRandomNumber();
var blueGemScore =  crystalNumber();
var yellowGemScore = crystalNumber();
var pinkGemScore = crystalNumber();
var greenGemScore = crystalNumber();
var gameScore = 0;
var wins = 0;
var losses = 0;


function getRandomNumber() {  
    var randomNumber = Math.floor(Math.random() * 100 + 1);   
    return randomNumber;
}

function crystalNumber() {
    var randomNumber = Math.floor(Math.random() * 25 + 1); 
    return randomNumber;
}

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
// click event listener for gem

$(document).on("click", ".gem", function(){
   var elementClicked = $(this).attr("id");
   console.log("This gem was clicked: " + elementClicked);
   updateGameScore(elementClicked);
   checkForWin();
});




// Your game will hide this amount until the player clicks a crystal.


// When they do click one, update the player's score counter.
function updateGameScore(gemColor){
        console.log(gemColor);

        if (gemColor === "blue") {
            console.log("The blue gem was clicked");
            gameScore += blueGemScore;
        } else if (gemColor === "yellow") {
            console.log("The yellow gem was clicked");
            gameScore += yellowGemScore;
        } else if (gemColor === "pink") {
            console.log("The pink gem was clicked");
            gameScore += pinkGemScore;
        } else if (gemColor === "green") {
            console.log("The green gem was clicked");
            gameScore += greenGemScore;
        }
}

// The player wins if their total score matches the random number from the beginning of the game.
function checkForWin(){

    if (gameScore === gameRandomNumber) {
        alert("YOU WON!");
        wins +=1;
        resetGame();

    }else if (gameScore > gameRandomNumber){
        alert("YOU LOST!")
        losses +=1;
        resetGame();
    }

}
// The player loses if their score goes above the random number.


// The game restarts whenever the player wins or loses.
function resetGame(){
    gameRandomNumber = getRandomNumber();
    blueGemScore =  crystalNumber();
    yellowGemScore = crystalNumber();
    pinkGemScore = crystalNumber();
    greenGemScore = crystalNumber();
    gameScore = 0;

    alert("NEW GAME");
}

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
