import { createContext, ReactNode, useContext, useState } from "react";
import {
  addNewTodoList,
  deleteTodo,
  editTodoDescription,
  TodosList,
  toggleCompleteStatus,
  isActive,
} from "../domain/todo";
import { Filters, filterTodos } from "../domain/filters";

type TodoContextValue = {
  totalTodosCount: number;
  currentFilter: Filters;
  setCurrentFilter: React.Dispatch<React.SetStateAction<Filters>>;
  filteredTodoList: TodosList;
  toggleCompleteTask: (id: string) => void;
  editTodo: (id: string, description: string) => void;
  deleteItem: (id: string) => void;
  updateItem: (id: string, description: string) => void;
  addItem: (description: string) => void;
  countActiveTodos: () => number;
};

const TodosContext = createContext<TodoContextValue | null>(null);

const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodosList>([]);
  const [currentFilter, setCurrentFilter] = useState<Filters>(Filters.all);

  const filteredTodoList = filterTodos(todos, currentFilter);

  const countActiveTodos = (): number =>
    todos.filter((todo) => isActive(todo)).length;

  const toggleCompleteTask = (id: string) =>
    setTodos(toggleCompleteStatus(todos)(id));

  const deleteItem = (id: string) => setTodos(deleteTodo(todos)(id));

  const updateItem = (description: string, id: string) =>
    setTodos(editTodoDescription(todos)(description, id));

  const addItem = (description: string) =>
    setTodos(addNewTodoList(todos)(description));

  const editTodo = (id: string, description: string) =>
    setTodos(editTodoDescription(todos)(id, description));

  return (
    <TodosContext.Provider
      value={{
        currentFilter,
        setCurrentFilter,
        filteredTodoList,
        totalTodosCount: todos.length,
        toggleCompleteTask,
        deleteItem,
        updateItem,
        addItem,
        countActiveTodos,
        editTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  const todoContext = useContext(TodosContext);

  if (!todoContext) {
    throw new Error(
      "useTodos was called without being nested in TodosProvider"
    );
  }

  return todoContext;
};

export { useTodos, TodosProvider };
