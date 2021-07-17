import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusWithHooksType = {
    status: string
    updateUserStatus: (status: string) => void
}

type ProfileStatusStatePropsType = {
    status: string
}

const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksType & ProfileStatusStatePropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                />
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
