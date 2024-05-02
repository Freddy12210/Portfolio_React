import React from 'react';
import Image from 'react-bootstrap/Image';
import logoTardyGrade from '../../assets/logo-Tardy-Grade.jpg';
import '../../style.css';
import Download from '../Download';
import CahierCharges from '../../assets/Cahier des charges.pdf';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import html5 from '../../assets/html5.svg';
import csharp from '../../assets/csharp.svg';
import symfony from '../../assets/symfony.svg';

const TardyGrade = () => {
    return (
        <>
            <div className='TardyGrade'>
            <div className="content">
                    <p>
                        L’application Tardy-Grade est un projet qui vise à créer un réseau social de partage de raisons de
                        retard entre les utilisateurs. Que ce soit pour un retard à l’école ou à un rendez-vous, les
                        utilisateurs peuvent partager des excuses originales, drôles ou surprenantes, en fonction de leur
                        situation et de leur humeur.
                    </p>
                    <Download doc={CahierCharges} message='Télécharger le cahier des charges' />
                </div>
                <div className='content'>
                    <h1>Projet TardyGrade</h1>
                    <Image src={logoTardyGrade} alt='Logo' width={150} height={150} style={{ borderRadius: '50%' }} />
                    <hr />
                    <div style={{margin:"0", padding:"10px"}}>
                        <ImageWithTooltip src={symfony} alt="Symfony" tooltipText="Symfony" />
                        <ImageWithTooltip src={csharp} alt="C#" tooltipText="C#" />
                        <ImageWithTooltip src={html5} alt="HTML5" tooltipText="HTML5" />
                    </div>
                    <hr />
                    <p>Décembre 2023 - Juin 2024</p>
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

export default TardyGrade;
