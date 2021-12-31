//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")


//Event Listeners
    //check if content in the content has loadad, if it is execute the function
document.addEventListener("DOMContentLoaded", getTodos);
//Other Event listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //ADD TODO TO LOCALSTORAGE
    //saveLocalTodos(todoInput.value);
    //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"><i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"><i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);
    //Clear Todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add("fade-right");
        todo.addEventListener('transitionend', function(){
            todo.remove();

        });
    }
    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        const mStyle = todo.style;
        if(mStyle != undefined && mStyle != null){
            switch(e.target.value){
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        mStyle.display = "flex";
                    } else{
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if(todo.classList.contains("completed")){
                        mStyle.display = "none";
                    } else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }   
    })
}
/*
function saveLocalTodos(todo){
    //CHECK-- TO SEE IF THERE ARE THINGS ALREADY THERE
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
*/

function getTodos(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
         //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText =todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //Check Mark Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"><i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //Check Trash Button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"><i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //Append to List
        todoList.appendChild(todoDiv);

    })

}
/*
function removeLocalTodos(todo){
    //CHECK-- TO SEE IF THERE ARE THINGS ALREADY THERE
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    LocalStorage.setItem("todos", JSON.stringify(todos));

}
*/