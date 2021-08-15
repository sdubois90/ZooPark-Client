import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { withUser } from "../components/Auth/withUser";

// ajout
import UserContext from '../Auth/UserContext';


class Profile extends Component {
    // ajout
    static contextType = UserContext;

    constructor (props) {
        super(props);
        this.state = {
            currentUser: [],
        };  
    }
    
    componentDidMount() {
        console.log(this.props)
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${this.context.user._id}`, {withCredentials: true})
            .then((apiResponse) => {
                console.log(apiResponse);
                this.setState({ currentUser: apiResponse.data });
            })
            .catch((apiError) => {
                console.log(apiError);
            })
    }

    render() {
        return (
            <div>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                {/* <p>{this.state.currentUser._id}</p>
                <p>{this.state.currentUser.firstName}</p>
                <p>{this.state.currentUser.lastName}</p>
                <p>{this.state.currentUser.email}</p> */}

                {/* Ajout */}
                <p>{this.context.user.firstName}</p>
                <p>{this.context.user.lastName}</p>
                <p>{this.context.user.email}</p>
                
            </div>
        )
    }
}

export default withUser(withRouter(Profile));
