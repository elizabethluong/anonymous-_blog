import React, { useState } from "react";
import { getAllUserPosts, createUserPost } from "./services/UserSerivce";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import CreateUser from "./components/CreateUser";
import { DisplayBoard } from "./components/DisplayBoard";

function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUserPost, setNumberOfUserPost] = useState(0);

  const create = async (e) => {
   const user1 = await createUserPost(user)
      setNumberOfUserPost(user1.numberOfUserPost + 1);

  };

  const getAll = async () => {
    const users = await getAllUserPosts()
      setUsers(users);
      setNumberOfUserPost(users.length);
  };

  const onChangeForm = (e) => {
    const userPost = user;
    if (e.target.name === "firstName") {
      userPost.firstName = e.target.value;
    } else if (e.target.name === "userName") {
      userPost.userName = e.target.value;
    } else if (e.target.name === "post") {
      userPost.post = e.target.value;
    }
    setUser(userPost);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              onChangeForm={onChangeForm}
              create={create}></CreateUser>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUserPost={numberOfUserPost}
              getAll={getAll}></DisplayBoard>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users}></Users>
      </div>
    </div>
  );
}

export default App;
