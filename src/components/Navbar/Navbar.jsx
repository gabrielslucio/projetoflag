import React from "react";

import {FaUser} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';

import images from "../../constants/images";

import './Navbar.scss'


const Navbar = () => {
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt='Logo da biblioteca' />
            </div>

            <ul className='app__navbar-links'>
                <li ><a className='active' href='livros'>Livros</a></li>
                <li><a href='serviços'>Serviços</a></li>
                <li><a href='eventos'>Eventos</a></li>
                <li><a href='contatos'>Contatos</a></li>
            </ul>
            
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

        </nav>
        
    )
}

export default Navbar;

