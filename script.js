const inputFieldText = document.getElementById("input-fld");
const todoList = document.getElementById("todo-list");
const completeBtn = document.getElementById("select-item-btn");





let todoListArray = []
let numItemsLeftToDo = null;

inputFieldText.addEventListener("keydown", function(e){
    if(e.key === "Enter" && inputFieldText.value != ""){
        addTodoItem(inputFieldText.value);
        clearInputField();
        renderTodoList(todoListArray);
        updateNumLeft();
    }
});



console.log("Button exists!")
completeBtn.addEventListener("click", function(){
    console.log("Completed!!");
})


function addTodoItem(todoItem){
        todoListArray.unshift(
            { 
                html: 
                    `<li class="to-do-item">
                        <button class="select-item-btn" id="select-item-btn"></button>
                        <p>${todoItem}</p>
                        <img src="./images/icon-cross.svg" class="x" alt="cancel">
                    </li>`,
                done: false
            });
}

function clearInputField(){
    inputFieldText.value = "";
}

function renderTodoList(todoListArr){
    todoList.innerHTML = "";
    todoListArr.forEach(function(todo){
        todoList.innerHTML += todo.html;
    })
}

function updateNumLeft(){
    document.getElementById("num-items-left").textContent = todoListArray.length;
}

function markAsCompleted(todoItem){
    // Code to add class "completed" to inner paragraph element
}

function removeItemFromTodoList(todoListArr){
    todoListArr.forEach(function(todo){
        todoListArr.filter(function(){
            todo.done;
        })
    })

    renderTodoList();
}


function sortActive(){
// Code to hide completed (with class compelted)

    renderTodoList(todoListArray);
}

function sortCompleted(){
    // Code to hide active (with class active)
    
    renderTodoList(todoListArray);
}