import React from 'react';
import classes from './ProfileInfo.module.css';

type ProfileStatusType = {
    status: string
}

type ProfileStatusStatePropsType = {
    editMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType, ProfileStatusStatePropsType> {
    state: ProfileStatusStatePropsType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        debugger
        this.setState(
            {editMode: true}
        )
    }

    deactivateEditMode = () => {
        debugger
        this.setState(
            {editMode: false}
        )
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
