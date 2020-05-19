import React, { Component } from "react";
import axios from "axios";
import "../styles/Post.css";
import AddPost from "./Forms/AddPost"

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  //   componentDidMount() {

  //     axios
  //     .get("http://localhost:4000/api/posts/", {
  //       withCredentials: true,
  //     })
  //     .then((apiResponse) => {
  //         console.log(apiResponse);
  //         this.setState({ posts: apiResponse.data});
  //     })
  //     .catch((apiError) => {
  //         console.log(apiError);
  //     })
  // }


  render() {

    return (
      <div style={{ width: "100%", padding: "15px" }}>
        <AddPost handlePost={this.props.handlePost} posts={this.props.posts} />
        <table style={{ borderCollapse: 'separate', borderSpacing: '15px 15px', width: '100%' }}>
          <tbody>
            {/* Reversing the state with a shallow copy first otherwise it acts weird,
                as reverse() directly mutates the array */}
            {[...this.props.posts].reverse().map((post, index) => (
              <tr className="one-post" key={index}>

                <td className="content" colSpan="3">

                  <img style={{ display: "block", margin: "0 auto" }} src={post.picture} alt="" accept="video/*" /><br />{post.text}<br />
                 posted by <i><b>{post.user.firstName}</b></i><img className="post-user-picture" src={post.user.picture} alt="" />
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    );
  }
}

export default Post;
