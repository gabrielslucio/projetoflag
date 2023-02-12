import React, { useState } from "react";




import {FaAddressCard, FaSearch, FaUser} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';

import books from "../../constants/books";


import images from "../../constants/images";

import './NavTop.scss'


const NavTop = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        
        <nav className='app__navbar'>

            <div className='app__navbar-logo'>
                    <img src={images.logo} alt='Logo da biblioteca' />
                </div>
            
            
            <div className="app__navbar-container">
                <div className="app__navbar-search">
                    <div className="app__navbar-box">
                        <div className="app__navbar-bar">
                            <div className="app__navbar-separator">
                                <div className="app__navbar-controler">
                                <input
                                    type="text"
                                    placeholder="Procurar"
                                    //onChange={handleChange}
                                    //value={searchInput}
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="app__navbar-dropdown">
                        <div className="app__navbar-button">
                            <ul>
                                <li 
                                    onClick={handleOpen}
						            className="app__navbar-first">

                                        <input type="checkbox" />
                                        Pesquisar
                                </li>
                                
                                {open ? (
                                    <ul className="app__navbar-ul">
                                        <li className="app__navbar-li-btn">
                                            <input type="checkbox" className="app__navbar-movies" />
                                            <a href="#">Filmes</a>                                            
                                        </li>
                                        <li>
                                            <input type="checkbox" className="app__navbar-magazines" />
                                            <a href="#">Revistas</a>
                                        </li>
                                        <li>
                                            <input type="checkbox" className="app__navbar-school" />
                                            <a href="#">Apoio Escolar</a>
                                        </li>

                                    </ul>
                                ) : null}
                                
                            </ul>
                            </div>
                        </div>
                                */}

                    <div className="app__navbar-dropdown">
                        <form action = "#">
                            <select name="Pesquisar" id="app__navbar-menu">
                                <option value="movies"><p>Filmes</p></option>
                                <option value="magazines">Revistas</option>
                                <option value="school">Apoio escolar</option>
                            </select>
                            
                        </form>
                    </div>

                        <div className="app__navbar-buttonc">
                         <button 
                            className="app__navbar-button"  
                            type="submit"
                            value="Submit"
                        >
                                    <FaSearch></FaSearch>
                            </button>
                        </div>
                        </div>
                    
                </div>

                <div className="app__navbar-userbox">

                    <ul className='app__navbar-user'>
                        <li className="app__navbar-account">
                            <a href='minha conta'>
                            <FaUser className="user"/>
                            <p>Minha Conta</p>
                            </a>
                        </li> 
                        
                        <li className="app__navbar-schedule">
                            <a href='horário'>
                            <AiFillClockCircle className="clock"/>                        
                            <p>Horário</p>
                            </a>
                        </li>   
                        <li className="app__navbar-cartao">
                            <a href="cartao">
                            <FaAddressCard className="card" />
                            <p>Fazer cartão</p>
                            </a>
                            </li>     
                    </ul>
                </div>
                
            </div>
        </nav>
        
        
        
    )
}

export default NavTop;

