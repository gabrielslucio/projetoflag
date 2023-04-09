import React, { useEffect, useState } from "react";
import "./PainelConta.css";
import images from "../../constants/images";
import EditProfileModal from "./EditProfileConta";

const PainelConta = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [morada, setMorada] = useState("");
  const [telemovel, setTelemovel] = useState("");

 
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const profile = {
      nome: nome,
      morada: morada,
      telemovel: telemovel,
    };

    setNome("");
    setMorada("");
    setTelemovel("");

    setTimeout(() => {
      setIsModalOpen(!isModalOpen);
    }, 2000);
  };

 
  const accounts = JSON.parse(localStorage.getItem("accounts"));
  const { id } = accounts && accounts.length > 0 && accounts[0];

  const user =
    localStorage.getItem("accounts") &&
    JSON.parse(localStorage.getItem("accounts")).find(
      (user) => user.id === id
    );

  if (isLoggedIn === "true" && user) {
    return (
      <section className="app__user-area">
        <div className="app__user-area-container">
          <div className="app__profile-pic">
            <img src={images.ppicture} alt="profile picture" />
            <button type="button">Mudar fotografia</button>
          </div>
          <div className="app__info-list">
            <ul className="app__list">
              <li>
                <span>Username:</span>
              </li>
              <li>
                <span>Nome:</span>
              </li>
              <li>
                <span>Morada:</span>
              </li>
              <li>
                <span>Telemóvel:</span>
              </li>
            </ul>
          </div>

          <section className="app__cont-btn">
            <div className="app__ep-btn">
              <button type="button" onClick={toggleModal}>
                Editar perfil
              </button>
            </div>
            <div className="app__cc-btn">
              <button type="button">Criar cartão</button>
            </div>
            <div className="app__fl-btn">
              <button type="button" onClick={handleLogout}>
                Fazer logout
              </button>
            </div>
          </section>
          <EditProfileModal
            isOpen={isModalOpen}
            onClose={toggleModal}
            handleSubmit={handleSubmit}
            nome={nome}
            setNome={setNome}
            morada={morada}
            setMorada={setMorada}
            telemovel={telemovel}
            setTelemovel={setTelemovel}
          />
        </div>
      </section>
    );
  } else {
    return <h1>NÃO EXISTE AQUI NADA</h1>;
  }
};

export default PainelConta;
