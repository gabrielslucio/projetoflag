import React from "react";

import images from "../../constants/images";

import './Eventos.scss';

const Eventos = () => {
    return (
        <div className="app__eventos">
            <div className="app__eventos-container">
                <div className="app__eventos-imgs">
                    <div className="app__img01">
                        <a href="#"><img src={images.event01} alt="" /></a>
                    </div>

                    <div className="app__img02">
                        <a href=""><img src={images.event02} alt="" /></a>
                    </div>

                    <div className="app__img03">
                        <a href=""><img src={images.event03} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eventos;