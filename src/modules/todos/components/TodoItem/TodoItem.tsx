import { ChangeEvent, useState } from "react";
import { useTodos } from "modules/todos/contexts/TodosContext";
import {
  Container,
  CheckBox,
  Description,
  DeleteTask,
  Input,
} from "./TodoItem.styles";

type TodoItemProps = {
  id: string;
  description: string;
  completed: boolean;
  toggleComplete: () => void;
  handleDelete: () => void;
};

function TodoItem({
  id,
  completed,
  description,
  handleDelete,
  toggleComplete,
}: TodoItemProps) {
  const { editTodo } = useTodos();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleEditingTodo = () => setIsEditing(true);
  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterKeyDown = (keyboard: React.KeyboardEvent) => {
    if (keyboard.key === "Enter") {
      setIsEditing(false);
      if (inputValue.trim() !== "") {
        editTodo(id, inputValue);
      }
    }
  };

  return (
    <Container>
      <CheckBox
        type="checkbox"
        checked={completed}
        onChange={toggleComplete}
      ></CheckBox>
      {isEditing ? (
        <Input
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleEnterKeyDown(e)}
          onBlur={handleBlur}
          placeholder=""
          autoFocus
        />
      ) : (
        <Description onDoubleClick={handleEditingTodo} completed={completed}>
          {description}
        </Description>
      )}
      <DeleteTask onClick={handleDelete}>❌</DeleteTask>
    </Container>
  );
}

export default TodoItem;
