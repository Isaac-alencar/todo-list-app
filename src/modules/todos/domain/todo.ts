import { nanoid } from "nanoid";

export type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

export type TodosList = Todo[];

function addNewTodoList(todos: TodosList, todo: Todo): TodosList {
  const updatedList = [...todos, todo];
  return updatedList;
}

function createNewTodo(description: string): Todo {
  const id = nanoid();

  const newTodo: Todo = { id, description, completed: false };

  return newTodo;
}

function toggleCompleteStatus(todos: TodosList, id: string): TodosList {
  return todos.map((todo: Todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
}

function editTodoDescription(
  todos: TodosList,
  id: string,
  description: string
): TodosList {
  return todos.map((todo: Todo) => {
    if (todo.id === id) {
      return { ...todo, description };
    }
    return todo;
  });
}

function deleteTodo(todos: TodosList, id: string): TodosList {
  return todos.filter((todo: Todo) => todo.id !== id);
}

function isCompleted(todo: Todo): boolean {
  return todo.completed;
}

function isActive(todo: Todo): boolean {
  return !isCompleted(todo);
}

export {
  addNewTodoList,
  createNewTodo,
  toggleCompleteStatus,
  editTodoDescription,
  deleteTodo,
  isCompleted,
  isActive,
};
