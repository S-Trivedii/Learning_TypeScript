import { Card, CardHeader, CardTitle } from "./ui/card";
import type { Todo } from "../types/todo";
import { Button } from "./ui/button";

type TodoListProps = {
  items: Todo[];
  removeItem: (id: string) => void;
};

const TodoList = ({ items, removeItem }: TodoListProps) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <Card key={item.id} className="mb-2">
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{item.task}</CardTitle>
              <Button
                className="bg-red-700 text-black"
                size={"icon"}
                onClick={() => removeItem(item.id)}
              >
                X
              </Button>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default TodoList;
