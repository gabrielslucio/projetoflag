import React from "react";

import images from "../../constants/images";

import './Eventos.scss';

const Eventos = () => {
    return (
        <div className="app__eventos">
            <div className="app__eventos-container">
                <div className="app__eventos-imgs">
                    <div className="app__img01">
                        <img src={images.event01} alt="" />
                    </div>

                    <div className="app__img02">
                        <img src={images.event02} alt="" />
                    </div>

                    <div className="app__img03">
                        <img src={images.event03} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eventos;