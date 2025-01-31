import React from "react";
import { Categories, categorySelector, IToDo, toDoState } from "../atoms.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const cList = useRecoilValue(categorySelector);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDelete = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {cList.map(
        (c) =>
          category !== c && (
            <button key={String(c)} name={String(c)} onClick={onClick}>
              {String(c)}
            </button>
          )
      )}
      {/* {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )} */}
      <button onClick={onDelete}>❌</button>
    </li>
  );
}

export default ToDo;
