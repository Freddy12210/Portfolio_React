import React from 'react';
import '../style.css'; // Importer le fichier CSS pour les styles personnalisés du footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col footer-item">
                        <p>&copy; 2024 Portfolio. Tous droits réservés </p>
                    </div>
                    <div className="col footer-item">
                        <h5>Contact</h5>
                        <p>freddy.morilleau44@gmail.com</p>
                        <p>06.99.93.16.23</p>
                        <a href="https://www.linkedin.com/in/freddy-morilleau/">LinkedIn : Freddy Morilleau</a>
                    </div>
                    <div className="col footer-item">
                        <h5>Navigation</h5>
                        <ul>
                            <li><a href="/#home">Accueil</a></li>
                            <li><a href="/#savoirplus">CV</a></li>
                            <li><a href="/#projets">Projets</a></li>
                            <li><a href="/BTS">BTS</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
