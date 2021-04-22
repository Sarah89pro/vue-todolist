//VUE TO DO LIST

const app = new Vue ( {
    el: "#app",
    data: {
        todos: [
            {
                text: "Joffrey",
                completed: false,
            },
            {
                text: "Cersei",
                completed: false,
            },
            {
                text: "Walder Frey",
                completed: false,
            },
            {
                text: "Meryn Trant",
                completed: false,
            },
            {
                text: "Tywin Lannister",
                completed: false,
            },
            {
                text: "The Red Woman",
                completed: false,
            },
            {
                text: "Beric Dondarion",
                completed: false,
            },
            {
                text: "Thoros Of Myr",
                completed: false,
            },
            {
                text: "Illyan Paine",
                completed: false,
            },
            {
                text: "The Mountain",
                completed: false,
            },
        ],
        newTodo: "",
        editTodo: {
            visibility: false,
            text: "",
            idex: null,
        }
    },
    methods: {

        addTodo() {
            if(this.newTodo !== "") {
                this.todos.push( {
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo= "";
                this.$refs.todoInput.focus();
            }
        },
        //remove todo from list by index
        removeTodo(index) {
            this.todos.splice(index, 1);

            //sevuoi salvare la referenza: const deleted = this.todos.splice(index, 1) [0];
        },
        //update todo completed status
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
        },

        showEdit(index) {
            this.editTodo.text = this.todos[index].text;
            this.editTodo.index = index;
            this.editTodo.visibility = true;
        },

        updateTodo() {
            this.todos[this.editTodo.index].text = this.editTodo.text;

            this.closeEdit();
            
        },

        closeEdit() {
            this.editTodo.visibility = false;
            this.editTodo.text = "";
            this.editTodo.index = null;
        }
    }
});