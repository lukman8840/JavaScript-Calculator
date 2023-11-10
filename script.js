let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let numArray = []; // declairing the first Array variable
let secondNumberArray = []; // declairing the second Array variable


let display = document.getElementById('display'); 


// function to join and push the Arrays
function getNumber(num) {
    if (step === 0 || step === 1) {
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join('')); // Convert the string to a number
        display.value = firstNumber;
    } else if (step === 2) {
        secondNumberArray.push(num); // Push the number into secondNumberArray
        secondNumber = Number(secondNumberArray.join('')); // Convert the string to a number
        display.value = secondNumber;
    }
}

function getOperator(op) {
    step = 2;
    operation = op;
}

function clearDisplay() {
    display.value = 0;
    firstNumber = null;
    secondNumber = null;
    step = 0;
    // operation = null;
    result = 0;
    numArray.length = 0; // Clear the array by setting its length to 0
    secondNumberArray.length = 0; // Clear the array by setting its length to 0
}

// decairing and checking operations and displaying the result
const calculateEquals = () => {
    if (operation === '+') {
        result = firstNumber + secondNumber;
        display.value = result;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
        display.value = result;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
        display.value = result;
    } else if (operation === '/') {
        if (secondNumber != 0){
            result = firstNumber / secondNumber;  
            display.value = result;
        } else {
            display.value = "Undefined";
            return
        }
    }
    display.value = result;
}
