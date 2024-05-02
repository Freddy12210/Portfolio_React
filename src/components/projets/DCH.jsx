import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import '../../style.css';
import Download from '../Download';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import html5 from '../../assets/html5.svg';
import javascript from '../../assets/js-square.svg';
import symfony from '../../assets/symfony.svg';
import RapportStageDCH from '../../assets/docBTS/2024-MORILLEAU-Freddy-Rapport de stage.pdf';

const DCH = () => {
    return (
        <>
            <div className='DCH'>
                <div className="content">
                    <p>
                        Dans le cadre de ma seconde année d’étude en développement
                        informatique à l’EPSI à Nantes, j’ai eu l’occasion de réaliser un stage au sein
                        de l’entreprise DCH-IT d’une durée de 7 semaines du 11 janvier 2024 au 23
                        février 2024 en tant que développeur informatique.
                        Cette mission a été confiée par l’entreprise C&D Compétences et
                        Développement qui est un réseau d’écoles et de centres de formation.
                        Cette entreprise a confié à l’entreprise DCH-IT pour laquelle j’effectue ce
                        stage la mission de réaliser un plan interactif du bâtiment du Campus de
                        Nantes hébergeant différentes écoles parmi lesquelles se trouve l’EPSI.
                        Le but de ce stage a donc exclusivement été le développement du site
                        web contenant le plan interactif du bâtiment et donc le développement du
                        plan interactif en lui-même.
                    </p>
                    <Download doc={RapportStageDCH} message="Télécharger le rapport de stage" />
                </div>
                <div className='content'>
                    <h1>Stage DCH</h1>
                    <FontAwesomeIcon icon={faMap} style={{color: "#ffffff", fontSize: "7em", marginBottom: "30px"}} />
                    <hr />
                    <div style={{margin:"0", padding:"10px"}}>
                        <ImageWithTooltip src={symfony} alt="Symfony" tooltipText="Symfony" />
                        <ImageWithTooltip src={html5} alt="HTML5" tooltipText="HTML5" />
                        <ImageWithTooltip src={javascript} alt="JavaScript" tooltipText="JavaScript" />
                    </div>
                    <hr />
                    <p>Janvier 2024 - Février 2024</p>
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


export default DCH;
