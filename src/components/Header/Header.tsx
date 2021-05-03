import header_image from '../../images/image-header.jpg';
import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            {/*<img src={header_image} alt={'header_image'}/>*/}
        </header>
    );
}

export default Header;
