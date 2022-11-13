//Define UI element
let form = document.querySelector("#task_form");
let taskList = document.querySelector("#tasks");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

//Define Event Listners
form.addEventListener('submit', addTask);


//Define Functions
function addTask(e) {
    
    if(taskInput.value === '') {
        alert("Add a Task...")
    } else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value + " "));
        taskList.appendChild(li);

    }



    e.preventDefault();
}