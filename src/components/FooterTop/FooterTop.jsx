import React from "react";

import images from "../../constants/images";

import './FooterTop.scss';

const FooterTop = () => {
    return (
        <div className="app__footertop">
            <div className="app__footertop-container">
                <div className="app__footertop-logo">
                    <img src={images.logowhite} alt="logo da biblioteca em branco" />
                </div>
                <div className="app__footertop-library">
                    <ul>
                        <li><h3>Biblioteca</h3></li>
                        <li><a href="#"><p>Sobre</p></a></li>
                        <li><a href="#"><p>Trabalhadores</p></a></li>
                        <li><a href="#"><p>Amigos da Biblioteca</p></a></li>
                        <li><a href="#"><p>Trabalhar connosco</p></a></li>
                        <li><a href="#"><p>COVID-19 Update</p></a></li>
                    </ul>
                </div>
                <div className="app__footertop-howdo">
                    <ul>
                        <li><h3>Como é que?</h3></li>
                        <li><a href="#"><p>Consigo um cartão</p></a></li>
                        <li><a href="#"><p>Modifico a minha conta</p></a></li>
                        <li><a href="#"><p>Voluntariado</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterTop