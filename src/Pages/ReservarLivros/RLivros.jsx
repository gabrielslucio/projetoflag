import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import books from "../../constants/books";
import images from "../../constants/images";

import "./RLivros.scss";

const RLivros = () => {
  const { id } = useParams();
  
  const [book, setBook] = useState(null);
  const [hover, setHover] = useState(0);
  const [comments, setComments] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const handleReservarClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const ReservationModal = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [addressError, setAddressError] = useState(false);

    const handleFormSubmit = (event) => {
      event.preventDefault();

      if (!name || !email || !address) {
        if (!name) setNameError(true);
        if (!email) setEmailError(true);
        if (!address) setAddressError(true);
      }

      if (name && email && address) {
        const reservationData = {
          name,
          email,
          address,
          bookName: book.name,
          timestamp: new Date().getTime(),
        };

        const reservations = JSON.parse(
          localStorage.getItem("reservations") || "[]"
        );

        localStorage.setItem(
          "reservations",
          JSON.stringify([...reservations, reservationData])
        );

        handleModalClose();
      }
    };

    const handleModalClose = () => {
      setName("");
      setEmail("");
      setAddress("");
      setNameError(false);
      setEmailError(false);
      setAddressError(false);
      setShowModal(false);
    };

    return (
      <div>
        {showModal && (
          <div className="app__rlivros-modal">
            <div className="app__rlivros-mcontent">
              <h2>Reserve o livro {book.name}</h2>
              <form onSubmit={handleFormSubmit}>
                <label HTMLfor="nome">
                  Nome:
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                <label HTMLfor="email">
                  Email:
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </label>
                <label HTMLfor="endereco">
                  Endereço:
                  <input
                    id="endereco"
                    name="endereco"
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    required
                  />
                </label>
                <div className="app__btnm">
                  <button type="submit">Reservar</button>
                </div>
              </form>
              <div className="app__mx">
                <button onClick={handleModalClose}>
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const bookData = books.find((book) => book.id === Number(id));
    setBook(bookData);

    const storedComments = JSON.parse(
      localStorage.getItem(`book_${id}_comments`)
    );
    if (storedComments) {
      setComments(storedComments);
    }
  }, [id]);

  useEffect(() => {
    const storedComments = JSON.parse(
      localStorage.getItem(`book_${id}_comments`)
    );
    if (storedComments) {
      setComments(storedComments);
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`book-${id}-comments`, JSON.stringify(comments));
  }, [comments, id]);

  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem(`book_${id}_rating`);
    return storedRating ? parseInt(storedRating) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`book_${id}_rating`, rating);
  }, [id, rating]);

  if (!book) {
    return <div>Erro</div>;
  }

  const handleCommentSubmit = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(
      `book_${id}_comments`,
      JSON.stringify(updatedComments)
    );
  };

  const CommentBox = ({ onSubmit }) => {
    const [comment, setComment] = useState("");

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(comment);
      setComment("");
    };

    return (
      <div className="app__rlivros-comment">
        <form className="app__rlivros-cform" onSubmit={handleSubmit}>
          <label className="app__rlivros-label">
            <h4>Adiciona um comentário:</h4>
            <textarea
              className="app__rlivros-textarea"
              maxLength="50"
              value={comment}
              onChange={handleCommentChange}
              required
            />
          </label>
          <button className="app__rlivros-bform" type="submit">
            Comenta
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="app__rlivros">
      <div className="app__rlivros-container">
        <div className="app__rlivros-head">
          <h1>{book.name}</h1>
        </div>

        <div className="app__rlivros-livros">
          <h2>{book.author}</h2>
          <img
            src={images[`book${book.id.toString().padStart(2, "0")}`]}
            alt={`Imagem do livro ${book.name}`}
          />
          <h3>Descrição</h3>
          <p>{book.description}</p>
        </div>

        <div className="app__rlivros-rating">
          <div className="app__rlivros-stars">
            {[...Array(5)].map((star, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating || index <= hover ? "on" : "off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span className="star">
                    <AiFillStar />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="app__rlivros-rbtn">
          <button type="button" onClick={handleReservarClick}>
            Reservar
          </button>
        </div>
      </div>

      <div className="app__rlivros-comments">
        <CommentBox onSubmit={handleCommentSubmit} />
        {comments.map((comment, index) => (
          <div className="app__rlivros-cc">
            <div className="app__rlivros-container">
              <p key={index}>{comment}</p>
            </div>
          </div>
        ))}
      </div>

      {showModal && <ReservationModal />}
    </div>
  );
};

export default RLivros;