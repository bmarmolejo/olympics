import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import GamesNav from './components/GamesNav/GamesNav';

const Layout = ({ matchData }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <GamesNav matchData={matchData} />
    </>
  );
};

export default Layout;
