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
minus.addEventListener('click',storeNumOne);
minus.addEventListener('click',storeOperator);
times.addEventListener('click',storeNumOne);
times.addEventListener('click',storeOperator);
dividedBy.addEventListener('click',storeNumOne);
dividedBy.addEventListener('click',storeOperator);
equalsTo.addEventListener('click',storeNumTwo);
equalsTo.addEventListener('click',writeAnswer);
allClear.addEventListener('click',reset);
del.addEventListener('click',deleeet);

function writeNum(event) {
    if(result.innerHTML == 'INFINITY AND BEYOND ...') {
        result.innerHTML = event.target.innerHTML;
    }
    else if(result.innerHTML.includes('.') && event.target.innerHTML == '.') {
            result.innerHTML = result.innerHTML;
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
    //do not store another operator if there is one stored already
    if(result.innerHTML.includes('+')||result.innerHTML.includes('-')
    ||result.innerHTML.includes('*')||result.innerHTML.includes('/')) {
    }
    else {
        result.innerHTML = result.innerHTML + event.target.innerHTML;
        operator = event.target.id;
    }
    console.log(operator);
}

function reset() {
    result.innerHTML = '';
    console.clear();
    numOne = undefined;
    numTwo = undefined;
    operator = undefined;
    console.log(numOne);
    console.log(numTwo);
    console.log(operator);
}

function storeNumTwo(event) {
    function signs() {
        if(operator == 'plus') {
            return '+';
        }
        else if(operator == 'minus') {
            return '-';
        }
        else if(operator == 'times') {
            return '*';
        }
        else {
            return '/';
        }
    }
    //to store the number after operator sign
    if(result.innerHTML.includes(signs())) {
        subString = result.innerHTML.split(signs());
        numTwo = parseFloat(subString[1]);
    }
    else {
        numTwo = parseFloat(result.innerHTML);
    }    
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