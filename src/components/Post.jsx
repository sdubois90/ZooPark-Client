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
      <div>
        <AddPost />
        <table>
          <tbody>

            {this.props.posts.map((post, index) => (
              <tr key={index}>

                <td className="content" colSpan="3">
                  {post.text}{post.user}
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
