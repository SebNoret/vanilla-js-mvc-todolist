import Model from "../models/Model.ts";
import TodoListController from "./TodoListComponent/TodoListController.ts";
import TodoListView from "./TodoListComponent/TodoListView.ts";

const model = new Model();

const todoListController = new TodoListController(
  new TodoListView(),
  model,
  null
);

export default [
  { tag: "div", classes: ["main-container"], component: todoListController },
];
