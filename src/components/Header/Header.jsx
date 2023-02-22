import React from "react";

import images from "../../constants/images";

import './Header.scss';

const Header = () => {
    return (
        <header className="app__header">
            <div className="app__header-container">
                <div className="app__header-img">
                    <img src={images.header} alt="imagem de uma biblioteca com texto de bem vindo" />
                </div>
            </div>

            <div className="app__header-mobile">
                <div className="app__mobile-img">
                    <img src={images.headerMobile} alt="imagem de uma biblioteca com texto de bem vindo" />
                </div>
            </div>

        </header>
    );
}

export default Header;