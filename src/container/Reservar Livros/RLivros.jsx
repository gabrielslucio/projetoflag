import React from "react";
import { useState } from "react";

import images from "../../constants/images";

import {AiFillStar} from "react-icons/ai";

import './RLivros.scss'

const RLivros = () => {

    const [rating, setRating] = useState(0);

    const [hover, setHover] = useState(0);

    return (

        <div className="app__rlivros">
            <div className="app__rlivros-container">
                <div className="app__rlivros-head">
                    <h1>Reservar Livro</h1>
                </div>

                <div className="app__rlivros-livros">
                    <h2>O Senhor dos Anéis</h2>
                    <img src={images.book04} />
                    <h3>Sinopse</h3>
                    <p> 
                        Desde a sua publicação, em 1954-1955, o relato da viagem de Frodo pela Terra Média, tem encantado poetas e académicos, crianças e adultos.
                        É uma obra--prima da fantasia, épica e íntima ao mesmo tempo, familiar por vezes, inquietante noutras e a sua voz atravessou os séculos.
                    </p>
                </div>

                <div className="app__rlivros-rating">
                    <div className="app__rlivros-stars">
                        {[...Array(5)].map((star, index) => {
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= rating ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                >    
                                    <span className="star"><AiFillStar /></span>
                                </button>                            
                            )
                        })}
                    </div>

                    <div className="app__rlivros-comments">
                        
                    </div>
                    
                </div>
            </div>            
        </div>
    )
}

export default RLivros