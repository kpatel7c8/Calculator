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
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const slash = document.getElementById("slash");
const equalTo = document.getElementById("equalTo");
const allClear = document.getElementById("allClear");
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

plus.addEventListener('click',storeNumOne);
plus.addEventListener('click',storeOperator);
plus.addEventListener('click',reset);
minus.addEventListener('click',storeNumOne);
minus.addEventListener('click',storeOperator);
minus.addEventListener('click',reset);
times.addEventListener('click',storeNumOne);
times.addEventListener('click',storeOperator);
times.addEventListener('click',reset);
slash.addEventListener('click',storeNumOne);
slash.addEventListener('click',storeOperator);
slash.addEventListener('click',reset);

equalTo.addEventListener('click',storeNumTwo);
equalTo.addEventListener('click',writeAnswer);

allClear.addEventListener('click',reset);

function writeNum(event) {
    if(result.innerHTML == 'TO INFINITY AND BEYOND ...') {
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
    if(operator == 'plus') {
        result.innerHTML = numOne+numTwo;
    }
    else if(operator == 'minus') {
        result.innerHTML = numOne-numTwo;
    }
    else if(operator == 'times') {
        result.innerHTML = numOne*numTwo;
    }
    else if(operator == 'slash') {
        if(numTwo == 0) {
            result.innerHTML = 'TO INFINITY AND BEYOND ...'
        }
        else {
        result.innerHTML = numOne/numTwo;
        }
    }
    else {
        result.innerHTML = 'ERROR';
    }
}