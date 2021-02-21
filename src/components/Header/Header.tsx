import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';


function Header() {
    return (
        <header className={s.header}>
            <img src={'https://i.pinimg.com/736x/c0/b3/09/c0b309c29f2e7bb5b7abcd51aa0bcec3.jpg'}/>

            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>)
}
export default Header;