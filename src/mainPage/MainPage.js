import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/PostSlice";

const MainPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formValue = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    const { name, email, password } = form;
    event.preventDefault();
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegExp = /^[a-zA-z]+$/i;
    if (
      emailRegExp.test(name) &&
      nameRegExp.test(email) &&
      name &&
      email &&
      password
    ) {
      dispatch(addUser(form));
    } else {
      alert("Please ,fill in all fields ");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          onChange={(e) => formValue(e)}
          placeholder="name"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => formValue(e)}
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => formValue(e)}
          placeholder="password"
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          submit
        </button>
      </form>
    </div>
  );
};

export default MainPage;
