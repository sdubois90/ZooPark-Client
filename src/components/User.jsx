import React, { Component } from 'react'
import axios from "axios";

class User extends Component {

    state = {
        users: [],
      };

      componentDidMount() {
     
        axios
        .get("http://localhost:4000/api/users")
        .then((apiResponse) => {
            console.log(apiResponse);
            this.setState({ users: apiResponse.data});
        })
        .catch((apiError) => {
            console.log(apiError);
        })
    }

    render() {
        return (
          <div>
    
     <table>
            <tbody>
            
            {this.state.users.map((user, index) => (
              <tr key={index}>  
                
                <td className="content" colSpan="3">
                {user.firstName} {user._id}
                </td>
              </tr>
              
              ))}
    
              
              </tbody>
            </table>
    
          
          </div>
        );
      }
    }
export default User
