import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/store-redux";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>): any  {
    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent =
            connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps)(RedirectComponent)

        return ConnectedAuthRedirectComponent

}