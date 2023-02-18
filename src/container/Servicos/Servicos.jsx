import React from "react";

import {IoBookSharp} from "react-icons/io5";
import {RiComputerLine} from "react-icons/ri";
import {MdLocalMovies, MdMeetingRoom} from "react-icons/md";

import "./Servicos.scss"

const Servicos = () => {

    return (
        <div className="app__servicos">
            <div className="app__servicos-container">
                <div className="app__servicos-text">
                    <h1>SERVIÇOS</h1>     
                </div>  

                    <div className="app__books">
                        <a href="#"><IoBookSharp /></a>
                        <p>Requisita um dos nossos livros</p>
                    </div>

                    <div className="app__computers">
                        <a href="#"><RiComputerLine /></a>
                        <p>Requisita um dos nossos computadores</p>
                    </div>

                    <div className="app__room">
                        <a href="#"><MdMeetingRoom /></a>
                        <p>Requisita uma das nossas salas</p>
                    </div>

                    <div className="app__movies">
                        <a href="#"><MdLocalMovies /></a>
                        <p>Requisita um dos nossos filmes</p>
                    </div>
            </div>
        </div>        
    );
}

export default Servicos;