//selectors
const todoInput = document.querySelector("#todo-input");
const todoBtn = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter-todo");

//add listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click", filterList);

//function
function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-li");
    
    todoDiv.append(newTodo);

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class = "fas fa-check"></i>'
    checkBtn.classList.add("check-btn");

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class = "fas fa-trash"></i>'
    trashBtn.classList.add("trash-btn");

    todoDiv.append(checkBtn);
    todoDiv.append(trashBtn);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    if(item.classList[0] === "trash-btn"){
        const todoItems = item.parentElement;
        todoItems.classList.add("fall");
        todoItems.addEventListener("transitionend", () => {
            todoItems.remove();
        })
    }

    if(item.classList[0] === "check-btn"){
        const completedItems = item.parentElement;
        completedItems.classList.toggle("completed");
    }
}


function filterList(event){
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "unCompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;    
        }
    }) 
}