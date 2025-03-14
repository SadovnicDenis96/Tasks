let userInput = prompt("Enter a number:");

let number = Number(userInput);

if (isNaN(number)) {
    alert("Error");
} else if (number > 0) {
    alert("1");
} else if (number < 0) {
    alert("-1");
} else {
    alert("0");
}

