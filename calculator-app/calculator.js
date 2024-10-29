const result = document.getElementsByClassName("result")[0];


function onPressedNumber(number) {
    if (number === ".") {
        if (result.innerHTML.includes(".") || result.innerHTML.length === 0) {
            return;
        }
    }
    result.innerHTML += number.toString();
}




let storedValue = null;
let storedOperator = null;





function operate(number) {
    let res;
    switch(storedOperator) {
        case '+':
            res = storedValue + number;
            break;
        case '-':
            res = storedValue - number;
            break;
        case 'x':
            res = storedValue * number;
            break;
        case '/':
            res = storedValue / number;
            break;
    }
    result.innerHTML = res;
    storedValue = null;
    storedOperator = null;
}




function onPressedOperators(operator) {
    const inputResult = parseFloat(result.innerHTML);

    if (operator === '=' && storedValue != null) {
        return operate(inputResult);
    } else if (operator === 'c') {
        storedValue = null;
        storedOperator = null;
    } else {
        storedOperator = operator;
        storedValue = inputResult;
    }

    result.innerHTML = "";
}
