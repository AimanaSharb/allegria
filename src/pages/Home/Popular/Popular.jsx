import React from 'react';
import popular1 from "../../../assets/popular/popular1.png"
import popular2 from "../../../assets/popular/popular2.png"
import popular3 from "../../../assets/popular/popular3.png"
import popular4 from "../../../assets/popular/popular4.png"
import {useTranslation} from "react-i18next";


const Popular = () => {
    const {t}=useTranslation()
    return (
        <section className="popular">
            <div className="container-small">
                <div className="popular__content">
                    <h2 className="popular__title">{t("popular.title")}</h2>
                    <div className="popular__row">
                        <div className="popular__card">
                            <img src={popular1} className="popular__card-img" alt=""/>
                            <h3 className="popular__card-title">REPLAY</h3>
                            <p className="popular__card-desc"> Classic shoes</p>
                            <p className="popular__card-price">3800 UAH</p>

                        </div>
                        <div className="popular__card">
                            <img src={popular2} className="popular__card-img" alt=""/>
                            <h3 className="popular__card-title">REPLAY</h3>
                            <p className="popular__card-desc"> Classic shoes</p>
                            <p className="popular__card-price">3800 UAH</p>

                        </div>
                        <div className="popular__card">
                            <img src={popular3} className="popular__card-img" alt=""/>
                            <h3 className="popular__card-title">REPLAY</h3>
                            <p className="popular__card-desc"> Classic shoes</p>
                            <p className="popular__card-price">3800 UAH</p>

                        </div>
                        <div className="popular__card">
                        <img src={popular4} className="popular__card-img" alt=""/>
                        <h3 className="popular__card-title">REPLAY</h3>
                        <p className="popular__card-desc"> Classic shoes</p>
                        <p className="popular__card-price">3800 UAH</p>

                    </div>
                    </div>
                </div>
            </div>
            <div className="popular__bottom">
                <span className="popular__bottom-line"></span>
                <p className="popular__bottom-text"><svg width="115" height="14" viewBox="0 0 115 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.28838 13.8115L8.38716 11.397H2.44565L1.47902 13.8115H0L5.55631 0L10.7892 13.8115H9.28838ZM5.4909 3.46355L2.85265 10.2626H7.95835L5.4909 3.46355Z" fill="#EAE9E8"/>
                    <path d="M18.4463 13.8116V0.483643H19.8817V12.6345H24.108V13.8116H18.4463Z" fill="#EAE9E8"/>
                    <path d="M32.0186 13.8116V0.483643H33.454V12.6345H37.6802V13.8116H32.0186Z" fill="#EAE9E8"/>
                    <path d="M45.5947 13.8116V0.483643H52.3284V1.72113H47.0301V4.88953H50.635V6.08435H47.0301V12.6523H52.5646V13.808H45.5947V13.8116Z" fill="#EAE9E8"/>
                    <path d="M67.2793 13.9999C63.4419 13.9785 60.0078 11.9018 60.0078 7.4497C60.0078 3.2714 63.3547 0.273682 67.7917 0.273682C68.0279 0.273682 68.2641 0.273682 68.5004 0.295018V1.53251C68.2423 1.51117 67.9843 1.48984 67.73 1.48984C64.2559 1.51117 61.4032 3.63055 61.4032 7.4497C61.4032 11.2262 64.4703 12.8442 67.2357 12.8442C67.4283 12.8442 67.6209 12.8442 67.8135 12.8228V5.49746H64.8737V4.40576H69.1617V13.8292C68.544 13.9359 67.9008 13.9999 67.2793 13.9999Z" fill="#EAE9E8"/>
                    <path d="M84.417 10.6005L86.5829 13.8116H84.9948L83.2142 11.1054C82.6364 11.3366 81.7969 11.525 80.9393 11.525C80.5105 11.525 80.0381 11.4824 79.6311 11.4006V13.8151H78.2139V0.483643H80.7431C85.1838 0.483643 86.9208 3.04397 86.9208 6.19103C86.9245 7.76635 86.3249 9.42344 84.417 10.6005ZM81.0266 1.63579H79.6311V10.1987C80.1035 10.3444 80.4887 10.4085 81.0047 10.4085C81.5426 10.4085 82.1858 10.3231 82.571 10.1346L81.35 8.34953L82.4438 7.67744L83.7302 9.58702C84.8022 8.95761 85.5944 7.80191 85.5944 6.35461C85.5944 2.95862 83.3232 1.63579 81.0266 1.63579Z" fill="#EAE9E8"/>
                    <path d="M95.2891 13.8116V0.483643H96.7063V13.8116H95.2891Z" fill="#EAE9E8"/>
                    <path d="M113.499 13.8115L112.598 11.397H106.657L105.69 13.8115H104.211L109.767 0L115 13.8115H113.499ZM109.702 3.46355L107.064 10.2626H112.169L109.702 3.46355Z" fill="#EAE9E8"/>
                </svg>
                </p>
                <span className="popular__bottom-line">
</span>



            </div>
        </section>
    );
};

export default Popular;