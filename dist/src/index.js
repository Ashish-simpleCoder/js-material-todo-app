todo_gen_btn.addEventListener('click',async(e)=>{
    e.preventDefault()
    if(!todo.value) return
    const todo_obj ={
        id : new Date().getTime().toString(),
        todo:todo.value,
        completed:false
    }
    const todoGenerator = await import('./modules/todoGenerator.js')
    todoGenerator.default(todo_obj)
    todo.value = ''
})

addEventListener('load',async(e)=>{
    const loadTodoFromLocalStorage = await import('./modules/loadTodoFromLocalStorage.js')
    loadTodoFromLocalStorage.default()
})

theme_toggler.addEventListener('click',()=>document.body.classList.toggle('light_theme'))