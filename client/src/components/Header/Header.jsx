import React from 'react';
import logoImg from "../../assets/images/UEFA Euro 2024 Germany.png";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <img className="header__logo" src={logoImg} alt="UEFA logo"/>
            </nav>
        </header>
    );
}

export default Header;