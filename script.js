const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const dividedBy = document.getElementById("dividedBy");
const equalsTo = document.getElementById("equalsTo");
const allClear = document.getElementById("allClear");
const del = document.getElementById("del");
const result = document.getElementById("result");
const numKeys = document.querySelectorAll(".numKeys");
const operationKeys = document.querySelectorAll(".numKeys");

zero.addEventListener('click',writeNum); 
one.addEventListener('click',writeNum); 
two.addEventListener('click',writeNum); 
three.addEventListener('click',writeNum); 
four.addEventListener('click',writeNum); 
five.addEventListener('click',writeNum); 
six.addEventListener('click',writeNum); 
seven.addEventListener('click',writeNum); 
eight.addEventListener('click',writeNum); 
nine.addEventListener('click',writeNum);
decimal.addEventListener('click',writeNum);

plus.addEventListener('click',storeNumOne);
plus.addEventListener('click',storeOperator);
plus.addEventListener('click',reset);

minus.addEventListener('click',storeNumOne);
minus.addEventListener('click',storeOperator);
minus.addEventListener('click',reset);
times.addEventListener('click',storeNumOne);
times.addEventListener('click',storeOperator);
times.addEventListener('click',reset);
dividedBy.addEventListener('click',storeNumOne);
dividedBy.addEventListener('click',storeOperator);
dividedBy.addEventListener('click',reset);

equalsTo.addEventListener('click',storeNumTwo);
equalsTo.addEventListener('click',writeAnswer);

allClear.addEventListener('click',reset);
del.addEventListener('click',deleeet);

function writeNum(event) {
    if(result.innerHTML == 'INFINITY AND BEYOND ...') {
        result.innerHTML = event.target.innerHTML;
    }
    else {
        result.innerHTML = result.innerHTML + event.target.innerHTML;
    }
}

function storeNumOne(event) {
    numOne = parseFloat(result.innerHTML);
    console.log(numOne);
}

function storeOperator(event) {
    operator = event.target.id;
    console.log(operator);
}

function reset() {
    result.innerHTML = '';
}

function storeNumTwo(event) {
    numTwo = parseFloat(result.innerHTML);
    console.log(numTwo);
}

function writeAnswer() {
    console.log('equalsTo');
    if(operator == 'plus') {
        result.innerHTML = numOne+numTwo;
    }
    else if(operator == 'minus') {
        result.innerHTML = numOne-numTwo;
    }
    else if(operator == 'times') {
        result.innerHTML = numOne*numTwo;
    }
    else if(operator == 'dividedBy') {
        if(numTwo == 0) {
            result.innerHTML = 'INFINITY AND BEYOND ...'
        }
        else {
        result.innerHTML = numOne/numTwo;
        }
    }
    else {
        result.innerHTML = 'ERROR';
    }
    console.log(result.innerHTML);
}

function deleeet() {
    result.innerHTML = result.innerHTML.slice(0,-1);
}