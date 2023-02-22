import React from 'react';

import { NavLink } from 'react-router-dom';

import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';


import images  from '../../constants/images';

import './Livros.scss';

const booksImages = [images.book01, images.book02, images.book03, images.book04];

const Livros = () => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const {current} = scrollRef;

        if(direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className="app__livros" id="app-livros">
            <div className="app__livros-content">
                <h1 className="headtext">Livros</h1>
                <p>Visita a nossa biblioteca e escolha um livro para levar consigo!</p>
                
                <NavLink to={"/rlivros"}>
                    <button type="button" className="app__livros-button">Reservar</button>
                </NavLink>
            </div>

            <div className="app__livros-images">
                <div className="app__livros-container" ref={scrollRef}>
                   {[images.book01, images.book02, images.book03, images.book04]
                   .map((image, index) => (
                     <div className="app__livros-cards" 
                        key={`gallery_image-${index + 1}`}> 
                        <NavLink to={"/rlivros"}>
                            <img src={image} alt="imagens dos livros"/>
                        </NavLink>
                     </div>
                   ))}
                </div>

                <div className="app__livros-arrows">
                    <BsArrowLeftShort 
                        className="app__arrow-left" 
                        onClick={() => scroll("left")}
                    />
                    <BsArrowRightShort 
                        className="app__arrow-right" 
                        onClick={() => scroll("right")}
                    />
                </div>
            </div>
        </div>
    );
}

export default Livros;