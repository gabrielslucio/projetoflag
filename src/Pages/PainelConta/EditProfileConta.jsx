import React, { useState, useEffect } from "react";

import "./EditProfileConta.css";

const EditProfileModal = ({
    isOpen,
    onClose, 
    handleSubmit, 
    nome, 
    setNome, 
    morada,
    setMorada, 
    telemovel,
    setTelemovel,
    profileUpdate,
    userId
}) => {

    const [isCurrentUser, setIsCurrentUser] = useState(false)

    useEffect(() => {
        const storedId = localStorage.getItem("userId")
        setIsCurrentUser(userId === storedId);
    }, [userId]);
   
        if(!isOpen) return null;   
    
        return (
            <section className="app__u-m">                
                <div className="app__m-content">
                {profileUpdate && (
                    <div className="app__f-alert">
                        <p>As suas informações foram alteradas com sucesso</p>
                    </div>
                )}
                    <h2>Editar perfil</h2>
                    <form onSubmit={handleSubmit}>                        
                            <label htmlFor="nome">
                                Nome:
                                <input 
                                    type="text" 
                                    id="nome"
                                    name="nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </label>
    
                            <label htmlFor="morada">
                                Morada:
                                <input 
                                    type="text"
                                    id="morada"
                                    name="morada"
                                    value={morada}
                                    onChange={(e) => setMorada(e.target.value)}                                                                      
                                    required
                                />
                            </label>
    
                            <label htmlFor="telemovel">
                                Telemóvel:
                                <input 
                                    type="text" 
                                    id="telemovel"
                                    name="telemovel"  
                                    value={telemovel}
                                    onChange={(e) => setTelemovel(e.target.value)}                                  
                                    required
                                />
                            </label>
                            <button 
                                className="m-s-btn" 
                                type="submit"
                            >
                                Submeter
                            </button>
                    </form>
    
                    <button 
                        type="button"
                        className="app__m-close"
                        onClick={onClose}
                    >
                        X
                    </button>
                </div>
            </section>
        );
    
};

export default EditProfileModal;