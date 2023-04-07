import React, { useState } from "react";

import { FaAddressCard, FaSearch, FaUser } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";

import images from "../../constants/images";

import "./NavTop.scss";
import books from "../../constants/books";
import { NavLink, useNavigate } from "react-router-dom";

function NavTop() {
  const [value, setValue] = useState("");

  const item = books;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  const handleReserveClick = (event) => {
    event.preventDefault();

    const searchTerm = value.toLowerCase();
    const book = books.find((item) => item.name.toLowerCase() === searchTerm);

    if (book) {
      navigate(`/livro/${book.id}`);
    }
   

  }

  const navigate = useNavigate();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <NavLink to={"/"}>
            <img src={images.logo} alt="Logo da biblioteca" />
          </NavLink>
        </div>
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
              <form action="#">
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
                onClick={handleReserveClick}
              >
                <FaSearch></FaSearch>
              </button>
            </div>
          </div>

          <div className="app__navbar-results">
            {books
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const name = item.name.toLowerCase();

                return (
                  searchTerm &&
                  name.startsWith(searchTerm) &&
                  name !== searchTerm
                );
              })
              .map((item) => (
                <div
                  className="app__navbar-row"
                  onClick={() => onSearch(item.name)}
                  key={item.id}
                >
                  <table>
                    <tr>
                      <td>
                        <button onClick={() => handleReserveClick(item)}>{item.name}</button>
                      </td>
                    </tr>
                  </table>
                </div>
              ))}
          </div>
        </div>

        <div className="app__navbar-userbox">
          <ul className="app__navbar-user">
            <li className="app__navbar-account">
                <FaUser className="user" />
                <NavLink to={"/minhaconta"}>
                  Minha Conta
                </NavLink>              
            </li>
            <li className="app__navbar-schedule">
             
                <AiFillClockCircle className="clock" />
                  <NavLink to={""}>
                    Horário
                  </NavLink>
                
              
            </li>
            <li className="app__navbar-cartao">              
                <FaAddressCard className="card" />
                  <NavLink to={""}>
                    Fazer cartão
                  </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="app__navbar-mobile">
        <div className="app__users-mobile">
          <FaUser className="user-mobile" />
        </div>

        <div className="app__schedule-mobile">
          <AiFillClockCircle className="clock-mobile" />
        </div>

        <div className="app__card-mobile">
          <FaAddressCard className="card-mobile" />
        </div>
      </div>
    </nav>
  );
}

export default NavTop;