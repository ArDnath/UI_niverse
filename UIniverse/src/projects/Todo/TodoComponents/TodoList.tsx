import React from "react";
import TodoListItems from "./TodoListItems";

interface TodoItem {
  id: string;
  title: string;
  is_completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="p-6 w-full max-w-2xl mx-auto">
      <ol className="flex flex-col gap-4">
        {todos.length > 0 ? (
          todos.map((item) => (
            <TodoListItems key={item.id} items={item} setTodos={setTodos} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Seems lonely in here, what are you up to?
          </p>
        )}
      </ol>
    </div>
  );
};

export default TodoList;
