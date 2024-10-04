const inp = document.getElementById('input');

function toDisplay(input) {
    inp.value += input;
}


function clearInput() {
    inp.value = '';
}


function result() {
    try {
        inp.value = eval(inp.value); 
    }
    catch(error) {
        inp.value = "Error";
    }
}