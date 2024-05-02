import React from 'react';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import '../../style.css';

import logoTardyGrade from '../../assets/logo-Tardy-Grade.jpg';
import logoDragonium from '../../assets/logoDragonium.png';

const Projets = () => {
    return (
        <>
            <div className='spacer' id='projets' style={{ top: '180vh'}}></div> {/* Espace invisible */}
            <div className='projets'>
                <h1>Mes projets</h1>
                <div className='liste_projets'>
                    {/* TardyGrade */}
                    <a href="/BTS#project1" className='projet'>
                        <h3>TardyGrade</h3>
                        <Image src={logoTardyGrade} alt="Logo" width={150} height={150} style={{ borderRadius: '50%' }} />
                        <p>Janvier-Juin 2024</p>
                    </a>

                    {/* DCH-IT */}
                    <a href="/BTS#project2" className='projet'>
                        <h3>DCH-IT</h3>
                        <FontAwesomeIcon icon={faMap} style={{color: "#ffffff", fontSize: "7em", marginBottom: "30px"}} />
                        <p>Janvier-Février 2024</p>
                    </a>

                    {/* Dragonium */}
                    <a href="/BTS#project3" className='projet'>
                        <h3>Dragonium</h3>
                        <Image src={logoDragonium} alt="Logo" width={150} height={150} />
                        <p>Mai-Juin 2023</p>
                    </a>
                </div>
            </div>  
        </>
    );
};

export default Projets;
