import React from "react";

interface TodoItem {
  id: string;
  title: string;
  is_completed: boolean;
}

interface FormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Form: React.FC<FormProps> = ({ setTodos }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("todo") as HTMLInputElement;
    const value = input.value.trim();

    if (!value) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: value,
        id: crypto.randomUUID(),
        is_completed: false,
      },
    ]);

    form.reset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <form className="flex flex-col sm:flex-row gap-2 w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          className="flex-1 border-2 border-black p-3 rounded-lg text-base w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          placeholder="Add a new task..."
          aria-label="Add a new todo"
        />
        <button 
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm whitespace-nowrap"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
