import React from 'react';
import {UserType} from '../../redux/users-reducer';
import classes from '../Users/Users.module.css';
import src3 from '../../images/avatar4.jpeg';
import axios from 'axios';

type UsersPropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

class User extends React.Component<UsersPropsType>{

}
export default User;