export default function deleteTodo(div){
    div.remove()
    let user_todos = JSON.parse(localStorage.getItem('user_todos'))
    localStorage.setItem('user_todos',JSON.stringify(user_todos.filter(todo=>todo.id !== div.id)))
}