import { TodoList } from "modules/todos/components";

import { Container, Heading } from "./Home.styles";

function HomePage() {
  return (
    <Container>
      <Heading>Todo App</Heading>
       <TodoList />
    </Container>
  );
}

export default HomePage;
