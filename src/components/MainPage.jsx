import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import '../style.css';


const MainPage = () => {
    return (
        <>
            <div className='mainpage' id='home'>
                <div>
                    <div>
                        <h1>Freddy <br /> Morilleau<span class="point"></span></h1>
                        <hr className='redline'/>
                    </div>
                    <a href="#contact" className='bouton'>Me contacter</a>
                </div>
                <div>
                    <h1>Étudiant en <br /> développement informatique</h1>
                    <p>Je suis étudiant en 2ème année de développement informatique (Bac+2) à l'EPSI à Nantes option BTS SIO.<br/>
                    Je recherche actuellement une alternance en développement pour mon bachelor informatique DevOps (Bac+3) en septembre 2024</p>
                    <a href="#savoirplus" className='more'>En savoir plus  </a><FontAwesomeIcon icon={faArrowDownLong} style={{ color: '#af0000' }}/>
                </div>
            </div>
        </>
    );
};

export default MainPage;