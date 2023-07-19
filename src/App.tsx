import { useState } from "react";
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

type ITodo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <>
      <NewTodoForm
        value={text}
        onChange={handleInput}
        handleClick={addTodo}
        key={Date.now().toString()}
      />
      <TodoItem
        id="1"
        title="Learn Typescript"
        completed={false}
        style={{ color: "red" }}
      />
    </>
  );
}

export default App;
