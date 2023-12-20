const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    inputBox.value = ""; 
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.nodeName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); 
    } else if (e.target.nodeName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function cancelTask() {
    inputBox.value = "";
}

window.onload = function () {
    showTask();
};

