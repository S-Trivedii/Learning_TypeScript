import { useState } from "react";
import AddTodoList from "./AddTodoList";
import "./styles.css";
import TodoList from "./TodoList";

/*

Compare the code of both approach - todo vs todo2

In this todo2 app, there is no "single source of truth". Compare todo vs todo2
Both approach are correct. But 'todo' is the best approach

*/

export default function App() {
  const [item, setItem] = useState([]);
  return (
    <main>
      <AddTodoList setItem={setItem} />
      <TodoList item={item} setItem={setItem} />
    </main>
  );
}
