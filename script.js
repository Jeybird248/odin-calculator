let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function add(first, second) {
    result = first + second;
    return result;
}
function subtract(first, second) {
    result = first - second;
    return result;
}
function multiply(first, second) {
    result = first * second;
    return result;
}
function divide(first, second) {
    if (second !== 0) {
        result = first / second;
        return result;
    } else {
        return "Cannot divide by zero";
    }
}

function calculate() {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    console.log(operator + " " + firstNumber + " " + secondNumber);
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            return "Invalid operator" + operator;
    }
}

function addNumber(number) {
    let original = document.getElementById("result");
    if (original.textContent === "0") {
        original.textContent = number;
    } else {
        original.textContent += number;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelector(".numbers");

    for (let i = 1; i < 10; i++) {
        let number = document.createElement("button");
        number.textContent = i.toString();
        number.id = "button-" + i.toString();
        number.addEventListener("click", function () {
            addNumber(i.toString());
        });
        numbers.appendChild(number);
    }

    let zeroButton = document.createElement("button");
    zeroButton.textContent = "0";
    zeroButton.id = "button-0";
    zeroButton.addEventListener("click", function () {
        addNumber("0");
    });
    numbers.appendChild(zeroButton);

    const addButton = document.getElementById("+");
    const subtractButton = document.getElementById("-");
    const multiplyButton = document.getElementById("*");
    const divideButton = document.getElementById("/");
    const equalButton = document.getElementById("=");

    equalButton.addEventListener("click", function () {
        if (firstNumber !== "") {
            secondNumber = document.getElementById("result").textContent;
            if(result != "") {
                firstNumber = result;
            }
            document.getElementById("result").textContent = calculate();
            firstNumber = document.getElementById("result").textContent;
            secondNumber = "";
            operator = "";
        }
    });

    function handleOperatorButtonClick(newOperator) {
        if (firstNumber === "") {
            if(result === "") {
                firstNumber = document.getElementById("result").textContent;
                operator = newOperator;
                document.getElementById("result").textContent = "0";
            }
        } else if (secondNumber === "") {
            secondNumber = document.getElementById("result").textContent;
            document.getElementById("result").textContent = calculate();
            firstNumber = document.getElementById("result").textContent;
            secondNumber = "";
            operator = newOperator;
        }
        
    }

    addButton.addEventListener("click", function () {
        handleOperatorButtonClick("+");
    });

    subtractButton.addEventListener("click", function () {
        handleOperatorButtonClick("-");
    });

    multiplyButton.addEventListener("click", function () {
        handleOperatorButtonClick("*");
    });

    divideButton.addEventListener("click", function () {
        handleOperatorButtonClick("/");
    });

    const clearButton = document.getElementById("clear");

    clearButton.addEventListener("click", function () {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        result = "";
        document.getElementById("result").textContent = "0";
    });
});
