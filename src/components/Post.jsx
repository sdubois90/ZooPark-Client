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
        <AddPost handlePost={this.props.handlePost} />
        <table style={{ borderCollapse: 'separate', borderSpacing: '15px 15px' }}>
          <tbody>
            {this.props.posts.map((post, index) => (
              <tr className="one-post" key={index}>

                <td className="content" colSpan="3">
                  {/* <img src={post.user.picture} alt="" /> */}
                  "{post.text}" posted by <i><b>{post.user.firstName}</b></i>
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
