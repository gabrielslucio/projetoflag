import React, { useState } from "react";

import './PainelConta.css';

import images from "../../constants/images";

const PainelConta = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const accountData = JSON.parse(localStorage.getItem("accountData"));
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const EditProfileModal = ({ isOpen, onClose }) => {
        if(!isOpen) return null;

        return (
            <section className="app__u-m">
                <div className="app__m-content">
                    <h2>Editar perfil</h2>
                    <form>                        
                            <label htmlFor="name">
                                Nome:
                                <input 
                                    type="text" 
                                    required
                                />
                            </label>

                            <label htmlFor="address">
                                Morada:
                                <input 
                                    type="text" 
                                    required
                                />
                            </label>

                            <label htmlFor="phone">
                                Telemóvel:
                                <input 
                                    type="text" 
                                    required
                                />
                            </label>
                    </form>
                    <button 
                        className="app__m-close"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
            </section>
        );
    };

    if(isLoggedIn === "true") {
        return (
            <section className="app__user-area">
                <div className="app__user-area-container">
                    <div className="app__profile-pic">
                        <img src={images.ppicture} alt="profile picture" />
                        <button type="submit">
                            Mudar fotografia
                        </button>
                    </div>
                    <div className="app__info-list">
                        <ul className="app__list">
                            <li><span>Username:</span> {accountData.username}</li>
                            <li><span>Nome:</span> </li>
                            <li><span>Morada:</span> </li>
                            <li><span>Telemóvel:</span> </li>
                        </ul>
                    </div>

                    <section className="app__cont-btn" >
                    <div className="app__ep-btn">
                        <button 
                            type="button" 
                            onClick={toggleModal}
                        >
                            Editar perfil
                        </button>
                    </div>
                    <div className="app__cc-btn">
                        <button type="submit">
                            Criar cartão
                        </button>
                    </div>
                    <div className="app__fl-btn">
                        <button 
                            type="button"
                        >
                            Fazer logout
                        </button>
                    </div>

                    </section>

                    <EditProfileModal isOpen={isModalOpen} onClose={toggleModal} />

                    
                </div>
                
            </section>            
        );
    } else {
        return (
            <h1>NÃO EXISTE AQUI NADA</h1>
        );
    }
}

export default PainelConta;