import {TodoController} from "./TodoController.js";
import {TodoModel} from "./TodoModel.js";
import {TodoView} from "./TodoView.js";
//import {TodoControllerClass} from "./TodoControllerClass.js";

new TodoController(new TodoModel(), new TodoView());