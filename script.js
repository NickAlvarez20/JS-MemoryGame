let generateNumber = document.getElementById("numberFlash").innerHTML;
let flashOff = false;
let globalNumber = [];
let correctAnswerIncrement = document.getElementById("correctAnswers");
let incorrectAnswerIncrement = document.getElementById("incorrectAnswers");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//this starts the game
function startGame() {
  let numberOnScreen = [];
  for (let i = 0; i < 5; i++) {
    numberOnScreen.push(getRandomInt(10));
  }
  let numberFlashed = numberOnScreen.join("");
  document.getElementById("numberFlash").innerHTML = numberFlashed;
  globalNumber.push(numberFlashed);
}

//this starts the game
function easy() {
  let numberOnScreen = [];
  for (let i = 0; i < 5; i++) {
    numberOnScreen.push(getRandomInt(10));
  }
  let numberFlashed = numberOnScreen.join("");
  document.getElementById("numberFlash").innerHTML = numberFlashed;
  globalNumber.push(numberFlashed);
}

//this starts the game
function medium() {
  let numberOnScreen = [];
  for (let i = 0; i < 10; i++) {
    numberOnScreen.push(getRandomInt(10));
  }
  let numberFlashed = numberOnScreen.join("");
  document.getElementById("numberFlash").innerHTML = numberFlashed;
  globalNumber.push(numberFlashed);
}

//this starts the game
function hard() {
  let numberOnScreen = [];
  for (let i = 0; i < 15; i++) {
    numberOnScreen.push(getRandomInt(10));
  }
  let numberFlashed = numberOnScreen.join("");
  document.getElementById("numberFlash").innerHTML = numberFlashed;
  globalNumber = numberFlashed;
}

function ready() {
  numberFlash.innerHTML = "";
  flashOff = true;
  if (flashOff == true) {
    numberFlash.innerHTML =
      '<input type="text" id="userInput" placeholder="Enter number">';
    document.getElementById("ready").innerHTML =
      '<button onclick="checkAnswer()" id="check" name="check">Check Answer</button>';
  }
}

function checkAnswer() {
  let userInput = document.getElementById("userInput").value;
  if (userInput === "") {
    alert("Please enter the number");
    return;
  } // Get the value from the input field
  let numberedANS = parseInt(userInput, 10); // Convert the input to an integer
  let changeToNum = parseInt(correctAnswerIncrement.innerHTML, 10);
  let changeToNumWrong = parseInt(incorrectAnswerIncrement.innerHTML, 10);

  // Compare the user's answer with the most recent flashed number
  if (
    globalNumber.length > 0 &&
    numberedANS === parseInt(globalNumber[globalNumber.length - 1], 10)
  ) {
    alert("Correct!");
    flashOff = false;
    changeToNum += 1;
    correctAnswerIncrement.innerHTML = changeToNum;
  } else {
    alert("Wrong!");
    flashOff = false;
    changeToNumWrong += 1;
    incorrectAnswerIncrement.innerHTML = changeToNumWrong;
  }

}

//This ends the game and resets to initial state
function resetGame() {
  correctAnswerIncrement.innerHTML = 0;
  incorrectAnswerIncrement.innerHTML = 0;
  globalNumber = [];
  document.getElementById("numberFlash").innerHTML = "0";
}

/*Implement functions that start the game
1. Start the game
2. After 3 seconds, make a number appear on the screen
3. Flash the number and then wait for them to input a mouse click or type
4. prompt user for input and ask what the number was, type it in, and submit
5. if they guess it correctly, continue, if not, then exit the program and give them their score
*/

/*Implement an endgame function which will exit the current program,
give the user their score, and reset to starting position */

/*Features include:
Difficulty selection(length of number) Or possibly customized
when submitted, tell them correct or incorrect
create counter to compared incorrect vs correct 
*/
