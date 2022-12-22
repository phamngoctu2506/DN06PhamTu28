import TodoList from './TodoList.js'
import Todo from './Todo.js'

const todoList = new TodoList()

let ThemViecMoi = () => {
    let content = document.querySelector("#newTask").value;
    let todo = new Todo(content,0)
    todoList.ThemViecLam(todo)
    todoList.renderToDo()
}
window.ThemViecMoi = ThemViecMoi;


let updateTodoMain = (idArr) => {
    let {content} = todoList.ArrayViec[idArr]
    let todo = new Todo(content,1)
    todoList.ArrayViec[idArr] = todo
    todoList.updateTodo()
    todoList.renderToDo()
}
window.updateTodoMain = updateTodoMain;

let deleteTodo = (id) => {
    todoList.ArrayViec.splice(id,1)
    todoList.renderToDo()
    todoList.renderToDo()
}
window.deleteTodo = deleteTodo;

let SapXepAZ = () => {
    todoList.ArrayViec.sort((a, b) => {
        const nameA = a.content.toUpperCase();
        const nameB = b.content.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      todoList.renderToDo()
}

window.SapXepAZ = SapXepAZ;

let SapXepZA = () => {
    todoList.ArrayViec.sort((a, b) => {
        const nameA = a.content.toUpperCase();
        const nameB = b.content.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      todoList.renderToDo()
}

window.SapXepZA = SapXepZA;