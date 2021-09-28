export default async function todoGenerator(todo_obj,fromLocal){
    const div = document.createElement('div')
    div.id = todo_obj.id
    div.classList.add('each_todo')
    todo_obj.completed ? div.classList.add('completed') : null
    div.innerHTML = `<h3 contenteditable=false>${todo_obj.todo}</h3><button class='check_btn'>check</button><button class='edit_btn'>edit</button><button class='delete_btn'>delete</button>`

    div.querySelector('.edit_btn').addEventListener('click',async function(e){
        (await import('./saveEditedTodo.js')).default(div,this)
    })
    div.querySelector('.delete_btn').addEventListener('click',async function(e){
        (await import('./deleteTodo.js')).default(div)
    })
    div.querySelector('.check_btn').addEventListener('click',function(e){
        let user_todos = JSON.parse(localStorage.getItem('user_todos'))
        if(div.classList.contains('completed')){
            div.classList.remove('completed')
            localStorage.setItem('user_todos',JSON.stringify(user_todos.map(todo=>{
                if(todo.id === div.id) return {...todo,completed:false}
                return todo
            })))
        }else {
            div.classList.add('completed')
            localStorage.setItem('user_todos',JSON.stringify(user_todos.map(todo=>{
                if(todo.id === div.id) return {...todo,completed:true}
                return todo
            })))
        }
    })

    if(fromLocal) todo_output.append(div)
    else todo_output.insertAdjacentElement('afterbegin',div)
    if(!fromLocal){
        const saveToLocalStorage = await import('./saveToLocalStorage.js')
        saveToLocalStorage.default(todo_obj)
    }
}