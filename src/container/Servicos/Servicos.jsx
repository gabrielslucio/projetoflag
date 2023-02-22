import React from "react";

import {IoBookSharp} from "react-icons/io5";
import {RiComputerLine} from "react-icons/ri";
import {MdLocalMovies, MdMeetingRoom} from "react-icons/md";

import "./Servicos.scss"

const Servicos = () => {

    return (
        <div className="app__servicos" id="app-servicos">
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

            <div className="app__servicos-mobile">
                <div className="app__mobile-container">
                    <div className="app__m-books">
                            <a href="#"><IoBookSharp /></a>
                            <p>Livros</p>
                        </div>

                        <div className="app__m-computers">
                            <a href="#"><RiComputerLine /></a>
                            <p>Computadores</p>
                        </div>

                        <div className="app__m-room">
                            <a href="#"><MdMeetingRoom /></a>
                            <p>Salas</p>
                        </div>

                        <div className="app__m-movies">
                            <a href="#"><MdLocalMovies /></a>
                            <p>Filmes</p>
                        </div>

                </div>
            </div>
        </div>        
    );
}

export default Servicos;