const appTodolist = new Vue({
    el: ".appTodolist",
    data: {
        todos: [],
        newTodo: "",
        tempTodos: [], //把tempTodos暫存起來，資料是保存不變，最後在assign for todos
        activeStatus: "all" // 預設全部顯示
    },
    methods: {
        addTodo(todo) {
            if (todo !== "") {
                this.tempTodos.push({
                    content: todo,
                    completed: false
                });
                this.todos = this.tempTodos;
            }
        },
        removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        allFinishTodo() {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        },
        allResetTodo() {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        },
        allShowTodo(clickName) {
            // console.log("allShowTodo", this.todos);
            this.activeStatus = clickName;
            this.todos = this.tempTodos;
            return this.todos;
        },
        yesDealWith(clickName) {
            // console.log(this.todos.filter(it => it.completed));
            this.activeStatus = clickName;
            this.todos = this.tempTodos.filter(it => it.completed);
            return this.todos;
        },
        noDealWith(clickName) {
            // console.log(this.todos.filter(it => !it.completed));
            this.activeStatus = clickName;
            this.todos = this.tempTodos.filter(it => !it.completed);
            return this.todos;
        }
    }
});