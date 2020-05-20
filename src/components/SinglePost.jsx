import React, { Component } from 'react'
import "../styles/Post.css";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import axios from "axios";

export default class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          numberOfLikes: this.props.post.likes.length,
          liked: false,
        };
      }

    updateLikes = () => {
        if (!this.state.liked) {
          this.setState((prevState, props) => {
            return {
              //numberOfLikes: prevState.numberOfLikes + 1,
              liked: true,
            };
          });
           // axios call to push the current user ID inside 
          axios
          .patch(`http://localhost:4000/api/posts/like/${this.props.post._id}`,{}, {
              withCredentials: true, // Cookies de session très importants ! Sinon il ne trouve pas req.session.currentUser
          })
          .then((apiResponse) => {
              console.log(apiResponse.data.likes);
              this.setState({numberOfLikes: apiResponse.data.likes.length})
          })
         
        } else {
            this.setState((prevState, props) => {
                return {
                  //numberOfLikes: prevState.numberOfLikes + 1,
                  liked: false,
                };
              });
               // axios call to push the current user ID inside 
              axios
              .patch(`http://localhost:4000/api/posts/dislike/${this.props.post._id}`, {},{
                withCredentials: true, // Cookies de session très importants ! Sinon il ne trouve pas req.session.currentUser
              })
              .then((apiResponse) => {
                  console.log(apiResponse.data.likes);
                  this.setState({numberOfLikes: apiResponse.data.likes.length})
              })
        }
    };

    render() {
      return (
              <tr className="one-post" key={this.props.index}>
                <td className="content" colSpan="3">
                  {this.props.post.picture && <img
                    style={{ display: "block", margin: "0 auto" }}
                    src={this.props.post.picture}
                    alt=""
                  />}
            {console.log(this.props.post)}
                  {this.props.post.video && <video width="320" height="240" controls>
                    <source src={this.props.post.video} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>}
                  
                  <br />
                  {this.props.post.text}
                  
                  <LikeButton
                    number={this.state.numberOfLikes}
                    updateLikes={this.updateLikes} />
                    
                  <DeleteButton
                    post={this.props.post} 
                    key={this.props.index}
                    updatePost={this.props.updatePost} />
                    
                  <br />
                  posted by
                  <i>
                    <b>{this.props.post.user.firstName}</b>
                  </i>
                  <img
                    className="post-user-picture"
                    src={this.props.post.user.picture}
                    alt=""
                  />
                
                </td>
              </tr>
        )
    }
}
