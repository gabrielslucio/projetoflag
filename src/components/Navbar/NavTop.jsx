import React, { useState } from "react";

import {FaAddressCard, FaSearch, FaUser} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';

import books from "../../constants/books";

import images from "../../constants/images";

import './NavTop.scss'


const NavTop = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.taget.value);
    };

    if (searchInput.length > 0) {
        books.filter((books) => {
        return books.name.match(searchInput);
        });
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

                        <div className="app__navbar-buttonc">
                         <button className="app__navbar-button" type="submit">
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

