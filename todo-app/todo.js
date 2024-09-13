const input = document.getElementById("enter-text");
const addButton = document.getElementById("add-button");
const ul = document.getElementById("ul");



addButton.addEventListener('click', function () {
    const inputVal = input.value.trim();
    if (inputVal === "") {
        alert("A task can not be empty");
        return;
    }

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(inputVal + "\u00A0"));

    

    const completedButton = document.createElement("button");
    completedButton.textContent = "Completed"
    li.appendChild(completedButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Deleted"
    li.appendChild(deleteButton);

    ul.appendChild(li);

    input.value = '';



    
});