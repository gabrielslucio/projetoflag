import React from "react";


import './LLivros.scss';

import books from "../../constants/books";
import images  from '../../constants/images';

function LLivros() {

    const selectedBooks = books.slice(0, 4);

    return (

    
        <div className="app__llivros">
            <div className="app__llivros-container">
                
                <div className="app__llivros-header">
                    <h1>Lista de livros disponíveis</h1>
                </div>

                <div className="app__llivros-list">

                    <ul>
                        {selectedBooks.map((book) => 
                        <li key={book.id}>
                            <h2>Nome: {book.name}</h2>
                            <img src={images[`book${book.id.toString().padStart(2, "0")}`]} alt={`Imagem do livro ${book.name}`} />
                            <p>Autor: {book.author}</p>
                            <p>Género: {book.genre}</p>
                        </li>)}
                    </ul>

                </div>



            </div>
        </div>
    )
}

export default LLivros;