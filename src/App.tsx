import { useState } from "react";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
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
