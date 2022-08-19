import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    

    return (
        <div className="footer">
            <div className="break-line"></div>
            <div className="footer__content">
                <div className="footer__api-links">
                   <a href="/api/character" className="footer__link link" target={"_blank"}>Characters: 73</a>
                   <a href="/api/episode" className="footer__link link" target={"_blank"}>Episods: 26</a>
                </div>
                <div className="footer__contacts">
                    <Link to="#" className="footer__link link">GitHub</Link>
                    <Link to="/support" className="footer__link link"><i className="material-icons">favorite</i></Link>
                </div>
                <div className="footer__createBy">
                    <span>Create by <a className="link footer__link_createBy" target="_blank" rel="noreferrer" href="https://github.com/SamborskiyD">Dmitry Samborskyi</a>2022</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;