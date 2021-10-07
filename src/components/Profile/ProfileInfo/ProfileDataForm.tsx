import React from 'react';
import s from './ProfileInfo.module.css';
import style from './../../common/FormsControls/FormsControl.module.css';
import {createdField, GetStringKeys, Input, Textarea} from '../../common/FormsControls/FormsControl';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType} from '../../../types/types';

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
                                                                                              handleSubmit,
                                                                                              profile,
                                                                                              error
                                                                                          }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createdField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a
                job</b>: {createdField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My professional skills</b>:
            {createdField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>


        <div>
            <b>About me</b>:
            {createdField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createdField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
