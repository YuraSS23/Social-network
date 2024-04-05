import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {Navbar} from "./components/navbar/Navbar";
import UsersContainer from "./components/users/UsersContainer";
import {ProfileContainerWithRouter} from "./components/profile/ProfileContainerWithRouter";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {Error404} from "./components/error404/Error404";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/redux-store";


type AppPropsType = {}

function App(props: AppPropsType) {
    let userID = useSelector<RootStateType>(state => state.auth.data.id)
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer />
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/'} element={<ProfileContainerWithRouter/>}/>
                    <Route path={`/profile`} element={<Navigate to={`/profile/${userID}`} />} />
                    <Route path={`/profile/:userID?`} element={<ProfileContainerWithRouter/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/error404'} element={<Error404/>}/>
                    <Route path={'/*'} element={<Navigate to={"/error404"} />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
