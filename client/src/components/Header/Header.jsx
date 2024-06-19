import React from 'react';
import logoImg from "../../assets/images/uefaeuro2024_header.jpeg";
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