import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Navbar} from './components/navbar/Navbar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from './components/news/News';
import {Music} from './components/music/Music';
import {Settings} from './components/settings/Settings';


export type PostsType = {
    id: number
    likeCounts: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

type AppPropsType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/'} element={<Profile posts={props.posts}/>}/>
                        <Route path={'/profile'} element={<Profile posts={props.posts}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/music'} element={<Music />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                    </Routes >
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
