import { useState } from "react";
import Form from "./TodoComponents/Form";
import TodoList from "./TodoComponents/TodoList";

interface TodoItem {
  id: string;
  title: string;
  is_completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { title: "Some task", id: self.crypto.randomUUID(), is_completed: false },
    {
      title: "Some other task",
      id: self.crypto.randomUUID(),
      is_completed: true,
    },
  ]);

  const todos_completed = todos.filter((todo) => todo.is_completed).length;
  const total_todos = todos.length;
  console.log(todos,todos_completed,)

  return (
    <div className="flex flex-col items-center gap-6 mt-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-2xl  rounded-lg  p-6 border-3 border-black">
        <div>
          <p className="text-3xl font-bold">Tasks Completed</p>
          <p className="text-sm">Keep up the great work!</p>
        </div>
        <div className="text-2xl text-white bg-green-500 rounded-full  p-6 font-bold shadow-md">
          {todos_completed}/{total_todos}
        </div>
      </div>

      {/* Form */}
      <Form setTodos={setTodos} />

      {/* Todo List */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
