import React, { Component } from "react";
import AddComment from "./Forms/AddComment";
import axios from "axios";

export class Comments extends Component {

  render() {
    return (
      <div className="comments">
      {this.props.comments.map((comment, index) => (
        <div style={{border: "1px solid red"}} key={index}>
        {comment.text}
        <p>posted by {comment.user.firstName}</p>
        </div>
        ))}
      

      </div>  
      )  
  }
}
export default Comments;


