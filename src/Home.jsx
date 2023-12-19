import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}))
    
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <table className="w-[50vw]">
          <thead>
            <tr className="px-16">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="">
                  <Link to={`/edit/${user.id}`} className="p-2 bg-[red]">
                    edit
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                    className="p-2 bg-[green]"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/create"> Create</Link>
    </div>
  );
};

export default Home;
