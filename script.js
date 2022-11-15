//Define UI element
let form = document.querySelector("#task_form");
let taskList = document.querySelector("#tasks");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task");

//Define Event Listners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', taskFilter);
document.addEventListener('DOMContentLoaded', getTasks);



//Define Functions
function addTask(e) {
    if(taskInput.value === '') {
        alert("Add a Task...")
    } else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement("a");
        link.setAttribute('href', '#');
        link.appendChild(document.createTextNode('x'));
        li.appendChild(link);
        taskList.appendChild(li);
        storeInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}

function removeTask(e) {
    if(e.target.hasAttribute('href')) {
        let parentElement = e.target.parentElement;
        parentElement.remove();
        removeFromLS(parentElement);
    } 
    e.preventDefault();
}

function clearTask(e) {
    //taskList.innerHTML = '';
    // console.log(`This is test..........`);
    while(taskList.firstChild) {
        taskList.firstChild.remove()
    }

    localStorage.clear();

    e.preventDefault();
}

function taskFilter(e) {
    let text = e.target.value.toLowerCase();
    //console.log(text);

    let lists = document.querySelectorAll("li");
    lists.forEach(item => {
        let matchItem = item.firstChild.textContent;
        if(matchItem.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}



function storeInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement("a");
        link.setAttribute('href', '#');
        link.appendChild(document.createTextNode('x'));
        li.appendChild(link);
        taskList.appendChild(li);
    })
}


function removeFromLS(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = task;
    li.removeChild(li.lastChild);
    console.log(li);

    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}