interface NewTodoFormProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: () => void;
}

function NewTodoForm({ value, onChange, handleClick }: NewTodoFormProps) {
  return (
    <>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={onChange}
      />
      <button onClick={handleClick}>Add todo</button>
    </>
  );
}

export default NewTodoForm;
