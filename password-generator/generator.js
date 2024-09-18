const button = document.getElementById("button");


function getChars(lowercase=true) {
    let chars = [];
    const charAscii = lowercase ? 97 : 65
    for (let i = charAscii; i < charAscii + 26; i++) {
        chars.push(String.fromCharCode(i));
    }
    return chars;
}

function getNumbers() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        numbers.push(i.toString());
    }
    return numbers;
}

function getSpecialChars() {
    const sChars = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
        "[", "]", "{", "}", ";", ":", "'", "\"", "\\", "|", ",", ".", "<", ">",
        "/", "?", "~", "`"
    ];
    return sChars;
}

function getProperties() {
    let properties = {};
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    
    for (const id of ids) {
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }
    return properties;
}

const lowercases = getChars(true);
const uppercases = getChars(false);
const numbers = getNumbers();
const specialChars = getSpecialChars();


button.addEventListener('click', function() {
    const length = document.getElementById("length").value;
    const properties = getProperties();

    let globalArray = [];
    if (properties["lowercase"]) globalArray.push(...lowercases);
    if (properties["uppercase"]) globalArray.push(...uppercases);
    if (properties["numbers"]) globalArray.push(...numbers);
    if (properties["special"]) globalArray.push(...specialChars);

    console.log("Available characters:", globalArray);


    if (globalArray.length === 0) {
        alert("You should select at least one property for your password");
    }

    let password = [];

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * globalArray.length);
        const char = globalArray[randomIndex];
        password.push(char);
    }

    document.getElementById("password").innerHTML = password.join("");
})
