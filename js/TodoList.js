export default class TodoList{
    ArrayViec = [];
    ThemViecLam(todo) {
        this.ArrayViec.push(todo);
    }

    renderToDo(){
        let newArr = this.ArrayViec.map((value, index) => { 
            let {content, status} = value;
            if(status == 0){
                return `
                <li>${content}
                <div><i class="fa-sharp fa-solid fa-trash" onclick="deleteTodo(${index})"></i >
                    <i class="fa-regular fa-circle-check" onclick="updateTodoMain(${index})"></i>
                    </div>
                </li>`
            }
         })
         document.querySelector("#todo").innerHTML = newArr.join("");
    }

    updateTodo() {
        let doneArr = this.ArrayViec.map((value, index) => {
            let {content, status} = value;
            if(status == 1){
                return `
                <li>${content}
                <div><i class="fa-sharp fa-solid fa-trash" onclick="deleteTodo(${index})" style="color:pink"></i >
                    <i class="fa-regular fa-circle-check" onclick="updateTodoMain(${index})" style="color:pink"></i>
                    </div>
                </li>`
            }
        })
        document.querySelector("#completed").innerHTML = doneArr.join("");
    }
}

