import React from 'react';
import '../style.css';
import Image from 'react-bootstrap/esm/Image';
import UE from '../assets/UE.svg';


const VeilleTechno = () => {
    return (
        <>
            <div className='VeilleTechno' id='home'>
                <h1>Veille technologique</h1>
                <div className='VeilleTechno-content'>
                    <div className='content'>
                        <div style={{ margin:"0", width:"90%"}}>
                            <h2>Les outils de ma veille</h2>
                            <p style={{fontSize:"2vh"}}>Pour effectuer ma veille technologique, j'utilise Google Alerts afin de recevoir des notifications par e-mail
                                sur les dernières actualités, articles, publications et discussions en ligne concernant le sujet de ma veille.
                                Cela me permet de rester informé en temps réel et de découvrir rapidement les nouvelles informations pertinentes sur le sujet.</p>
                        </div>
                        <hr />
                        <div style={{ margin:"0"}}>
                            <h2>Thème : <span style={{color:"#af0000"}}>Unreal Engine 5</span></h2>
                            <hr />
                            <Image src={UE} alt="Unreal Engine 5" style={{width:"40%"}} />
                        </div>
                    </div>
                    <div className='content'>
                        <h1>C'est quoi <span style={{color:"#af0000"}}>Unreal Engine 5</span> ?</h1>
                        <p style={{fontSize:"2vh"}}>
                            Unreal Engine est un moteur de jeu développé par Epic Games, une société de l'industrie du jeu vidéo.
                            Il est largement utilisé par les développeurs de jeux vidéo, les professionnels de l'animation, les architectes, les concepteurs automobiles
                            et d'autres professionnels pour créer des expériences interactives en temps réel, telles que des jeux vidéo, des simulations et des visualisations.
                            <br />
                            Unreal Engine 5 est la dernière version majeure du moteur de jeu Unreal Engine annoncée en mai 2020 et publiée en accès anticipé en mai 2021,
                            UE5 représente une avancée significative dans la technologie de développement de jeux et d'applications interactives.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VeilleTechno;