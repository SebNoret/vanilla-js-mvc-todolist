class Templates {
  listElement(todo) {
    const todoStatusCss = todo.done === true ? "done" : "to-do";
    const todoStatusText = todo.done === true ? " Fait" : "A faire";
    const todoColor = todo.done === true ? "is-danger" : "is-primary";
    let todoStatusIcon;
    let todoIconId;
    let todoEditClass;
    if (todo.done) {
      todoStatusIcon = "times js-toggle";
      todoIconId = "delete-" + todo.id;
      todoEditClass = "unactive-danger";
    } else {
      todoStatusIcon = "check js-toggle";
      todoIconId = "toggle-" + todo.id;
      todoEditClass = "is-clickable  js-edit ";
    }

    const html = ` <article class="message ${todoColor}">
      <div class="message-header">
        <p>${todoStatusText}</p>
        <div
          class="column is-one-quarter is-flex is-justify-content-space-evenly is-align-items-center"
        >
          <div>
            <i
              class="fas fa-edit fa-lg  ${todoEditClass} "
              id="edit-${todo.id}"
            ></i>
            
          </div>
          <div>
            <i
              class="fas fa-${todoStatusIcon} fa-lg is-clickable"
              id="${todoIconId}"
            ></i>
          </div>
        </div>
      </div>
      <div class="message-body">
        <p class="mb-3 text-container" style="color: black">${todo.text}</p>
      </div>
    </article>
    `;
    return html;
  }
  listElementWithForm(todo) {
    const todoStatusCss = todo.done === true ? "done" : "to-do";
    const todoStatusText = todo.done === true ? " Fait" : "A faire";
    // let todoIconId;

    const html = `  <article class="message is-link">
      <div class="message-header">
        <p>Modifier</p>
        <div
          class="column is-one-quarter is-flex is-justify-content-space-evenly is-align-items-center"
        >
          <div>
          <i
              class="fas fa-edit fa-lg js-edit  is-clickable"
              id="edit-${todo.id}"
            ></i>
            
          </div>

          <div>
            <i class="fas fa-check fa-lg unactive-link" id=""></i>
          </div>
        </div>
      </div>
      <div class="message-body">
        <p class="mb-3 text-container" style="color: black">${todo.text}</p>

        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Modifier la Tâche"
              rows="4"
              id="edit-input-${todo.id}"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link edit-btn" id="edit-Btn-${todo.id}">
              OK
            </button>
          </div>
        </div>
      </div>
    </article>`;
    return html;
  }
}
export default Templates;
