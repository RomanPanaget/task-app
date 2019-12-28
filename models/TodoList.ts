import { Todo } from "./Todo";

export interface TodoList {
  id: string;
  title: string;
  description?: string;
  todos: Todo[];
  creationDate: Date;
  finishedDate?: Date;
}
