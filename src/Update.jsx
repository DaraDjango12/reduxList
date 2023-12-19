import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const Update = () => {
  //use params to grab the id of the specific user
  const { id } = useParams();
  
  //use Selector to get all the users list
  const users = useSelector((state) => state.users);

  //check if ID is same as already existing ID, this is to select the id to update
  const existingUser = users.filter((f) => f.id == id);
  const {name, email} = existingUser[0];
  const [uemail, setEmail] = useState(email);
  const [uname, setName] = useState(name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ id: id, name: uname, email: uemail }));
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <h1> Update user</h1>
        <div className="mt-4">
          <label htmlFor="name">Name</label>
          <input
            className="px-8 border-4 rounded-sm border-black"
            type="text"
            name="name"
            value={uname}
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
            value={uemail}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="mt-4">Update</button>
      </form>
    </div>
  );
};

export default Update;
