/* Asks the user what will be the maximum number.
Only lets !string input. */
let maximum = parseInt(prompt("Enter the maximum number!"));

// As long as the user inputs a string, the prompt will apear.
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

/* Here we generate a random number and round it down.
So it will be a whole number.
We multiply it with the maximum number.
The we add one, so that it will not be zero.
So max number will be accurate, not one less */
const targetNum = Math.floor(Math.random() * maximum) + 1

//Prints the number, that should be guessed.
console.log(targetNum);

/* Again, we ask for an input.
Also check if the input is number. */
let guess = parseInt(prompt("Enter your first guess!"));

// As long as the user inputs a string, the prompt will apear.
while (!guess) {
    guess = parseInt(prompt("Enter a valid number!"));
}

/* We tell the user if number is too high/low.
Only if they do not guess the number. */
while (guess !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! Enter a new guess!"));
    } else {
        guess = parseInt(prompt("Too low! Enter a new guess!"));
    }

}

/* The user gets this message,
but only if they guessed right. */
alert("YOU GUESSED IT!")
