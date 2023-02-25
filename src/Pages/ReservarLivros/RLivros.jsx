import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import books from '../../constants/books';
import images from '../../constants/images';

const RLivros = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const bookData = books.find((book) => book.id === Number(id));
    setBook(bookData);

    const storedComments = JSON.parse(localStorage.getItem(`book_${id}_comments`));
    if (storedComments) {
        setComments(storedComments);
    }
  }, [id]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`book_${id}_comments`));
    if (storedComments) {
        setComments(storedComments);
    }
  })


  useEffect(() => {
    localStorage.setItem(`book-${id}-comments`, JSON.stringify(comments));
  }, [comments, id]);

  if (!book) {
    return <div>Erro</div>;
  }
  

  const handleCommentSubmit = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(`book_${id}_comments`, JSON.stringify(updatedComments));
  };

  const CommentBox = ({ onSubmit }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(comment);
      setComment('');
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Add a comment:
            <textarea value={comment} onChange={handleCommentChange} />
          </label>
          <button type="submit">Submit</button>
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
            src={images[`book${book.id.toString().padStart(2, '0')}`]}
            alt={`Imagem do livro ${book.name}`}
          />
          <h3>Synopsis</h3>
          <p>{book.description}</p>
        </div>

        <div className="app__rlivros-rating">
          <div className="app__rlivros-stars">
            {[...Array(5)].map((star, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= rating ? 'on' : 'off'}
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

          <div className="app__rlivros-comments">
            <CommentBox onSubmit={handleCommentSubmit} />
            {comments.map((comment, index) => (
              <div key={index}>{comment}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RLivros;
