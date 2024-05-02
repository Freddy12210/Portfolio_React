import React from 'react';
import Image from 'react-bootstrap/Image';
import Download from '../Download';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import RapportStageDragonium from '../../assets/docBTS/2023-MORILLEAU-Freddy-Rapport de stage.pdf';
import logoDragonium from '../../assets/logoDragonium.png';
import html5 from '../../assets/html5.svg';
import php from '../../assets/php.svg';
import javascript from '../../assets/js-square.svg';

import '../../style.css';

const Dragonium = () => {
    return (
        <>
            <div className='Dragonium'>
                <div className="content">
                    <p>
                        Dans le cadre de ma 1
                        ère année d’études en informatique à l’EPSI à Nantes,
                        j’ai eu l’occasion de réaliser un stage au sein de l’association Zyzomis d’une
                        durée de 7 semaines du 8 mai 2023 au 23 juin 2023 en tant que
                        développeur web PHP/MySQL
                        Le but de ce stage a principalement été le développement, la mise à jour
                        et la correction du jeu Dragonium, un jeu de rôle et
                        de stratégie médiéval fantastique par navigateur
                    </p>
                    <Download doc={RapportStageDragonium} message="Télécharger le rapport de stage" />
                </div>
                <div className='content'>
                    <h1>Stage Dragonium</h1>
                    <Image src={logoDragonium} alt="Logo" width={150} height={150} />
                    <hr />
                    <div style={{margin:"0", padding:"10px"}}>
                        <ImageWithTooltip src={php} alt="PHP" tooltipText="PHP" />
                        <ImageWithTooltip src={html5} alt="HTML5" tooltipText="HTML5" />
                        <ImageWithTooltip src={javascript} alt="JavaScript" tooltipText="JavaScript" />
                    </div>
                    <hr />
                    <p>Mai 2023 - Juin 2023</p>
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

export default Dragonium;
