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
    completedButton.innerHTML = "Completed"
    completedButton.classList.add("completed");
    completedButton.addEventListener('click', function () {
        li.style.textDecoration = "line-through";
        li.style.color = "green";
    });

    li.appendChild(completedButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete"
    deleteButton.addEventListener('click', function () {
        li.remove();
    });
    li.appendChild(deleteButton);

    ul.appendChild(li);

    input.value = '';
});
