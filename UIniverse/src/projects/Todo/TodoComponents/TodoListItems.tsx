import React, { useState, useRef, useEffect } from "react";

interface TodoItem {
  id: string;
  title: string;
  is_completed: boolean;
}

interface TodoListItemsProps {
  items: TodoItem;
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoListItems: React.FC<TodoListItemsProps> = ({ items, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(items.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditing(true);
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const submitEdit = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === items.id ? { ...todo, title: editedTitle } : todo
      )
    );
    setEditing(false);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEdit();
  };

  const handleInputBlur = () => {
    if (editing) {
      submitEdit();
    }
  };

  const toggleTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === items.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== items.id));
  };

  return (
    <li
      onClick={toggleTodo}
      className={`flex justify-between items-center border border-gray-300 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow cursor-pointer ${
        items.is_completed ? "bg-green-100" : ""
      }`}
    >
      <div className="flex items-center gap-4 w-full">
        <input
          type="checkbox"
          checked={items.is_completed}
          readOnly
          className="w-5 h-5 appearance-none border-2 border-green-500 rounded-full checked:bg-green-500 checked:border-green-500 pointer-events-none"
        />

        {editing ? (
          <form onSubmit={handleInputSubmit} className="w-full">
            <input
              ref={inputRef}
              value={editedTitle}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              className="w-full border border-gray-400 p-2 rounded"
            />
          </form>
        ) : (
          <p
            className={`text-lg font-medium flex-1 ${
              items.is_completed
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {items.title}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoListItems;
