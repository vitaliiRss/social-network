import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Aside } from "./components/Aside/Aside";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Aside />
      <main className="content">
        {/* <Profile /> */}
        <Dialogs />
      </main>
    </div >
  );
}
