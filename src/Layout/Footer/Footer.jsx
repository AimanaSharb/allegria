import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom'


const Footer = () => {
    const {i18n,t } = useTranslation()
    return (
        <footer className="footer">

            <div className="container">
                <div className="footer__top">
                    <h2 className="footer__top-title">
                        Будьте в курсе событий
                    </h2>
                    <label htmlFor="" className="footer__top-label">
                        <input type="text" className="footer__top-input"/>
                        <a href=""><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9H13.5M13.5 9L11 6M13.5 9L11 12" stroke="#E64926"/>
                            <rect x="0.5" y="0.5" width="17" height="17" stroke="#E64926"/>
                        </svg>
                        </a>
                    </label>
                    <ul className="footer__top-row">
                        <li className="footer__top-text">
                            <Link className="footer__top-link">{t("footer.link1")}</Link>
                        </li>
                        <li className="footer__top-text">
                            <Link className="footer__top-link" to='questions'>{t("footer.link2")}</Link>
                        </li>
                        <li className="footer__top-text">
                            <Link className="footer__top-link">{t("footer.link3")}</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__bot">
                    <p className="footer__bot-text">Все права защищены  © 2020 Allegria.com</p>
                    <p className="footer__bot-text">Дизайн и разработка:  </p>

                </div>
            </div>
            
        </footer>
    );
};

export default Footer;