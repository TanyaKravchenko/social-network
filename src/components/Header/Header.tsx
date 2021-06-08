import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css'

type HeaderType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderType) => {
    return (
        <header className={classes.header}>
            <div className={classes.login}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
