class Model {
  constructor() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      this.todos = [
        {
          id: 1,
          text: "une premier note",
          done: false,
          editing: false,
        },
        {
          id: 2,
          text: "une deuxième note",
          done: false,
          editing: false,
        },
        {
          id: 3,
          text: "une troisième note",
          done: true,
          editing: false,
        },
        {
          id: 4,
          text: "une quatrième  note",
          done: true,
          editing: false,
        },
      ];
    }
  }

  _commit(todos) {
    // this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  addTodo(text) {
    if (this.todos.length >= 1) {
      this.todos.push({
        id: this.todos.length + 1,
        text: text,
        done: false,
        editing: false,
      });
    } else {
      this.todos.push({
        id: 1,
        text: text,
        done: false,
        editing: false,
      });
    }
    this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }
  // deleteTodo(id) {
  //   console.log(id);
  //   this.todos = this.todos.filter((todo) => todo.id !== id);
  //   console.log(this.todos);
  //   // this.onTodoListChanged(this.todos);
  // }
  deleteDoneTodos() {
    this.todos = this.todos.filter((todo) => todo.done !== true);
    this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }
  editTodo(id, text) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, text: text, done: todo.done, editing: todo.editing }
        : todo
    );
    this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }
  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === parseInt(id)
        ? {
            id: todo.id,
            text: todo.text,
            done: !todo.done,
            editing: todo.editing,
          }
        : todo
    );
    this.onTodoListChanged(this.todos);
    this._commit(this.todos);
  }
  toggleEditingStatus(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === parseInt(id)
        ? {
            id: todo.id,
            text: todo.text,
            done: todo.done,
            editing: !todo.editing,
          }
        : todo
    );
    this._commit(this.todos);
    // this.onTodoListChanged(this.todos);
  }
}

export default Model;
