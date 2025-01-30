import React from "react";
import { IToDo } from "../atoms.ts";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
