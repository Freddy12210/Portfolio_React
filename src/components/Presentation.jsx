import React from 'react';
import '../style.css';
import Download from './Download';
import CV from '../assets/docBTS/CV.pdf';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import python from '../assets/python.svg';
import html5 from '../assets/html5.svg';
import javascript from '../assets/js-square.svg';
import symfony from '../assets/symfony.svg';
import php from '../assets/php.svg';
import react from '../assets/react.svg';
import vuejs from '../assets/vue-js.svg';
import cplusplus from '../assets/cplusplus.svg';
import csharp from '../assets/csharp.svg';
import sqlserver from '../assets/sqlserver.svg';
import git from '../assets/git.svg';
import mysql from '../assets/mysql.svg';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css-3.svg';

const Presentation = () => {
    return (
        <>
        <div className='spacer' id='savoirplus' style={{ top: '90vh' }}></div>
        <div className='presentation'>
            <div className="content">
                <h1>Qui suis-je ?</h1>
                <p style={{fontSize:"3vh", margin:"50px 0"}}>
                    J'ai 19 ans et je suis passionné par l'informatique depuis jeune.
                    <br />
                    Je suis actuellement en 2ème année
                    (Bac+2) à l'EPSI à Nantes et je suis à la recherche d'une alternance
                    en développement informatique pour mon bachelor informatique DevOps (Bac+3) en septembre 2024.
                    <br />
                    Au cours de ces 2 années d'études en développement, j'ai découvert et appris
                    de nombreux langages de programmation et j'ai eu l'occasion de travailler sur différents projets.
                </p>
                <Download doc={CV} message="Télécharger mon CV" />
            </div>
            <div className='content'>
                <div className="icons-column">
                    <div className="icons-container">
                        <ImageWithTooltip src={cplusplus} alt="C++" tooltipText="C++" />
                        <ImageWithTooltip src={csharp} alt="C#" tooltipText="C#" />
                    </div>
                    <div className="icons-container">
                        <ImageWithTooltip src={symfony} alt="Symfony" tooltipText="Symfony" />
                        <ImageWithTooltip src={python} alt="Python" tooltipText="Python" />
                        <ImageWithTooltip src={php} alt="PHP" tooltipText="PHP" />
                        <ImageWithTooltip src={git} alt="Git" tooltipText="Git" />
                    </div>
                    <div className="icons-container">
                        <ImageWithTooltip src={mysql} alt="MySQL" tooltipText="MySQL" />
                        <h1 className="skills-title">Compétences</h1>
                        <ImageWithTooltip src={sqlserver} alt="SQL Server" tooltipText="SQL Server" />
                    </div>
                    <div className="icons-container">
                        <ImageWithTooltip src={html5} alt="HTML5" tooltipText="HTML5" />
                        <ImageWithTooltip src={css} alt="CSS" tooltipText="CSS" />
                        <ImageWithTooltip src={javascript} alt="JavaScript" tooltipText="JavaScript" />
                        <ImageWithTooltip src={bootstrap} alt="Bootstrap" tooltipText="Bootstrap" />
                    </div>
                    <div className="icons-container">
                        <ImageWithTooltip src={react} alt="React" tooltipText="React" />
                        <ImageWithTooltip src={vuejs} alt="Vue.js" tooltipText="Vue.js" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

const ImageWithTooltip = ({ src, alt, tooltipText }) => (
    <OverlayTrigger
        key={tooltipText}
        placement="bottom"
        overlay={<Tooltip id={`tooltip-${tooltipText}`}>{tooltipText}</Tooltip>}
    >
        <Image src={src} alt={alt} className='icon' />
    </OverlayTrigger>
);

export default Presentation;
