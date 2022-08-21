import { nanoid } from "nanoid";

export type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

export type TodosList = Todo[];

const addNewTodoList =
  (todos: TodosList) =>
  (description: string): TodosList => {
    const newTodo = createNewTodo(description);
    const updatedList = [...todos, newTodo];
    return updatedList;
  };

function createNewTodo(description: string): Todo {
  const id = nanoid();

  const newTodo: Todo = {
    id,
    description: validateTodo(description),
    completed: false,
  };

  return newTodo;
}

const toggleCompleteStatus =
  (todos: TodosList) =>
  (id: string): TodosList => {
    return todos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  };

const editTodoDescription =
  (todos: TodosList) =>
  (id: string, description: string): TodosList => {
    return todos.map((todo: Todo) => {
      if (todo.id === id) {
        return { ...todo, description };
      }
      return todo;
    });
  };

const validateTodo = (description: string) => {
  if (description.trim() === "") {
    throw new Error("todo description should not be empty");
  }

  return description.trim();
};

const deleteTodo =
  (todos: TodosList) =>
  (id: string): TodosList => {
    return todos.filter((todo: Todo) => todo.id !== id);
  };

const allTodos = (todos: TodosList) => todos;

function isCompleted(todo: Todo): boolean {
  return todo.completed;
}

function isActive(todo: Todo): boolean {
  return !isCompleted(todo);
}

export {
  addNewTodoList,
  toggleCompleteStatus,
  editTodoDescription,
  deleteTodo,
  allTodos,
  isCompleted,
  isActive,
};
