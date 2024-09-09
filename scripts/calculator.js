// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default: return "Error: Invalid operator";
    }
}

// Variables to store the state of the calculator
let displayValue = '0';
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

// Function to update the display
function updateDisplay() {
    // TODO: Update the display with the current displayValue
}

// Function to handle number input
function handleNumberInput(number) {
    // TODO: Update displayValue based on the number clicked
    // Don't forget to call updateDisplay() after modifying displayValue
}

// Function to handle operator input
function handleOperator(op) {
    // TODO: Handle when an operator button is clicked
    // Don't forget to call updateDisplay() if needed
}

// Function to handle equals
function handleEquals() {
    // TODO: Perform the calculation when the equals button is pressed
    // Don't forget to call updateDisplay() after updating displayValue
}

// Function to clear the calculator
function clearCalculator() {
    // TODO: Reset the calculator to its initial state
    // Don't forget to call updateDisplay() after resetting
}

// Set up event listeners when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // TODO: Add event listeners for number buttons

    // TODO: Add event listeners for operator buttons

    // TODO: Add event listener for equals button

    // TODO: Add event listener for clear button

    // Initial display update
    updateDisplay();
});


// Keyboard support