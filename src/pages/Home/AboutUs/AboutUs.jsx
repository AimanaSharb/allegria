import React from 'react';
import aboutUs from "../../../assets/aboutUs/aboutUs.png"

const AboutUs = () => {
    return (
        <section className="aboutUs">
            <div className="container-small">
                <div className="aboutUs__content">
                    <h2 className="aboutUs__title">
                        <span className="aboutUs__title-o">O</span> <br/>
                        О
                        нас
                    </h2>
                    <p className="aboutUs__desc">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>
                    <img src={aboutUs} alt="" className="aboutUs__img"/>
                </div>

            </div>

        </section>
    );
};

export default AboutUs;