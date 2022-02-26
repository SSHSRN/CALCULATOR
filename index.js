/* Variables initialisation and declaration */
var result = 0;
var isOperator = 0;
var op = document.getElementById('op');
let operator = ['+','-','*','/','.'];
let operands = [];
let expression = [];
let operand = "";
let operators = [];
let clicked = false;

// Function to validate a value before entering it into the expression.
function validate(i) {
    let l = op.value.length;
    // console.log(l);
    // console.log(op.value[l-1]);
    if(op.value === '' && operator.includes(i)){
        return false; // The very first element inside an expression should not be an operator.
    }
    else if ((operator.includes(op.value[l-1])) && (operator.includes(i))){
         return false; // Two consecutive elements should not be operators.
        }
    else{
        return true;
    }
}

// Function to append a value.
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

// Function to enter last character and evaluate.
function enter() {
    if(!clicked){
        if (operator.includes(op.value[op.value.length-1])){
            alert("The last value of an expression should not be an operator.");
        }
        else{
            clicked = true;
            operands.push(operand);
            expression.push(operand);
            // We can directly evalute the value of the expression using eval() function of js.
            result = eval(op.value); 
            // console.log(result);
            op.value = result;
        }
    }
}

// Function to delete
function del() {
    op.value = op.value.slice(0, -1);
    if(operator.includes(op.value[op.value.length-1])){
        operators.pop();
    }
    else{
        operand = operand.slice(0, -1);
    }
}

// Function to clear everything
function clearAll() {
    op.value = '';
    operands = [];
    operators = [];
    operand = "";
}