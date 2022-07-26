import { ReactNode } from "react";

import {
  Container,
  InputBlock,
  Input,
  List,
  Footer,
  RemainingTasks,
  Filters,
  Filter,
} from "./TodoList.styles";

type TodoListProps = {
  children: ReactNode;
};

function TodoList({ children }: TodoListProps) {
  return (
    <Container>
      <InputBlock>
        <Input placeholder="What need to be done?" autoFocus />
      </InputBlock>
      {children ? (
        <>
          <List>{children}</List>
          <Footer>
            <RemainingTasks>2 tasks left</RemainingTasks>
            <Filters>
              <Filter>All</Filter>
              <Filter>Active</Filter>
              <Filter>Completed</Filter>
            </Filters>
          </Footer>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default TodoList;
