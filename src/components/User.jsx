import React, { Component } from "react";
import axios from "axios";
import "../styles/User.css";

class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users")
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ users: apiResponse.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  render() {
    return (
      <div className="user-wrapper">

        {this.state.users.map((user, index) => (

          <div className="userinfo" key={index}>

            <div className="user-pic">
             
              <img              
                src="/media/plant.svg"
                alt={user.firstName}
              />
              </div>

              <div className="usernames">
              {user.firstName} {user.lastName}</div>
            
          
            <div className="group">My group: {user.group}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default User;
