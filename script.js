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
        taskInput.value = '';
    }
    e.preventDefault();
}

function removeTask(e) {
    if(e.target.hasAttribute('href')) {
        let parentElement = e.target.parentElement;
        parentElement.remove();
    } 
    e.preventDefault();
}

function clearTask(e) {
    //taskList.innerHTML = '';
    // console.log(`This is test..........`);
    while(taskList.firstChild) {
        taskList.firstChild.remove()
    }

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