import {
  Container,
  CheckBox,
  Description,
  DeleteTask,
} from "./TodoItem.styles";

function TodoItem() {
  return (
    <Container>
      <CheckBox type="checkbox"></CheckBox>
      <Description>Some Task</Description>
      <DeleteTask className="delete-task">❌</DeleteTask>
    </Container>
  );
}

export default TodoItem;
