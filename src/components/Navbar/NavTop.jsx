import React from "react";

import {FaSearch, FaUser} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';

import images from "../../constants/images";

import './NavTop.scss'


const NavTop = () => {
    return (
        <nav className='app__navbar'>
            <div className="app__navbar-container">
            <div className='app__navbar-logo'>
                <img src={images.logo} alt='Logo da biblioteca' />
            </div>

            <input 
                type="text"
                placeholder="Procurar"
            />
            <button type="submit">
                <FaSearch />
            </button>




            <ul className='app__navbar-user'>
                <li>
                    <a href='minha conta'>
                    <FaUser className="user"/>
                    <p>Minha Conta</p>
                    </a>
                </li> 
                
                <li>
                    <a href='horário'>
                    <AiFillClockCircle className="clock"/>                        
                    <p>Horário</p>
                    </a>
                </li>        
            </ul>
            </div>
        </nav>
        
    )
}

export default NavTop;

