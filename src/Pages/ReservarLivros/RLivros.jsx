import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";

import images from "../../constants/images";
import books from "../../constants/books";



import './RLivros.scss'

const RLivros = ({ match }) => {
    
    const { id } = useParams();
    const [book, setBook] = useState(null);  
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        const bookData = books.find((book) => book.id === Number(id));
        setBook(bookData);
    }, [id]);

    if (!book) {
        return <div>Loading...</div>
    }

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
                    <h3>Sinopse</h3>
                    <p> 
                        {book.description}
                    </p>
                </div>

                <div className="app__rlivros-rating">
                    <div className="app__rlivros-stars">
                        {[...Array(5)].map((star, index) => {
                            return (
                                <button
                                    type="button"
                                    key={index}
                                    className={index <= rating ? "on" : "off"}
                                    onClick={() => setRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                >    
                                    <span className="star"><AiFillStar /></span>
                                </button>                            
                            )
                        })}
                    </div>

                    <div className="app__rlivros-comments">
                        
                    </div>
                    
                </div>
            </div>            
        </div>
    )
}

export default RLivros