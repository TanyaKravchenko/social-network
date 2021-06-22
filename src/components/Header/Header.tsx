import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.login}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
