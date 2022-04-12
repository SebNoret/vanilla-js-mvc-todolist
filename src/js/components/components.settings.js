import Model from "../models/Model.js";
import TodoListController from "./TodoListComponent/TodoListController.js";
import TodoListView from "./TodoListComponent/TodoListView.js";

const model = new Model();

const todoListController = new TodoListController(
  new TodoListView(),
  model,
  null
);

export default [
  { tag: "div", classes: ["main-container"], component: todoListController },
];
