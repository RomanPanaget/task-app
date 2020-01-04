import { TodoList } from "../models/TodoList";
import { Todo } from "../models/Todo";

export const ADD_TODO_LIST = "ADD_TODO_LIST";
export const UPDATE_TODO_LIST = "UPDATE_TODO_LIST";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_TODO_LIST = "REMOVE_TODO_LIST";

export const addTodoList = (todoList: TodoList, todos: Todo[]) => {
  return {
    type: ADD_TODO_LIST,
    todoList,
    todos
  };
};
export const removeTodoListAction = (todoListId: string) => {
  return {
    type: REMOVE_TODO_LIST,
    todoListId
  };
};
export const toggleTodoAction = (todo: Todo) => {
  return {
    type: UPDATE_TODO,
    todo
  };
};
export const addTodoToTodoList = (todoListId: string, todo: Todo) => {
  return {
    type: ADD_TODO,
    todoListId,
    todo
  };
};

export const removeTodoFromTodoList = (todoListId: string, todoId: string) => {
  return {
    type: REMOVE_TODO,
    todoListId,
    todoId
  };
};
