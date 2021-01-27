import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {CombinedState, Store} from 'redux';
import { ProfilePageType } from './redux/profile-reducer';
import {ActionsTypes, DialogsPageType } from './redux/dialogs-reducer';
import { SidebarType } from './redux/sidebar-reducer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


type AppPropsType = {
    store: Store<CombinedState<{ profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebar: SidebarType; }>, ActionsTypes>
}

function App(props: AppPropsType) {

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={'/profile'} render={() => <Profile store={props.store} />}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>
    );
}

export default App;
