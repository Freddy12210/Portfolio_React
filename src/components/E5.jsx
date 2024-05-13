import React from 'react';
import Download from './Download';
import RapportE5 from '../assets/docBTS/2024-MORILLEAU-Freddy-Rapport E5.pdf';
import RapportConformité1 from '../assets/docBTS/2024-MORILLEAU-Freddy-SLAM-1.pdf';
import RapportConformité2 from '../assets/docBTS/2024-MORILLEAU-Freddy-SLAM-2.pdf';

import '../style.css';

const E5 = () => {
    return (
        <>
            <div className='E5' id='E5'>
                <div className="E5-content">
                    <div>
                        <h1>Dossier E5</h1><br />
                        <hr />
                    </div>
                    <div className='E5-elements'>
                        <div className='E5-element'>
                            <h2>Rapports E5</h2>
                            <hr />
                            <Download doc={RapportE5} message="Télécharger le rapport E5" />
                        </div>
                        <div className='E5-element'>
                            <h2>Contrôles de comformité</h2>
                            <hr />
                            <Download doc={RapportConformité1} message="Télécharger le rapport de conformité 1" />
                            <Download doc={RapportConformité2} message="Télécharger le rapport de conformité 2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default E5;
