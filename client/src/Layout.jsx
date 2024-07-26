import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';

const Layout = ({ matchData }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet context={{ matchData }} />
      </main>
    </>
  );
};

export default Layout;
