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

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Tasks Completed</h1>
            <p className="text-sm text-gray-600">Keep up the great work!</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl sm:text-2xl font-bold rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
            <span>{todos_completed}<span className="text-green-100">/</span>{total_todos}</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mb-8">
        <Form setTodos={setTodos} />
      </div>

      {/* Todo List */}
      <div className="w-full">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
