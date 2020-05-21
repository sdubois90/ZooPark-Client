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

  displayUsers = (event, index) => {
    // this.state.users.group.map()
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          {/* GROUPS => Radio inputs for filering */}

          <fieldset
            id="intputContainer"
            style={{ border: "none"}}
          >
            <legend>Show group members by category</legend>

            <div className="ui radio checkbox" style={{padding: "0 5px"}}>
              <input
                type="radio"
                id="inputDog"
                name="inputDog"
                onChange={this.displayUsers}
              />
              <label htmlFor="inputDog">Dogs</label>
            </div>

            <div className="ui radio checkbox" style={{padding: "0 5px"}}>
              <input
                type="radio"
                id="inputCat"
                name="inputDog"
                onChange={this.displayUsers}
              />
              <label htmlFor="inputCat">Cats</label>
            </div>

            <div className="ui radio checkbox" style={{padding: "0 5px"}}>
              <input
                type="radio"
                id="inputHorse"
                name="inputDog"
                onChange={this.displayUsers}
              />
              <label htmlFor="inputHorse">Horses</label>
            </div>

            <div className="ui radio checkbox" style={{padding: "0 5px"}}>
              <input
                type="radio"
                id="inputSnake"
                name="inputDog"
                onChange={this.displayUsers}
              />
              <label htmlFor="inputSnake">Snakes</label>
            </div>
          </fieldset>
        </div>

        <div>
          {this.state.users.map((user, index) => (
            <div className="ui centered segment" key={index}>
              <div className="ui centered container">
                <img style={{display:"block", margin:"0 auto", borderRadius: "150px", width:"150px", height:"150px"}} src={user.picture} alt={user.firstName}/>
              </div>

              <div className="ui container" style={{fontWeight: "bold"}}>
                {user.firstName} {user.lastName}
              </div>

              <div className="group">My group: {user.group}</div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default User;
