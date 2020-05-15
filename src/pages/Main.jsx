import React from "react";
import Post from "../components/Post";
import User from "../components/User";
import AddPost from "../components/Forms/AddPost";
import "../styles/Main.css"

function Main(props) {
  return (
    <div className="main-container">
    <div className="profile">
    <h2>Profile</h2>
    </div>
    <div className="mainfeed">
    <h2>Main Feed</h2>
      {/* <AddPost /> */}
      
      <Post />
      </div>
      <div className="group-members">
      <h2>Group Members</h2>
      <User />
      </div>
      
    </div>
  );
}

export default Main;
