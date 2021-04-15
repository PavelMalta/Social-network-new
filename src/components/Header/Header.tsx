import React from "react";
import { NavLink } from "react-router-dom";
import { logoutTC } from "../../redux/auth-reducer";
import s from './Header.module.css';
import {HeaderComponentPropsType} from "./HeaderContainer";
import {useDispatch} from "react-redux";


function Header(props: HeaderComponentPropsType) {
    const dispatch = useDispatch()

    const logOut = () => {
        return dispatch(logoutTC())
    }
    return (
        <header className={s.header}>
            <img src={'https://i.pinimg.com/736x/c0/b3/09/c0b309c29f2e7bb5b7abcd51aa0bcec3.jpg'}/>

            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{ props.login} - <button onClick={logOut}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>)
}
export default Header;