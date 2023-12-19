import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({ id: users[users.length - 1].id + 1, name: name, email: email })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h1> Add New User</h1>
          <div className="mt-4">
            <label htmlFor="name">Name</label>
            <input
              className="px-8 border-4 rounded-sm border-black"
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email">Email</label>
            <input
              className="px-8 border-4 rounded-sm border-black"
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
