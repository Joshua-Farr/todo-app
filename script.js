const inputFieldText = document.getElementById("input-fld");
const completeBtn = document.getElementById("select-item-btn");

let todoListArray = [];
let numItemsLeftToDo = 0;



inputFieldText.addEventListener("keydown", function(e){
    if(e.key === "Enter" && inputFieldText.value){
        addTodoItem(inputFieldText.value);
        addDraggingFuctionality();
        clearInputField();
        updateNumLeft();
    }
});

document.addEventListener("click", function(e){
    if(e.target.id === "select-item-btn"){
        markAsCompleted(e);
    } else if(e.target.id === "delete-btn"){
        removeItemFromTodoList(e);
    }else if(e.target.id === "clear-completed"){
        removeAllCompleted(e);
    }else if(e.target.id === "filter-completed"){
        filterCompleted();
    }else if(e.target.id === "filter-active"){
        filterActive();
    }else if (e.target.id === "filter-show-all"){
        filterShowAll();
    }
       
})

function addTodoItem(todoItem){
    const todoList = document.getElementById("todo-list");

    todoList.innerHTML += `<li class="to-do-item active" draggable="true">
                                <button class="select-item-btn" id="select-item-btn"></button>
                                <p id="todo-text" class="">${todoItem}</p>
                                <img src="./images/icon-cross.svg" alt="delete" id="delete-btn">
                            </li>`
    numItemsLeftToDo++;
}

function clearInputField(){
    inputFieldText.value = "";
}

function updateNumLeft(){
    document.getElementById("num-items-left").textContent = numItemsLeftToDo;
    renderMenus();
}

function markAsCompleted(e){ // Code to add class "completed" to inner paragraph element and button
    e.target.classList.toggle("completed");
    e.target.nextElementSibling.classList.toggle("completed");

    e.target.parentElement.classList.toggle("completed");
    e.target.parentElement.classList.toggle("active");

    // Theres gotta be a better way to do all of this...
}

function removeItemFromTodoList(e){
    e.target.parentElement.remove();
    numItemsLeftToDo--;
    updateNumLeft();
}

function removeAllCompleted(e){
    const completedTasks = document.getElementsByClassName("to-do-item completed");
    //console.log("There are this many items completed:" + completedTasks.length);
    while(completedTasks.length > 0){
        completedTasks[0].remove();
        numItemsLeftToDo--;     
    }
    updateNumLeft();
}


function filterActive(){
    const completedTasks = document.getElementsByClassName("to-do-item completed");
    filterShowAll(); // Show all to prevent hidden tasks from being filtered out 

    for(let i=0; i<completedTasks.length; i++){
        if(completedTasks[i].style.display === "none"){
            completedTasks[i].style.display = "flex";
        } else{
            completedTasks[i].style.display = "none";
        }
    }
}

function filterCompleted(){
    const completedTasks = document.getElementsByClassName("to-do-item active");
    filterShowAll();

    for(let i=0; i<completedTasks.length; i++){
        if(completedTasks[i].style.display === "none"){
            completedTasks[i].style.display = "flex";
        } else{
            completedTasks[i].style.display = "none";
        }
    }
    
}

function filterShowAll(){
    const completedTasks = document.getElementsByClassName("to-do-item");

    for(let i=0; i<completedTasks.length; i++){
        if(completedTasks[i].style.display === "none"){
            completedTasks[i].style.display = "flex";
        }
    }

}

function renderMenus(){
    if(numItemsLeftToDo === 0){
        document.getElementById("bottom-text").style.display = "none";
        document.getElementById("filter-view").style.display = "none";
        document.getElementById("final-p").style.display = "none";

    }else{
        document.getElementById("bottom-text").style.display = "flex";
        document.getElementById("filter-view").style.display = "block";
        document.getElementById("final-p").style.display = "block";

    }
   
}

function addDraggingFuctionality(){
    const draggableItem = document.querySelectorAll(".to-do-item"); 
    let beingDragged = null;

    draggableItem.forEach(function(task){
        task.addEventListener("dragstart", function(){
            beingDragged = task;
            setTimeout(function(){task.style.display = "none";},0);
            task.classList.add("is-dragging");
            console.log("dragstart", task);
        })
        task.addEventListener("dragend", function(){
            task.classList.remove("is-dragging");
            task.style.display = "flex";
            console.log("dragend"); 
        })

        // Adding listeners to all li items that aren't being dragged
        task.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        task.addEventListener("drop", function(e){
            e.preventDefault();
            e.target.classList.remove("over");
            task.parentNode.insertBefore(beingDragged, task);
            console.log("drop");
        })
        task.addEventListener("dragenter", function(e){
            console.log("dragenter");
            task.classList.add("over");
        })
        task.addEventListener("dragleave", function(){
            console.log("dragleave");
            task.classList.remove("over");
        })

    })
}
 






renderMenus();