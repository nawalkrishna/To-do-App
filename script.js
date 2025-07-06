let todos=[]

const todoList = document.getElementById('todos')
const todoInput = document.getElementById('textInput')
const inputBtn = document.getElementById('add')

function addTodo(e){
    e.preventDefault()
    let textValue= todoInput.value
    todos.push(textValue)
    todoList.innerHTML=''
    renderTodos() 
    todoInput.value=''
}
inputBtn.addEventListener('click',addTodo) 

function removeTodo(index){
    todos = todos.filter((todo,i)=>{
        return i===index? false : true
    }
    )
    todoList.innerHTML=''
    renderTodos() 
    
}
function editTodo(index){
    const currElementText=document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText
    const splicedText=currElementText.slice(3)
    removeTodo(index)
    todoInput.value=splicedText
}

function renderTodos() {
    todos.forEach((todo,i) => {
        let currentHTML = todoList.innerHTML
      let newHTML = (
    `<div class="todoItem">
        <p>${i + 1}. ${todo}</p>
        <div class="actions"> 
            <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
            <i onclick="removeTodo(${i})" class="fa-solid fa-trash"></i>
        </div>
    </div>`
);
    let amendedHTML = currentHTML+newHTML
    todoList.innerHTML=amendedHTML
    })
}
renderTodos()