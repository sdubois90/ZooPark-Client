import React from "react";
import Post from "../components/Post";
import User from "../components/User";
import AddPost from "../components/Forms/AddPost";
import "../styles/Main.css";
import axios from "axios";
import Profile from "../components/Profile";
import apiHandler from "../api/apiHandler";

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/posts", {
        withCredentials: true,
      })
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ posts: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      })
  //   apiHandler
  //     .getItems()
  //     .then((apiResponse) => {
  //       console.log(apiResponse.data)
  //       this.setState({ posts: apiResponse.data })
  //     })
  //     .catch((apiError) => {
  //       console.log(apiError)
  //     })
    
  }


  // the corresponding method which will take an argument that corresponds to the value of the new post
  // this method will set the state

  handlePost = (responseFromAddPost) => {
    console.log("SECOND STEP")
    this.setState({ posts: [...this.state.posts, responseFromAddPost] })
  }


  render() {
    return (
      <div className="main-container">
        <div className="profile">
          <h2>Profile</h2>
          <Profile />
        </div>
        <div className="mainfeed">
          <h2>Main Feed</h2>
          {/* <AddPost /> */}

          <Post handlePost={this.handlePost} posts={this.state.posts} />
        </div>
        <div className="group-members">
          <h2>Group Members</h2>
          <User />
        </div>

      </div>
    );
  }
}

export default Main;
