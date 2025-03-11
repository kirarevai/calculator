const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b === 0) {return null;}
    return a / b;
};

let firstNumber = "";

let operator = {
   "+": add,
   "-": subtract,
   "*": multiply,
   "/": divide,
}

let resultDisplayed = false;

let firstDecimalUsed = false;
let secondDecimalUsed = false;

let selectedOperator = "";

let secondNumber = "";

let isSecondNumber = false;

const operate = function(a, op, b) {
    return operator[op] ? operator[op](a,b) : "Invalid operator";};



const calculator = document.createElement("div");
document.body.appendChild(calculator);
calculator.classList.add("calculator");

function updateDisplay(value) {

    if (resultDisplayed) {
        display.textContent = "";
        firstNumber = "";
        secondNumber = "";
        selectedOperator = "";
        isSecondNumber = false;
        resultDisplayed = false;
    }

        display.textContent += value;
        
        if (isSecondNumber) {
            secondNumber += value;
        } else {
            firstNumber += value;
        }

    }


function handleOperator(op) {
    if (firstNumber === "" || isSecondNumber) return;
    selectedOperator = op;
    isSecondNumber = true;
    display.textContent += ` ${selectedOperator} `;
    secondDecimalUsed = false;
}


const numberContainer = document.createElement("div");
calculator.appendChild(numberContainer);
numberContainer.classList.add("numberContainer");

const one = document.createElement("button");
one.textContent = "1";
numberContainer.appendChild(one);
one.addEventListener("click", () => updateDisplay("1"));
one.classList.add("numbers");

const two = document.createElement("button");
two.textContent = "2";
numberContainer.appendChild(two);
two.addEventListener("click", () => updateDisplay("2"));
two.classList.add("numbers");

const three = document.createElement("button");
three.textContent = "3";
numberContainer.appendChild(three);
three.addEventListener("click", () => updateDisplay("3"));
three.classList.add("numbers");


const four = document.createElement("button");
four.textContent = "4";
numberContainer.appendChild(four);
four.addEventListener("click", () => updateDisplay("4"));
four.classList.add("numbers");



const five = document.createElement("button");
five.textContent = "5";
numberContainer.appendChild(five);
five.addEventListener("click", () => updateDisplay("5"));
five.classList.add("numbers");


const six = document.createElement("button");
six.textContent = "6";
numberContainer.appendChild(six);
six.addEventListener("click", () => updateDisplay("6"));
six.classList.add("numbers");



const seven = document.createElement("button");
seven.textContent = "7";
numberContainer.appendChild(seven);
seven.addEventListener("click", () => updateDisplay("7"));
seven.classList.add("numbers");



const eight = document.createElement("button");
eight.textContent = "8";
numberContainer.appendChild(eight);
eight.addEventListener("click", () => updateDisplay("8"));
eight.classList.add("numbers");


const nine = document.createElement("button");
nine.textContent = "9";
numberContainer.appendChild(nine);
nine.addEventListener("click", () => updateDisplay("9"));
nine.classList.add("numbers");


const zero = document.createElement("button");
zero.textContent = "0";
numberContainer.appendChild(zero);
zero.addEventListener("click", () => updateDisplay("0"));
zero.classList.add("numbers");

const operatorsContainer = document.createElement("div");
calculator.appendChild(operatorsContainer);
operatorsContainer.classList.add("operatorsContainer");

const backspace = document.createElement("button");
backspace.textContent = "Del";
calculator.appendChild(backspace);
backspace.addEventListener("click", () => 
    {if (display.textContent === "") return;
    display.textContent = display.textContent.slice(0, -1);
    
    if (isSecondNumber) {
        if (secondNumber.length > 0) {
            secondNumber = secondNumber.slice(0, -1);
        } else {
            isSecondNumber = false;
            selectedOperator = "";
        } } 
        else if (selectedOperator) {
            selectedOperator = "";
        }  
    else {firstNumber = firstNumber.slice(0, -1);
    }}
)




const clearButton = document.createElement("button")
clearButton.textContent = "Clear";
calculator.appendChild(clearButton);
clearButton.addEventListener("click", () => {
    displayValue = "";
    display.textContent = "";
    firstNumber = "";
    secondNumber = ""
    isSecondNumber = false;
    selectedOperator = ""});



const display = document.createElement("div");
let displayValue = "";
display.textContent =  displayValue;
calculator.appendChild(display);
display.classList.add("display");


const plus = document.createElement("button");
plus.textContent = "+";
operatorsContainer.appendChild(plus);
plus.addEventListener("click", () =>    handleOperator("+"));
plus.classList.add("operators");

const minus = document.createElement("button");
minus.textContent = "-";
operatorsContainer.appendChild(minus);
minus.addEventListener("click", () =>
    handleOperator("-")
);
minus.classList.add("operators")


const cross = document.createElement("button");
cross.textContent = "x";
operatorsContainer.appendChild(cross);
cross.addEventListener("click", () => handleOperator("*"));
cross.classList.add("operators")


const division = document.createElement("button");
division.textContent = "/";
operatorsContainer.appendChild(division);
division.addEventListener("click", () => handleOperator("/"));
division.classList.add("operators")


const equal = document.createElement("button");
equal.textContent = "=";
operatorsContainer.appendChild(equal);
equal.classList.add("operators");
equal.addEventListener("click", () => {
    resultDisplayed = true;
    if (resultDisplayed === true) {}
    if (firstNumber === "" || secondNumber === "" || selectedOperator === "") return;
    let result = operate(Number(firstNumber), selectedOperator, Number(secondNumber));
    if (result === null) {display.textContent = "You can't divide by 0!";}
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    display.textContent = result;
    firstNumber = result.toString();
    secondNumber = "";
    selectedOperator = "";
    isSecondNumber = false;});




