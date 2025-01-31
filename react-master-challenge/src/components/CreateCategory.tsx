import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryList, categoryState, toDoState } from "../atoms.ts";

interface ICategory {
  addCategory: string;
}

function CreateCategory() {
  const [category, setCategory] = useRecoilState(categoryList);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const categoryValid = ({ addCategory }: ICategory) => {
    if (!addCategory) {
      return;
    }
    // setCategory((oldCategory) => {
    //   return {
    //     ...oldCategory,
    //     [addCategory]: [],
    //   };
    // });
    setCategory((oldCategory) => {
      return {
        ...oldCategory,
        [addCategory]: addCategory as string,
      };
    });
    setValue("addCategory", "");
  };
  //   console.log(category);
  //   const categoryValid = ({ addCategory }: IAdd) => {
  //     if (!addCategory) {
  //       return;
  //     }
  //     setCategory((oldCategory) => {
  //         ...oldCategory,
  //         {[addCategory]: [addCategory]},
  //     });

  //     setValue("addCategory", "");
  //   };
  return (
    <form onSubmit={handleSubmit(categoryValid)}>
      <h2>Add Category</h2>
      <input
        {...register("addCategory", {
          required: "Please write a Category",
        })}
        placeholder="Write a category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
