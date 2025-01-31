import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
  // category: string;
}

// const categoryList = [Categories.TO_DO, Categories.DOING, Categories.DONE];

// const { persistAtom } = recoilPersist({
//   key: "local",
//   storage: localStorage,
// });

const { persistAtom } = recoilPersist();

export const categoryList = atom({
  key: "categoryList",
  //default: [Categories.TO_DO, Categories.DOING, Categories.DONE],
  default: Categories,
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom({
  key: "category",
  // default: categoryList[0],
  default: Categories.TO_DO,
  effects_UNSTABLE: [persistAtom],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    console.log(toDos);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => {
    const categories = get(categoryList);
    return [...Object.values(categories)];
  },
});
