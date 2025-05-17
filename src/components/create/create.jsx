import React from "react"
export const Create = ({ setNewTodo, newTodo, handleKeyDown }) => {
  return (
    <>
      <input
        onClick={() =>
          setNewTodo({
            title: newTodo.title,
            completed: !newTodo.completed,
          })
        }
        className={`w-5 h-5 rounded-full m-[15px] border border-gray-400 appearance-none ${
          newTodo.completed ? "bg-white border-white" : "bg-transparent"
        }`}
        type="checkbox"
      />
      <input
        onKeyDown={handleKeyDown}
        className="ml-4 text-gray-300 text-lg w-full outline-none"
        type="text"
        value={newTodo.title}
        onChange={(e) =>
          setNewTodo({
            title: e.target.value,
            completed: newTodo.completed,
          })
        }
        placeholder="Create a new todo..."
      />
    </>
  );
};
