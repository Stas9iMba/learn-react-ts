import { Todo } from "../types";

interface TodoItemProps extends Todo {
  style?: React.CSSProperties;
}

function TodoItem({ id, title, completed, style = {} }: TodoItemProps) {
  return (
    <li style={{ textDecoration: completed ? "line-through" : "", ...style }}>
      <input type="checkbox" defaultChecked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
}

export default TodoItem;
