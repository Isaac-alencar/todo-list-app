import { Todo, isActive, isCompleted, TodosList } from "./todo";

export enum Filters {
  all,
  active,
  completed,
}

type TodoSpecification = (todo: Todo) => boolean;

function specFor(filter: Filters): TodoSpecification {
  switch (filter) {
    case Filters.all:
      return () => true;
    case Filters.active:
      return isActive;
    case Filters.completed:
      return isCompleted;
  }
}

function filterTodos(todoList: TodosList, filter: Filters) {
  return todoList.filter(specFor(filter));
}

export { filterTodos };
