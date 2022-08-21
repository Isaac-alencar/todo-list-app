import React, { useState, ChangeEvent } from "react";
import { useTodos } from "../../contexts/TodosContext";
import { TodoItem, Footer } from "modules/todos/components";

import * as S from "./TodoList.styles";

function TodoList() {
  const {
    totalTodosCount,
    addItem,
    deleteItem,
    toggleCompleteTask,
    filteredTodoList,
  } = useTodos();

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterKeyDown = (keyboard: React.KeyboardEvent) => {
    if (keyboard.key === "Enter") {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <S.Container>
      <S.InputBlock>
        <S.Input
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleEnterKeyDown(e)}
          placeholder="What need to be done?"
          autoFocus
        />
      </S.InputBlock>

      {filteredTodoList.length > 0 ? (
        <S.List>
          {filteredTodoList.map(({ id, completed, description }) => {
            return (
              <TodoItem
                key={id}
                id={id}
                handleDelete={() => deleteItem(id)}
                toggleComplete={() => toggleCompleteTask(id)}
                completed={completed}
                description={description}
              />
            );
          })}
        </S.List>
      ) : null}

      {Boolean(totalTodosCount) ? <Footer /> : null}
    </S.Container>
  );
}

export default TodoList;
