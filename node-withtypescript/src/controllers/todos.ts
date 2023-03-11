import { RequestHandler } from "express";

import { Todo } from "../models/todos";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Create the todo.', createTodo: newTodo});
};

export const getTodos: RequestHandler = ( req, res, next ) => {
  res.json({todos: TODOS});
};

export const updateTodo: RequestHandler<{id: string}> = ( req, res, next ) => {
  const todoId = req.params.id;

  const updateText = ( req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId)
;

if(todoIndex < 0) {
  throw new Error('Could not fins todo!'); 
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updateText);

  res.json({ message: 'Updated!', updateTodo: TODOS[todoIndex]});

};
export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoIndex < 0) {
  throw new Error('Could not fins todo!'); 
  }
  TODOS.slice(todoIndex, 1);
  res.json({ message: 'Todo deleted!' });
};

