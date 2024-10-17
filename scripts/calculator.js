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
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
}

// Function to handle number input
function handleNumberInput(number) {
    if (waitingForSecondNumber) {
        displayValue = number;
        waitingForSecondNumber = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

// Function to handle operator input
function handleOperator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
    } else if (operator) {
        const result = operate(operator, firstNumber, parseFloat(displayValue));
        displayValue = String(result);
        firstNumber = result;
    }
    
    operator = op;
    waitingForSecondNumber = true;
    updateDisplay();
}

// Function to handle equals
function handleEquals() {
    if (operator && firstNumber !== null) {
        const secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        displayValue = String(result);
        firstNumber = null;
        operator = null;
        waitingForSecondNumber = false;
        updateDisplay();
    }
}

// Function to clear the calculator
function clearCalculator() {
    displayValue = '0';
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
    updateDisplay();
}

// Set up event listeners when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => handleNumberInput(button.textContent));
    });

    // Add event listeners for operator buttons
    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => handleOperator(button.textContent));
    });

    // Add event listener for equals button
    document.getElementById('equals').addEventListener('click', handleEquals);

    // Add event listener for clear button
    document.getElementById('clear').addEventListener('click', clearCalculator);

    // Add event listener for delete button
    document.getElementById('delete').addEventListener('click', () => {
        displayValue = displayValue.slice(0, -1) || '0';
        updateDisplay();
    });

    // Add event listener for decimal button
    document.querySelector('.decimal').addEventListener('click', () => {
        if (!displayValue.includes('.')) {
            displayValue += '.';
            updateDisplay();
        }
    });

    // Initial display update
    updateDisplay();
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        handleNumberInput(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key);
    } else if (key === 'Enter' || key === '=') {
        handleEquals();
    } else if (key === 'Escape') {
        clearCalculator();
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1) || '0';
        updateDisplay();
    } else if (key === '.') {
        if (!displayValue.includes('.')) {
            displayValue += '.';
            updateDisplay();
        }
    }
});