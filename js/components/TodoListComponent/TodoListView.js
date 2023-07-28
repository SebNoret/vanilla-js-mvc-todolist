import AbstractView from "./AbstractView.js";
import Templates from "./Templates.js";

const templates = new Templates();

class TodoListView extends AbstractView {
  constructor() {
    super();
    /**
     *
     *
     *
     * Form input element
     */
    const input = this.createElement("input", ["input"]);
    input.type = "text";
    input.placeholder = "A faire";
    input.id = "add-input";
    /**
     *
     *
     *  Form validation button
     *
     *
     */
    const validationBtn = this.createElement("button", ["button", "is-link"]);
    validationBtn.textContent = "Valider";
    /**
     *
     *
     *
     *
     * Form suppression button
     */
    const suppressionBtn = this.createElement("button", ["button", "is-link"]);
    suppressionBtn.id = "delete-done-button";
    suppressionBtn.textContent = " Supprimer les tâches réalisées";

    /**
     *
     * Elements used in binding functions
     */
    this.input = input;
    this.validationBtn = validationBtn;
    this.suppressionBtn = suppressionBtn;

    /**
     *
     *
     * Hooks variable for displaying form et list
     */

    this.listHook = this.createElement("div", ["list-hook"]);
    this.formHook = this.createElement("div", ["form-hooks"]);
  }

  /*******************************
   *
   *   Reset input field function
   * ******************************/
  _resetInput() {
    this.input.value = "";
  }

  /********************************************************************
   *
   * Binding event functions
   *
   *********************************************************************/

  bindAddTodo(handler) {
    this.validationBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!event.target.id === "validation-button") {
        return;
      }
      const todo = this.input.value;
      if (todo.length > 0) {
        handler(todo);
      }
      this._resetInput();
    });
  }
  bindDeleteDoneTodos(handler) {
    this.suppressionBtn.addEventListener("click", (event) => {
      handler();
    });
  }

  bindToggleTodo(handler) {
    const body = document.querySelector("body");
    body.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!event.target.classList.contains("js-toggle")) {
        return;
      }
      const id = event.target.id.split("-");
      handler(id[1]);
    });
  }
  bindDisplayEditForm(handler) {
    const body = document.querySelector("body");
    body.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!event.target.classList.contains("js-edit")) {
        return;
      }
      const id = event.target.id.split("-");
      handler(id[1]);
    });
  }

  bindEditTodo(handler) {
    const body = document.querySelector("body");
    body.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!event.target.classList.contains("edit-btn")) {
        return;
      }
      const id = event.target.id.split("-");
      const idToSelect = `edit-input-${id[2]}`;
      const inputValue = document.getElementById(idToSelect).value;
      handler(parseInt(id[2]), inputValue);
    });
  }

  /************************************************************************************/
  displayEditForm(id, todos) {
    const liste = document.getElementById("liste");
    let items = todos
      .map((todo) =>
        todo.id === parseInt(id) &&
        todo.done === false &&
        todo.editing === false
          ? templates.listElementWithForm(todo)
          : templates.listElement(todo)
      )
      .join("");
    liste.innerHTML = items;
    this.listHook.append(liste);
  }

  displayForm() {
    /**
     * Form module display
     */
    const form = this.createElement("div", []);
    form.id = "formulaire";
    const container = this.createElement("div", ["columns"]);

    /**
     * input container
     */
    const inputContainer = this.createElement("div", [
      "column",
      "is-three-quarter",
    ]);
    inputContainer.append(this.input);

    /**
     * validation container
     */
    const validationBtnContainer = this.createElement("div", [
      "column",
      "is-one-quarter",
    ]);
    validationBtnContainer.append(this.validationBtn);
    container.append(inputContainer, validationBtnContainer);

    /**
     * suppresion container
     */
    const suppressionBtnContainer = this.createElement("div");
    suppressionBtnContainer.id = "delete-done";
    suppressionBtnContainer.append(this.suppressionBtn);

    /**
     *
     * form creation
     */
    form.append(container, suppressionBtnContainer);
    this.formHook.append(form);
  }

  /**
   *
   *
   *
   * list module refresh function
   */
  displayList(todos) {
    if (document.querySelector("#liste")) {
      this.listHook.innerHTML = "";
    }
    const liste = this.createElement("div");
    liste.id = "liste";
    const items = todos
      .map((todo) =>
        todo.editing
          ? templates.listElementWithForm(todo)
          : templates.listElement(todo)
      )
      .join("");
    liste.innerHTML = items;

    this.listHook.append(liste);
  }

  /**************************************************************************************
   *
   *
   * displaying functions for controller use
   **************************************************************************************/

  getList(hook, todos) {
    this.displayList(todos);
    return hook.append(this.formHook, this.listHook);
  }
  getView(hook, todos) {
    this.displayForm();
    this.displayList(todos);

    return hook.append(this.formHook, this.listHook);
  }
}
export default TodoListView;
