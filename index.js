/* Validation */
function site_validate(){
    if(window.name != "calc"){
        window.location.replace("./error.html");
    }
}
document.onload = site_validate()





/* Variables initialisation and declaration */
var result = 0;
var isOperator = 0;
var op = document.getElementById('op');
let operator = ['+','-','*','/'];
let parentheses = ['(',')'];
let decimalPoint = false;
// let operands = [];
// let operand = "";
// let operators = [];

// Function to validate a value before entering it into the expression.
function validate(i) {
    let l = op.value.length;
    // console.log(l);
    // console.log(op.value[l-1]);
    if(decimalPoint && i ==='.'){
        alert("An operand can have only one decimal point. Check the expresssion.");
    }
    else if(op.value === '' && (i==='*' || i==='/')){
        alert("The first element of the expression should not be '" + i + "'. Check the expresssion.");
        return false; // The very first element inside an expression should not be an operator.
    }
    else if ((operator.includes(op.value[l-1])) && (operator.includes(i))){
        alert("Two consecutive elements of the expression should not be operators. Check the expresssion.");
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
        if(operator.includes(i)){
            // operators.push(i);
            // operands.push(operand);
            // operand = "";
            decimalPoint = false;
        }
        else if(i === '.'){
            decimalPoint = true;
        }
        op.value += i;
    }
}

// Function to check if Parenthesis is balanced
function balancedParenthesis(exp) {
    // Create and initialise the stack
    let pArr = [];
    let i = 0;
    for (i = 0; i < exp.length; i++)
    {
        if(exp[i] == '('){
            pArr.push(exp[i]);
        }
        else if(exp[i] == ')'){
            if(pArr.length === 0){
                alert("The brackets are not balanced. Check the expresssion. ");
                return 0;
            }
            pArr.pop();
        }
    }
    if(pArr.length === 0){
        // alert("The brackets are balanced.");
        return 1;
    }
    else{
        alert("The brackets are not balanced. Check the expresssion ");
        return 0;
    }
}

// Function to enter last character and evaluate.
function enter() {
    let b = balancedParenthesis(op.value);
    if(b){
        if (operator.includes(op.value[op.value.length-1])){
            alert("The last value of an expression should not be an operator.");
        }
        else{
            // operands.push(operand);
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
    // if(operator.includes(op.value[op.value.length-1])){
    //     operators.pop();
    // }
    // else{
    //     operand = operand.slice(0, -1);
    // }
}

// Function to clear everything
function clearAll() {
    op.value = '';
    // operands = [];
    // operators = [];
    // operand = "";
}


function doTheJob(e) {
    // console.log(e);
    // console.log(e.key);
    let operatorsArr = ['+', '-', '*', '.', '(', ')'];
    if(operatorsArr.includes(e.key)){
        const element = document.querySelector(`.key[data-operator = "${e.key}"]`);
        element.click();
        return;
    }
    const element1 = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    const element2 = document.querySelector(`.key[data-key1 = "${e.keyCode}"]`);
    if(element1 !== null) element1.click();
    if(element2 !== null) element2.click();
}

// Adding event listener for keyboard events.

function rClick(e) {
    e.preventDefault();
    // Get the toast div
    var x = document.getElementById("toast");
    x.innerHTML ="Right click is disabled...";
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  document.onkeydown = function (e) {
 
    // disable F12 key
    if(e.keyCode == 123) {
        var x = document.getElementById("toast");
        x.innerHTML="You are not authorised to do this😐";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        var x = document.getElementById("toast");
        x.innerHTML="You are not authorised to do this😐";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        var x = document.getElementById("toast");
        x.innerHTML="You are not authorised to do this😐";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        var x = document.getElementById("toast");
        x.innerHTML="You are not authorised to do this😐";
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        return false;
    }
}

document.addEventListener("keydown", doTheJob);