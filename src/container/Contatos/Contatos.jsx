import React, {useState} from "react";

import { AiOutlineClose } from "react-icons/ai";

import {MdOutlineEmail} from "react-icons/md";

import './Contatos.scss';

const Contatos = () => {
    const [showModal, setShowModal] = useState(false);
    const [paraValue, setParaValue] = useState("");
    const [sujeitoValue, setSujeitoValue] = useState("");
    const [mensagemValue, setMensagemValue] = useState("");
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = {
        para: paraValue,
        sujeito: sujeitoValue,
        mensagem: mensagemValue,
      };
  
      const emails = JSON.parse(localStorage.getItem("emails")) || [];
  
      emails.push(email);
  
      localStorage.setItem("emails", JSON.stringify(emails));
  
      toggleModal();
      setParaValue("");
      setSujeitoValue("");
      setMensagemValue("");
    };
  
    return (
      <div className="app__contatos" id="app-contatos">
        <div className="app__contatos-container">
          <div className="app__contatos-text">
            <h1>CONTATOS</h1>
  
            <div className="app__contatos-list">
              <ul>
                <li>
                  <h2>Morada</h2>
                </li>
                <li>
                  <p>Alameda da Universidade, 1600-214 Lisboa</p>
                </li>
                <li>
                  <p>Tel. +351 217 920 000</p>
                </li>
                <li>
                  <h2>Horário</h2>
                </li>
                <li>
                  <p>2ª a 6ª - 7h30 às 22h00</p>
                </li>
                <li>
                  <p>Sa. - 8h00 às 13h00</p>
                </li>
              </ul>
            </div>
            <div className="app__contatos-btn">
              <button type="button" onClick={toggleModal}>
                <MdOutlineEmail />
              </button>
            </div>
            {showModal && (
              <div className="app__cmodal">
                <form onSubmit={handleSubmit}>
                  <h2>Envie um email</h2>
                  <label HTMLfor="para">Para:</label>
                  <input
                    type="email"
                    id="para"
                    name="para"
                    placeholder="biblioteca@gmail.com"
                    value={paraValue}
                    onChange={(e) => setParaValue(e.target.value)}
                  />
                  <label HTMLfor="sujeito">Sujeito:</label>
                  <input
                    type="email"
                    id="sujeito"
                    name="sujeito"
                    value={sujeitoValue}
                    onChange={(e) => setSujeitoValue(e.target.value)}
                    required
                  />
                  <label HTMLfor="messagem">Mensagem:</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    value={mensagemValue}
                    onChange={(e) => setMensagemValue(e.target.value)}
                    required
                  />
                  <div className="app__cmbtn">
                    <button className="app__sbtn" type="submit">
                      Enviar
                    </button>
                    <button
                      className="app__cbtn"
                      type="button"
                      onClick={toggleModal}
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="app__contatos-maps">
            <iframe
              title="app_maps"  
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4813694562495!2d-9.160433684402268!3d38.752661963067176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19330333cd63e3%3A0xe69947220603097!2sUniversidade%20de%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1676821333441!5m2!1spt-PT!2spt"
              width="500"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Contatos;