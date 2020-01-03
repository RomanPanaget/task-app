export interface TodoList {
  id: string;
  title: string;
  description?: string;
  todosIds: string[];
  creationDate: Date;
  finishedDate?: Date;
}
