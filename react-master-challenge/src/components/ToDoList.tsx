import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo.tsx";
import {
  Categories,
  categoryList,
  categorySelector,
  categoryState,
  toDoSelector,
} from "../atoms.ts";
import ToDo from "./ToDo.tsx";
import CreateCategory from "./CreateCategory.tsx";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const cList = useRecoilValue(categorySelector);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateCategory />
      <hr />
      <select value={category} onInput={onInput}>
        {cList.map((c) => (
          <option key={String(c)} value={String(c)}>
            {String(c)}
          </option>
        ))}
        {/* <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option> */}
      </select>
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      {/* {toDos ? toDos.map((toDo) => <ToDo key={toDo.id} {...toDo} />) : null} */}
    </div>
  );
}

export default ToDoList;
