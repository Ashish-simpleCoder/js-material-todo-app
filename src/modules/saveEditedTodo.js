export default function saveEditedTodo(div,button){
    if(div.children[0].getAttribute('contenteditable') === 'false'){
        button.textContent = 'save'
        div.children[0].setAttribute('contenteditable',true)
    }else{
        button.textContent = 'edit'
        div.children[0].setAttribute('contenteditable',false)
        let user_todos = JSON.parse(localStorage.getItem('user_todos'))
        localStorage.setItem('user_todos',JSON.stringify(user_todos.map(todo=>{
            if(div.id === todo.id) return {...todo,todo:div.children[0].textContent}
            return todo
        })))
    }
}