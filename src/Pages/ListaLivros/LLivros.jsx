import React from "react";

import { useNavigate } from "react-router-dom";

import "./LLivros.scss";

import books from "../../constants/books";
import images from "../../constants/images";

function LLivros() {
  const navigate = useNavigate();

  const selectedBooks = books.slice(0, 10);

  const handleReserveClick = (book) => {
    navigate(`/livro/${book.id}`);
  };

  return (
    <div className="app__llivros">
      <div className="app__llivros-container">
        <div className="app__llivros-header">
          <h1>Lista de livros disponíveis</h1>
        </div>
        <div className="app__llivros-list">
          <ul>
            {selectedBooks.map((book) => (
              <li className={"app__llivros-item" + book.id} key={book.id}>
                <h2>{book.name}</h2>
                <img
                  src={images[`book${book.id.toString().padStart(2, "0")}`]}
                  alt={`Imagem do livro ${book.name}`}
                />
                <p>
                  <span>Autor:</span> {book.author}
                </p>
                <p>
                  <span>Género:</span> {book.genre}
                </p>
                <button type="button" onClick={() => handleReserveClick(book)}>
                  Reservar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LLivros;