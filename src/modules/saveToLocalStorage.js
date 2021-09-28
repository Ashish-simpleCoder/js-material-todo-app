export default async function saveToLocalStorage(todo_obj){
    let user_todos = JSON.parse(localStorage.getItem('user_todos')) || []
    user_todos = [todo_obj,...user_todos]
    localStorage.setItem('user_todos',JSON.stringify(user_todos))
}