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

// componentDidUpdate inside which you do another axios request as in componentDidMount

// componentDidUpdate() {
//   axios
//     .get("http://localhost:4000/api/users")
//     .then((apiResponse) => {
//       console.log(apiResponse);
//       this.setState({ users: apiResponse.data });
//     })
//     .catch((apiError) => {
//       console.log(apiError);
//     });
// }



  render() {
    return (
      <div className="user-wrapper">

        {this.state.users.map((user, index) => (

          <div className="userinfo" key={index}>

            <div className="user-pic">
             
              <img              
                src={user.picture}
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
