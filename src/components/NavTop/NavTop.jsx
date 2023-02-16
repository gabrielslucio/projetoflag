import React, {useState} from "react";

import {FaAddressCard, FaSearch, FaUser} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';

import images from "../../constants/images";

import Data from '../../Data.json';

import './NavTop.scss'


function NavTop() {

    const [value, setValue] = useState ('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm);

        console.log("search", searchTerm);
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
                            <input 
                                type="text" 
                                placeholder="Procurar"
                                value={value}
                                onChange={onChange}
                            /> 
                    </div>
                

                    <div className="app__navbar-dropdown">
                        <form action = "#">                            
                            <select name="Pesquisar" id="app__navbar-menu">
                                <option value="books">Livros</option>
                                <option value="movies">Filmes</option>
                                <option value="magazines">Revistas</option>
                                <option value="school">Apoio escolar</option>
                            </select>                             
                        </form>
                    </div>

                        <div className="app__navbar-buttonc">
                            <button 
                                className="app__navbar-button"  
                                onClick={() => onSearch(value) }
                            >
                                <FaSearch></FaSearch>
                            </button>
                        </div>
                        </div>
                    
                        <div className="app__navbar-results">
                           {Data.filter(item => {
                             const searchTerm = value.toLowerCase();
                             const name = item.name.toLowerCase();

                             return (searchTerm && name.startsWith(searchTerm) && name !== searchTerm
                             );                                                
                             })
                             .slice(0,10)                                            
                             .map((item) => ( 
                                 <div
                                    className="app__navbar-row"
                                    onClick={()=> onSearch(item.name)} 
                                    key={item.id}
                                 >  
                                 <table>
                                    <tr>
                                        <td><a href="#">{item.name}</a></td>
                                    </tr>
                                 </table>
                                </div>
                            ))}
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

