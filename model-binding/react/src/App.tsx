import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => {
    alert("Hello: " + data.firstName + " " + data.lastName );
    console.log(data);
  });
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <button type="submit">Save data</button>
      <button
        type="button"
        onClick={() => {
          setValue("lastName", "Luo"); 
          setValue("firstName", "Jake"); 
        }}
      >
        SetValue
      </button>
    </form>
  );
}
