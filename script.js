const inputFieldText = document.getElementById("input-fld");
const todoList = document.getElementById("todo-list");
const completeBtn = document.getElementById("select-item-btn");


let todoListArray = [];
let numItemsLeftToDo = 0;

inputFieldText.addEventListener("keydown", function(e){
    if(e.key === "Enter" && inputFieldText.value != ""){
        addTodoItem(inputFieldText.value);
        clearInputField();
        updateNumLeft();

    }
});


document.addEventListener("click", function(e){
    if(e.target.id === "select-item-btn"){
        console.log("Button selected!");
        e.target.classList.toggle("completed");
    } else if(e.target.id === "delete-btn"){
        console.log("Button deleted!");
        e.target.parentElement.remove();
        numItemsLeftToDo--;
        updateNumLeft();
    }
})



function addTodoItem(todoItem){
    todoList.innerHTML += `<li class="to-do-item">
                                <button class="select-item-btn" id="select-item-btn"></button>
                                <p>${todoItem}</p>
                                <img src="./images/icon-cross.svg" alt="delete" id="delete-btn">
                            </li>`
    numItemsLeftToDo++;
}


// console.log("Button exists!")
// completeBtn.addEventListener("click", function(){
//     console.log("Completed!!");
// })

// function addTodoItem(todoItem){
//     todoListArray.unshift(
//         { 
//             html: 
//                 `<li class="to-do-item">
//                     <button class="select-item-btn" id="select-item-btn"></button>
//                     <p>${todoItem}</p>
//                     <img src="./images/icon-cross.svg" alt="delete" id="delete-btn">

//                 </li>`,
//             done: false
//         });
// }

function clearInputField(){
    inputFieldText.value = "";
}

// function renderTodoList(todoListArr){
//     todoList.innerHTML = "";
//     todoListArr.forEach(function(todo){
//         todoList.innerHTML += todo.html;
//     })
// }


function addFunctionality(listitem){
    const closeBtn = listItem.querySelectorAll(".close");
    closeBtn.addEventListener("click",  )

}

function updateNumLeft(){
    document.getElementById("num-items-left").textContent = numItemsLeftToDo;
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