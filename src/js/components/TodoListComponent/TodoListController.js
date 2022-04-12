class TodoListController {
  constructor(view, model, hook) {
    this.view = view;
    this.model = model;
    this.hook = hook;

    this.view.bindAddTodo(this.handleAddTodos);

    this.view.bindDeleteDoneTodos(this.handleDeleteDoneTodos);

    this.view.bindToggleTodo(this.handleToggleTodo);

    this.view.bindDisplayEditForm(this.handleDisplayEditForm);

    this.view.bindEditTodo(this.handleEditTodo);

    this.model.bindTodoListChanged(this.onTodoListChanged);
  }

  onTodoListChanged = () => {
    this.view.getList(this.hook, this.model.todos);
  };

  handleToggleTodo = (id) => {
    this.model.toggleTodo(id);
  };

  handleAddTodos = (text) => {
    this.model.addTodo(text);
  };
  handleDeleteDoneTodos = () => {
    this.model.deleteDoneTodos();
  };
  handleDisplayEditForm = (id) => {
    this.view.displayEditForm(id, this.model.todos);
    this.model.toggleEditingStatus(id);
  };

  handleEditTodo = (id, text) => {
    this.model.editTodo(id, text);
  };

  displayComponent() {
    this.view.getView(this.hook, this.model.todos);
  }
}

export default TodoListController;
