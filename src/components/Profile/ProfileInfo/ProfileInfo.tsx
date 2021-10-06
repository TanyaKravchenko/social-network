import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/preloader';
import avatar from '../../../assets/images/avatar3.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import {ProfileType} from '../../../types/types';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    // saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, isOwner, savePhoto, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <div className={classes.descriptionBlock}>
                    <div className={classes.ProfilePhotos}>
                        <img src={profile.photos.small ? profile.photos.large : avatar} alt={'photos'}/>
                        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    </div>
                    <div>
                        {profile.fullName}
                    </div>
                    <div>
                        {profile.aboutMe}
                    </div>
                    <div>
                        {profile.contacts.github}
                    </div>
                    <div>
                        <ProfileStatusWithHooks
                            status={status}
                            updateStatus={updateStatus}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
