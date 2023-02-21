import React from "react";

import './FooterBot.scss';



const FooterBot = () => {

    return (
        <footer className="app__footerbot">
            <div className="app__footerbot-container">
                <p>2023 Biblioteca X </p>
                <span>|</span>
                <p>Todos os direitos reservados</p>
                <span>|</span>
                <p>Site Designed by Gabriel</p> 
            </div>

            <div className="app__footer-mobile">
                <p>2023 Biblioteca X <span>|</span> Todos os direitos reservados
                <span>|</span>Site Designed by Gabriel</p>
            </div>
        </footer>

        
    )

}

export default FooterBot