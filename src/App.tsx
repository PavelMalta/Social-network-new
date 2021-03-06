import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {AppStateType} from "./redux/store-redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializedApp} from "./redux/app-reducer";

type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializedApp: () => void
}
export type AppComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppComponentPropsType> {

    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {initializedApp})(App);
