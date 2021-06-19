import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg'/>

        <div className={s.login_block}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>

}

export default Header;