let currentInput = "0";
let operator = "";
let previousInput = "";

const display = document.getElementById("display");

// Update the calculator display
function updateDisplay(value) {
    display.textContent = value;
}

// Handle number input
function inputNumber(num) {
    if (currentInput === "0") {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    updateDisplay(currentInput);
}

// Handle decimal point input
function inputDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay(currentInput);
    }
}

// Handle operator input
function inputOperator(op) {
    if (currentInput !== "") {
        if (operator !== "") {
            calculate();  // If operator exists, calculate first
        }
        operator = op;
        previousInput = currentInput;
        currentInput = "";
    }
}

// Clear the calculator display
function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = "";
    updateDisplay(currentInput);
}

// Delete the last digit
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        currentInput = "0";
    }
    updateDisplay(currentInput);
}

// Perform the calculation
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            if (curr === 0) {
                result = "Error";
            } else {
                result = prev / curr;
            }
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay(currentInput);
}

// Calculate percentage
function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay(currentInput);
}

// Calculate square
function calculateSquare() {
    currentInput = (parseFloat(currentInput) ** 2).toString();
    updateDisplay(currentInput);
}
