const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

increment.addEventListener('click', function() {
    let val = Number(document.getElementById("input-id").value);
    val++;
    document.getElementById("input-id").value = val;
})


decrement.addEventListener('click', function() {
    let val = Number(document.getElementById("input-id").value);
    val--;
    document.getElementById("input-id").value = val;
})


reset.addEventListener('click', function() {
    document.getElementById("input-id").value = 0;
})