import type { RequestHandler } from "express";
import { Todo } from "../model/todo.model.js";

const TODO: Todo[] = [];

// POST
export const createTodo: RequestHandler = (req, res) => {
  // type casting
  const text = (req.body as { text: string }).text;
  // const text = (<{text: string}>req.body).text; // same as above

  const newTodo = new Todo(Math.random().toString(), "First todo created");

  TODO.push(newTodo);

  res.status(201).json({
    message: "Todo created",
    newTodo,
  });
};

// GET
export const getTodo: RequestHandler = (req, res) => {
  res.status(200).json({
    message: "Successfully get all todo",
    TODO,
  });
};

// PATCH - Partial update
export const updateTodo: RequestHandler = (req, res) => {
  const todoId = req.params.todoId;
  const text = (req.body as { text: string }).text; // resource

  // get the resource which need to be updated
  const todoIndex = TODO.findIndex((todo) => todo.id === todoId); // return -1 if resource doesn't exist

  // resource doesn't exist
  if (todoIndex < 0) {
    throw new Error("Todo not found."); // will run error handler middleware
  }

  // if resource exist, update it
  TODO[todoIndex] = new Todo(TODO[todoIndex]!.id, text);

  res.status(200).json({ message: "Todo updated", newTodo: TODO[todoIndex] });
};

// DELETE
export const deleteTodo: RequestHandler = (req, res) => {
  const todoId = req.params.todoId;

  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Todo not found.");
  }

  TODO.splice(todoIndex, 1);
  res.status(200).json({ message: "Todo deleted." });
};
