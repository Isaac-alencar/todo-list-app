import { TodoList } from "modules/todos/components";

import { TodosProvider } from "modules/todos/contexts/TodosContext";

import { Container, Heading } from "./Home.styles";

function HomePage() {
  return (
    <Container>
      <Heading>Todo App</Heading>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </Container>
  );
}

export default HomePage;
