import React from "react";

import {FaAddressCard, FaSearch, FaUser} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';

import images from "../../constants/images";

import './NavTop.scss'


const NavTop = () => {
    return (
        
        <nav className='app__navbar'>

            <div className='app__navbar-logo'>
                    <img src={images.logo} alt='Logo da biblioteca' />
                </div>
            
            
            <div className="app__navbar-container">
                <div className="app__navbar-search">
                    <div className="app__navbar-bar">
                        <div className="app__navbar-separator">
                            <input 
                                className="app__navbar-input"
                                type="text"
                                placeholder="Procurar"
                            />
                        </div>
                            <button type="submit">
                                <FaSearch />
                            </button>
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

