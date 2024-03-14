import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { StateType } from "./redux/state";

type AppType = {
  addPost: (text: string) => void
  state: StateType
}

export const App = (props: AppType) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Aside />
      <main className="content">
        <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
        <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </main>
    </div >
  );
}
