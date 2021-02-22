import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
}
export type HeaderComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email)
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {setAuthUserData})(HeaderContainer);
