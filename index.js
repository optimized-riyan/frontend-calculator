let display = document.getElementById("display");
let clearFlag = false;

document.getElementById("btn-1").addEventListener("click", () => {
    display.innerText += "1";
});

document.getElementById("btn-2").addEventListener("click", () => {
    display.innerText += "2";
});

document.getElementById("btn-3").addEventListener("click", () => {
    display.innerText += "3";
});

document.getElementById("btn-4").addEventListener("click", () => {
    display.innerText += "4";
});

document.getElementById("btn-5").addEventListener("click", () => {
    display.innerText += "5";
});

document.getElementById("btn-6").addEventListener("click", () => {
    display.innerText += "6";
});

document.getElementById("btn-7").addEventListener("click", () => {
    display.innerText += "7";
});

document.getElementById("btn-8").addEventListener("click", () => {
    display.innerText += "8";
});

document.getElementById("btn-9").addEventListener("click", () => {
    display.innerText += "9";
});

document.getElementById("btn-0").addEventListener("click", () => {
    display.innerText += "0";
});

document.getElementById("btn-equals").addEventListener("click", () => {
    if (clearFlag)
        display.innerText = "";
    calculate();
});

document.getElementById("btn-plus").addEventListener("click", () => {
    display.innerText += "+";
});

document.getElementById("btn-minus").addEventListener("click", () => {
    display.innerText += "-";
});

document.getElementById("btn-mul").addEventListener("click", () => {
    display.innerText += "*";
});

document.getElementById("btn-div").addEventListener("click", () => {
    display.innerText += "/";
});

document.getElementById("btn-left-brac").addEventListener("click", () => {
    display.innerText += "(";
});

document.getElementById("btn-right-brac").addEventListener("click", () => {
    display.innerText += ")";
});

document.getElementById("btn-backspace").addEventListener("click", () => {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
});

document.getElementById("btn-clear").addEventListener("click", () => {
    display.innerText = "";
});



function isOperator(char) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(char);
}

// Function to check if a character is a digit
function isDigit(char) {
    return /^\d+$/.test(char);
}

// Function to get the precedence level of an operator
function getPrecedence(operator) {
    if (operator === '+' || operator === '-') {
        return 1;
    } else if (operator === '*' || operator === '/') {
        return 2;
    }
    return 0;
}

// Function to apply the operation
function applyOperation(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                throw new Error("Division by zero error");
            }
            return operand1 / operand2;
        default:
            throw new Error("Invalid operator: " + operator);
    }
}

// Function to parse the expression
function parseExpression() {
    let expression = display.innerText;

    const tokens = [];
    const operators = [];
    let num = "";

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        if (char === " ") {
            continue;
        } else if (isOperator(char)) {
            if (num) {
                tokens.push(parseFloat(num));
                num = "";
            }

            while (
                operators.length > 0 &&
                isOperator(operators[operators.length - 1]) &&
                getPrecedence(operators[operators.length - 1]) >= getPrecedence(char)
            ) {
                tokens.push(operators.pop());
            }
            operators.push(char);
        } else if (isDigit(char)) {
            num += char;
        } else if (char === "(") {
            operators.push(char);
        } else if (char === ")") {
            if (num) {
                tokens.push(parseFloat(num));
                num = "";
            }

            while (operators.length > 0 && operators[operators.length - 1] !== "(") {
                tokens.push(operators.pop());
            }

            if (operators.length === 0 || operators[operators.length - 1] !== "(") {
                throw new Error("Invalid expression: Unbalanced parentheses");
            }

            operators.pop();
        } else {
            throw new Error("Invalid character: " + char);
        }
    }

    if (num) {
        tokens.push(parseFloat(num));
    }

    while (operators.length > 0) {
        if (operators[operators.length - 1] === "(") {
            throw new Error("Invalid expression: Unbalanced parentheses");
        }
        tokens.push(operators.pop());
    }

    return tokens;
}

function evaluateExpression(parsedExpression) {
    const stack = [];
    console.log(parsedExpression);

    for (let i = 0; i < parsedExpression.length; i++) {
        const token = parsedExpression[i];
        if (isOperator(token)) {
            if (stack.length < 2) {
                display.innerText = "Invalid expression";
                throw new Error("Invalid expression: Insufficient operands for operator " + token);
            }
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const result = applyOperation(token, operand1, operand2);
            stack.push(result);
        } else {
            stack.push(token);
        }
    }

    if (stack.length !== 1) {
        display.innerText = "Invalid expression";
        throw new Error("Invalid expression: Too many operands")
    }

    return stack[0];
}

function calculate() {
    let parsedExpression = parseExpression(display.innerText);
    let evalNum = evaluateExpression(parsedExpression);
    display.innerText = evalNum;
}