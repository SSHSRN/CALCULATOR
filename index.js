/* Variables initialisation and declaration */
var result = 0;
var isOperator = 0;
var op = document.getElementById('op');
let operator = ['+','-','*','/','.'];
let operands = [];
let expression = [];
let operand = "";
let operators = [];
var clicked = false;

// Function to validate a value before entering it into the expression.
function validate(i) {
    let l = op.value.length;
    // console.log(l);
    // console.log(op.value[l-1]);
    if(op.value === '' && operator.includes(i)){
        return false;
    }
    else if ((operator.includes(op.value[l-1])) && (operator.includes(i))){
         return false;
        }
    else{
        return true;
    }
}

function append(i){
    let v = validate(i);
    if(v){
        clicked = false;
        if(operator.includes(i)){
            operators.push(i);
            operands.push(operand);
            expression.push(operand);
            expression.push(i);
            operand = "";
        }
        else{
            operand = operand.concat(i);
        }
        op.value += i;
    }
}

function enter() {
    if(!clicked){
        if (operator.includes(op.value[op.value.length-1])){
            alert("The last value of an expression should not be an operator.");
        }
        else{
            clicked = true;
            operands.push(operand);
            expression.push(operand);
        }
    }
}

function clearAll() {
    op.value = '';
    operands = [];
    operators = [];
    operand = "";
}