// Import from calculator.js
import { operate } from './calculator.js';

// Global variables
let displayValue = '0';
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function handleNumberInput(number) {
    if (waitingForSecondNumber) {
        displayValue = number;
        waitingForSecondNumber = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function handleOperatorInput(op) {
    if (operator && waitingForSecondNumber) {
        operator = op;
        return;
    }
    if (firstNumber === null) {
        firstNumber = displayValue;
    } else if (operator) {
        const result = operate(operator, parseFloat(firstNumber), parseFloat(displayValue));
        displayValue = String(result);
        firstNumber = displayValue;
    }
    waitingForSecondNumber = true;
    operator = op;
    updateDisplay();
}

function handleEquals() {
    if (firstNumber !== null && operator && !waitingForSecondNumber) {
        const result = operate(operator, parseFloat(firstNumber), parseFloat(displayValue));
        displayValue = String(result);
        firstNumber = null;
        operator = null;
        waitingForSecondNumber = false;
        updateDisplay();
    }
}

function handleClear() {
    displayValue = '0';
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
    updateDisplay();
}

function handleDelete() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function handleDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setupEventListeners() {
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => handleNumberInput(button.textContent));
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => handleOperatorInput(button.textContent));
    });

    document.getElementById('equals').addEventListener('click', handleEquals);
    document.getElementById('clear').addEventListener('click', handleClear);
    document.getElementById('delete').addEventListener('click', handleDelete);
    document.querySelector('.decimal').addEventListener('click', handleDecimal);
}

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    updateDisplay();
});