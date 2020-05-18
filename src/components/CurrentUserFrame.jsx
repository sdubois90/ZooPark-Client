import React from 'react';
import CurrentUserInfo from "./CurrentUserInfo";
import CurrentUserEditForm from "./Forms/CurrentUserEditForm";
import axios from "axios";

class CurrentUserFrame extends React.Component {

    state = {
        isEditing: false,
        currentUserToEdit: null
    };

    toggleEditForm = (event) => {
        this.setState({ isEditing: true});
    }

render() {



    return (
        <div>
            <h2>Edit user info</h2>
            {this.state.isEditing && <CurrentUserEditForm/>}
            <CurrentUserInfo toggleEditForm={this.toggleEditForm}/>
           

        </div>

    )
}

}

export default CurrentUserFrame
