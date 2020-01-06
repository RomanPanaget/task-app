import {
  ADD_TODO_LIST,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  REMOVE_TODO_LIST,
  RESET_ALL
} from "./TodoActions";
import { Todo } from "../models/Todo";

const INITIAL_STATE = {
  todoLists: [
    {
      id: "1",
      title:
        "A simple todo list A simple todo list A simple todo list A simple todo list A simple todo list A simple todo list",
      description:
        "Hello this is a dummy todo list I use for mocking because I need to test the component",
      creationDate: new Date(),
      todosIds: ["2", "3", "4", "5", "6"]
    }
  ],
  todos: {
    "2": {
      id: "2",
      title: "Hello todo",
      done: false
    },
    "3": {
      id: "3",
      title: "Hello todo",
      done: false
    },
    "4": {
      id: "4",
      title: "Hello todo",
      done: false
    },
    "5": {
      id: "5",
      title: "Hello todo",
      done: false
    },
    "6": {
      id: "6",
      title: "Hello todo",
      done: false
    }
  }
};

const todoReducer = (state = INITIAL_STATE, action) => {
  let todoList;
  console.log(state);
  switch (action.type) {
    case ADD_TODO_LIST:
      return {
        ...state,
        todos: {
          ...state.todos,
          ...action.todos.reduce(
            (obj, next) => ({ ...obj, [next.id]: next }),
            {}
          )
        },
        todoLists: [action.todoList, ...state.todoLists]
      };
    case REMOVE_TODO_LIST:
      todoList = state.todoLists.find(
        todoList => todoList.id === action.todoListId
      );
      return {
        ...state,
        todos: Object.keys(state.todos)
          .filter(id => !todoList.todosIds.includes(id))
          .reduce(
            (obj, nextId: string) => ({
              ...obj,
              [nextId]: state.todos[nextId]
            }),
            {}
          ),
        todoLists: state.todoLists.filter(
          todoList => todoList.id !== action.todoListId
        )
      };
    case ADD_TODO:
      todoList = state.todoLists.find(
        todoList => todoList.id === action.todoListId
      );
      return {
        ...state,
        todoLists: [
          { ...todoList, todosIds: [action.todo.id, ...todoList.todosIds] },
          ...state.todoLists.filter(
            todoList => todoList.id !== action.todoListId
          )
        ],
        todos: { ...state.todos, [action.todo.id]: action.todo }
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.todo.id]: action.todo
        }
      };
    case REMOVE_TODO:
      todoList = state.todoLists.find(
        todoList => todoList.id === action.todoListId
      );
      return {
        ...state,
        todoLists: [
          {
            ...todoList,
            todosIds: todoList.todosIds.filter(
              todoId => todoId !== action.todoId
            )
          },
          ...state.todoLists.filter(
            todoList => todoList.id !== action.todoListId
          )
        ],
        todos: Object.keys(state.todos)
          .filter(id => id !== action.todoId)
          .reduce(
            (obj, nextId: string) => ({
              ...obj,
              [nextId]: state.todos[nextId]
            }),
            {}
          )
      };
    case RESET_ALL:
      return {};

    default:
      return state;
  }
};

export default todoReducer;
