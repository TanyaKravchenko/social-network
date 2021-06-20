import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
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
        this.setState(
            {editMode: true}
        )
    }

    deactivateEditMode = () => {
        this.setState(
            {editMode: false}
        )
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState ({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:Readonly<ProfileStatusType>, prevState:Readonly<ProfileStatusStatePropsType>) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }console.log('CDU')
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
