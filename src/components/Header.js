import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo.png"

const Header = () => {

    const location = useLocation();

    return (
        <div className="main-header">
            <div className="main-header__inner">

                <div>
                    <Link className="main-header__link main-header__logo link" to="/"><img src={Logo} className="logo" alt="Logo"></img></Link>
                </div>

                <div className="main-header__links">
                    <Link className={location.pathname === "/documentation" ? "main-header__link main-header__link_active link" : "main-header__link link"}  to="/documentation">Docs</Link>
                    <Link className={location.pathname === "/about" ? "main-header__link main-header__link_active link" : "main-header__link link"}  to="/about">About</Link>
                    <Link className={location.pathname === "/support" ? "main-header__link main-header__link_active main-header__link_support_desktop link" : "main-header__link main-header__link_support_desktop link"}  to="/support">Support Us</Link>
                    <Link className={location.pathname === "/support" ? "main-header__link main-header__link_active main-header__link_support_mobile link" : "main-header__link main-header__link_support_mobile link"}  to="/support"><i className="material-icons">favorite</i></Link>
                </div>

            </div>
        </div>

    );  
};

export default Header;