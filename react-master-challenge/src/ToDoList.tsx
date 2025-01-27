import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("submit");
//   };
//   return (
// <div>
//   <form onSubmit={onSubmit}>
//     <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//     <button>Add</button>
//     {toDoError !== "" ? toDoError : null}
//   </form>
// </div>
//   );
// }

interface IForm {
  Email: string;
  First_Name: string;
  Last_Name?: string;
  Username: string;
  Password: string;
  Password1: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message as string}</span>
        <input
          {...register("First_Name", { required: "write here" })}
          placeholder="First Name"
        />{" "}
        <span>{errors?.First_Name?.message as string}</span>
        <input
          {...register("Last_Name", { required: "write here" })}
          placeholder="Last Name"
        />{" "}
        <span>{errors?.Last_Name?.message as string}</span>
        <input
          {...register("Username", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />{" "}
        <span>{errors?.Username?.message as string}</span>
        <input
          {...register("Password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />{" "}
        <span>{errors?.Password?.message as string}</span>
        <input
          {...register("Password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />{" "}
        <span>{errors?.Password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
