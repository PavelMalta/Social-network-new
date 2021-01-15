import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionsTypes, RootStateType, StoreType} from './redux/state';


type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}
                                                                messageText={props.state.dialogsPage.newMessageText}
                                                                dispatch={props.dispatch}/>}/>
                <Route path={'/profile'} render={() => <Profile profilePage={props.state.profilePage}
                                                                dispatch={props.dispatch}
                />}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
