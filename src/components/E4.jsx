import React from 'react';
import Download from './Download';
import RapportStageDragonium from '../assets/docBTS/2023-MORILLEAU-Freddy-Rapport de stage.pdf';
import RapportStageDCH from '../assets/docBTS/2024-MORILLEAU-Freddy-Rapport de stage.pdf';
import AttestationStageDragonium from '../assets/docBTS/2023-MORILLEAU-Freddy-Attestation de stage.pdf';
import AttestationStageDCH from '../assets/docBTS/2024-MORILLEAU-Freddy-Attestation de stage.pdf.pdf';
import PortefeuilleCompetences from '../assets/docBTS/2024-Morilleau-Freddy-Portefeuille.pdf';

import '../style.css';

const E4 = () => {
    return (
        <>
            <div className='E4' id='E4'>
                <div className="E4-content">
                    <div>
                        <h1>Dossier E4</h1><br />
                        <hr />
                    </div>
                    <div className='E4-elements'>
                        <div className='E4-element'>
                            <h2>Rapports de stage</h2>
                            <hr />
                            <Download doc={RapportStageDragonium} message="Télécharger le rapport de stage 2023" />
                            <Download doc={RapportStageDCH} message="Télécharger le rapport de stage 2024" />
                        </div>
                        <div className='E4-element'>
                            <h2>Portefeuille de compétences</h2>
                            <hr />
                            <Download doc={PortefeuilleCompetences} message="Télécharger le portefeuille de compétences" />
                        </div>
                        <div className='E4-element'>
                            <h2>Attestations de stage</h2>
                            <hr />
                            <Download doc={AttestationStageDragonium} message="Télécharger l'attestation de stage 2023" />
                            <Download doc={AttestationStageDCH} message="Télécharger l'attestation de stage 2024" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default E4;
