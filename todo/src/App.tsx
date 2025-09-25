import { useState } from "react";
import AddTodoList from "./components/AddTodoList";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

/*
In this project, The App is the "single souce of truth". What do I mean by that ?
In React, the “single source of truth” usually refers to the place where your state lives.

- If multiple components need to read/write the same state, the SSOT should live in their closest common parent.
- If only one component cares about a piece of state, keep it local to that component.

Compare this version of 'todo' app vs 'todo2'. You will understand why this version ('todo') is the most optimal approach
*/

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: string) => {
    const randomId = Math.random().toString();
    setTodos((prev) => [...prev, { id: randomId, task: item }]);
  };

  const removeTodo = (id: string) => {
    const filteredItems = todos.filter((item) => item.id !== id);
    setTodos(filteredItems);
  };

  return (
    <main className="max-w-lg mx-auto mt-3 ">
      <div>
        <AddTodoList addItem={addTodo} />
      </div>

      <div>
        <TodoList items={todos} removeItem={removeTodo} />
      </div>
    </main>
  );
}

export default App;
