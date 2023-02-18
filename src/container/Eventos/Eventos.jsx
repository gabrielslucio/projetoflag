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
            <div className="app__eventos-text">
                <h1>Eventos</h1>
                <p>Explora todos os eventos disponíveis ou sugere um e diz-nos o que gostarias de ver!</p>
                
                <div className="app__eventos-sugere">
                    <button type="submit">Sugestões</button>
                </div>
            </div>
        </div>
    );
}

export default Eventos;