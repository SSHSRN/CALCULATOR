/* Variables initialisation and declaration */
var result = 0;
var isOperator = 0;
var op = document.getElementById('op');
let operator = ['+','-','*','/','.'];
let operands = [];
let operand = "";
let operators = [];
console.log(operators);


function display(a){
    op.value = a;
}

function validate(i) {
    let l = op.value.length;
    // console.log(l);
    // console.log(op.value[l-1]);
    if ((operator.includes(op.value[l-1])) && (operator.includes(i))){
         return false;
        }
    else{
        return true;
    }
}

function append(i){
    let v = validate(i);
    if(v){
        if(operator.includes(i)){
            operators.push(i);
            operands.push(operand);
            operand = "";
        }
        else{
            operand = operand.concat(i);
        }
        op.value += i;
    }
}
