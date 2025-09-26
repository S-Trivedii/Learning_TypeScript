import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controller/todoController.js";

const todoRouter = express.Router();

todoRouter.route("/").get(getTodo);
todoRouter.route("/").post(createTodo);
todoRouter.route("/:todoId").patch(updateTodo);
todoRouter.route("/:todoId").delete(deleteTodo);

export default todoRouter;
