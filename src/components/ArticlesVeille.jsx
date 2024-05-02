import React from 'react';
import '../style.css';
import Image from 'react-bootstrap/esm/Image';
import article1 from '../assets/metahuman.avif';
import article2 from '../assets/article-UE-5.3.webp';
import article3 from '../assets/5.4.png';

const Articles = () => {
    return (
        <div className='Articles' id='home'>
            <h1 className="section-title">Articles</h1>
            <div className='Articles-content'>
                <div className='article-container'>
                    <div className='article'>
                        <div className="article-image">
                            <Image src={article3} alt="UE 5.4" fluid />
                        </div>
                        <div className="article-details">
                            <h2 className="article-title">Unreal Engine 5.4 : Nouvelles fonctionnalités et optimisations</h2>
                            <p className="article-description">
                                L'Unreal Engine 5.4 propose de nouvelles fonctionnalités et optimisations, notamment dans les domaines de l'animation, du rendu, de l'IA et de la productivité.
                                Les mises à jour incluent un système de squelettage et d'animation amélioré, des outils de rendu avancés comme Nanite et TSR,
                                ainsi que des améliorations de performances et de flux de travail.
                            </p>
                        </div>
                        <a href="https://www.unrealengine.com/fr/blog/unreal-engine-5-4-is-now-available" className='article-link bouton'>En savoir plus</a>
                    </div>
                    <div className='article'>
                        <div className="article-image">
                            <Image src={article1} alt="Metahuman" fluid />
                        </div>
                        <div className="article-details">
                            <h2 className="article-title">Révolution dans Fortnite : MetaHuman et Marvelous Designer s'intègrent à l'UEFN</h2>
                            <p className="article-description">
                                L'intégration de MetaHuman et de Marvelous Designer dans l'UEFN révolutionne la création de contenu dans Fortnite.
                                Cette avancée permet aux créateurs de donner vie à des personnages humains en haute fidélité
                                et d'explorer de nouvelles possibilités de vêtements dynamiques personnalisés avec Unreal Engine 5.4.
                            </p>
                        </div>
                        <a href="https://www.unrealengine.com/fr/blog/unreal-engine-5-3-brings-new-potential-for-media-and-entertainment-projects" className='article-link bouton'>En savoir plus</a>
                    </div>
                    <div className='article'>
                        <div className="article-image">
                            <Image src={article2} alt="Unreal Engine 5.3" fluid />
                        </div>
                        <div className="article-details">
                            <h2 className="article-title">Nouvelles perspectives pour les médias et le divertissement</h2>
                            <p className="article-description">
                                Unreal Engine 5.3 redéfinit les normes de l'industrie du divertissement avec sa prise en charge expérimentale du standard SMPTE ST 2110,
                                son système de caméra virtuelle amélioré, le nouveau rail pour caméra ciné, et l'introduction de la génération procédurale de contenu (PCG).
                                Ces avancées ouvrent de nouvelles voies créatives pour les professionnels du secteur.
                            </p>
                        </div>
                        <a href="https://www.unrealengine.com/fr/blog/unreal-engine-5-3-brings-new-potential-for-media-and-entertainment-projects" className='article-link bouton'>En savoir plus</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;
