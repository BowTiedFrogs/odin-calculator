let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function calculatorAdd(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
}

function calculatorSubtract(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}

function calculatorMultiply(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function calculatorDivide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Cannot divide by 0";
    } else {
        return firstNumber / secondNumber;
    }
}