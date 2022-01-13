import React from "react";

export const Users = ({ users }) => {
  if (users.length === 0) return null;

  const UserRow = (user, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{user.firstName}</td>
        <td>{user.userName}</td>
        <td>{user.post}</td>
      </tr>
    );
  };

  const userTable = users.map((user, index) => UserRow(user, index));

  return (
    <div className="container">
      <h2>Posts</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Firstname</th>
            <th>Username</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
