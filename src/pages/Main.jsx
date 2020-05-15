import React from "react";
import Post from "../components/Post";
import User from "../components/User";
import AddPost from "../components/Forms/AddPost";
import "../styles/Main.css"
import axios from "axios"

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
  }

  componentDidUpdate(prevPops, prevState) {
    if (prevState.posts !== this.state.props) {
      console.log("updated")
    } else {
      return null;
    }
  }


  render() {
    return (
      <div className="main-container">
        <div className="profile">
          <h2>Profile</h2>
        </div>
        <div className="mainfeed">
          <h2>Main Feed</h2>
          {/* <AddPost /> */}

          <Post posts={this.state.posts} />
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
