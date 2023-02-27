import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import images from "../../constants/images";

import "./Livros.scss";

const Livros = () => {
  const scrollRef = React.useRef(null);

  const books = [
    { id: 1, name: "Book 1" },
    { id: 2, name: "Book 2" },
    { id: 3, name: "Book 3" },
    { id: 4, name: "Book 4" },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const navigate = useNavigate();

  const selectedBooks = books.slice(0, 4);

  const handleReserveClick = (book) => {
    navigate(`/livro/${book.id}`);
  };

  return (
    <div className="app__livros" id="app-livros">
      <div className="app__livros-content">
        <h1 className="headtext">Livros</h1>
        <p>Visita a nossa biblioteca e escolha um livro para levar consigo!</p>
        <NavLink className="app__livros-button" to={"/llivros"}>         
            Reservar
        </NavLink>
      </div>

      <div className="app__livros-images">
        <div className="app__livros-container" ref={scrollRef}>
          {selectedBooks.map((book, index) => (
            <div
              className="app__livros-cards"
              key={`gallery_image-${index + 1}`}
            >
              <img
                src={images[`book${book.id.toString().padStart(2, "0")}`]}
                alt={`Imagem do livro ${book.name}`}
                onClick={() => handleReserveClick(book)}
              />
            </div>
          ))}
        </div>
        <div className="app__livros-arrows">
          <BsArrowLeftShort
            className="app__arrow-left"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="app__arrow-right"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Livros;
