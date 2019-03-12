function addItem() {
    let text = document.getElementById("newItemText");
    let val = document.getElementById("newItemValue");

    let option = document.createElement("option");
    option.textContent = text.value;
    option.value = val.value;
    document.getElementById("menu").appendChild(option);
    text.value = null;
    val.value = null;
}