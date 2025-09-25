import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoListProp = {
  addItem: (item: string) => void;
};

const AddTodoList = ({ addItem }: AddTodoListProp) => {
  const [task, setTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // add task to array
    addItem(task);

    // clear input field
    setTask("");
  };
  return (
    <div className="mb-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between"
      >
        <Input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <Button type="submit" className="bg-blue-500 ml-2">
          Add Item
        </Button>
      </form>
    </div>
  );
};

export default AddTodoList;
