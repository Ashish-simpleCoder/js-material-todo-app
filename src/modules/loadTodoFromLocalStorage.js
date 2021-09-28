export default async function loadTodoFromLocalStorage(){
    let user_todos = JSON.parse(localStorage.getItem('user_todos')) || []
    if(user_todos == []) return
    const todoGenerator = await import('./todoGenerator.js')
    user_todos.forEach(todo=>todoGenerator.default(todo,true))
}