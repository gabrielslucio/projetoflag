import React from "react";

import {MdOutlineEmail} from "react-icons/md";

import './Contatos.scss';

const Contatos = () => {

    return (
        <div className="app__contatos" id="app-contatos">
            <div className="app__contatos-container">
                <div className="app__contatos-text">
                    <h1>CONTATOS</h1>

                    <div className="app__contatos-list">
                        <ul>
                            <li><h2>Morada</h2></li>
                            <li><p>Alameda da Universidade, 1600-214 Lisboa</p></li>
                            <li><p>Tel. +351 217 920 000</p></li>
                            <li><h2>Horário</h2></li>
                            <li><p>2ª a 6ª - 7h30 às 22h00</p></li>
                            <li><p>Sa. - 8h00 às 13h00</p></li>
                        </ul>
                    </div>
                    <div className="app__contatos-btn">
                        <button type="submit"><MdOutlineEmail /></button>
                    </div>
                </div>
                <div className="app__contatos-maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4813694562495!2d-9.160433684402268!3d38.752661963067176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330333cd63e3%3A0xe69947220603097!2sUniversidade%20de%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1676821333441!5m2!1spt-PT!2spt" 
                        width="500" 
                        height="500" 
                        style={{ border: 0}}
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade" 
                    />
                </div>
                
            </div>
            
        </div>

    );
}

export default Contatos 