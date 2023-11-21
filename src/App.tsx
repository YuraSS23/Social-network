import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {ActionType, StateType} from "./redux/store";
import {StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<Profile store={props.store}/>}/>
                    <Route path={'/profile'} element={<Profile store={props.store}/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer store={props.store}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
