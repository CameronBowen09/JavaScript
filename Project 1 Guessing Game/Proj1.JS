var max = 10;
var min = 1;
var secret = Math.floor(Math.random() * (max - min) + min);

var button = document.getElementById("guessButton");
button.addEventListener("click", askQuestion);

function askQuestion() {
    var answer = prompt("Please guess the secret number (1-10)");
    var guess = parseInt(answer);
    displayAnswer(guess);
}

function displayAnswer(answerNumber) {
    while (answerNumber) {
        if (answerNumber === secret) {
            alert("Correct!");
        } else if (answerNumber < secret) {
            alert("Incorrect, answer is too low");
            askQuestion();
        } else if (answerNumber > secret) {
            alert("Incorrect, answer is too high");
            askQuestion();
        } else {
            alert("invaled input");
            askQuestion();
        }
    }
}