import React, {useState} from "react";

import './Navbar.scss'

function Navbar () {

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-links'>
                <li><a href='livros'>Livros</a></li>
                <li><a href='serviços'>Serviços</a></li>
                <li><a href='eventos'>Eventos</a></li>
                <li><a href='contatos'>Contatos</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;

