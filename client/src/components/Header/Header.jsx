import React from 'react';
import logoImg from "../../assets/images/ParisLogo.svg";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <img className="header__logo" src={logoImg} alt="olympics logo"/>
                <h1 className="header__title">Week 1</h1>
            </nav>
        </header>
    );
}

export default Header;
