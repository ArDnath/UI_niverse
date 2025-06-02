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
    <div>
      <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          className="border-2 border-black min-w-xl p-3 rounded"
          placeholder="Add a todo"
        />
        <button className="bg-green-400 border border-black text-white p-3 px-6 rounded font-bold">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
