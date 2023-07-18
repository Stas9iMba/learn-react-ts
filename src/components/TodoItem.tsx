interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

function TodoItem({ id, title, completed }: TodoItemProps) {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
}

export default TodoItem;