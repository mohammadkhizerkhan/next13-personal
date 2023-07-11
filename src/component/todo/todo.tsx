"use client";
import React from "react";
interface TodoProps {
  name: string;
  id: string;
  completed: boolean;
  checkCallback: (id: string, completed: boolean) => void;
}
const TodoItem = ({ id, name, completed, checkCallback }: TodoProps) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={completed}
        onChange={(e) => checkCallback(id, e.target.checked)}
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

export default TodoItem;
