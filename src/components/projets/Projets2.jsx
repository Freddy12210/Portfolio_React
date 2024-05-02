import React, { useState, useEffect } from 'react';
import TardyGrade from './TardyGrade'; // Importez vos composants de projet
import DCH from './DCH'; // Importez vos composants de projet
import Dragonium from './Dragonium';
import '../../style.css'; // Assurez-vous d'avoir un fichier de style pour les styles CSS

const ProjectSelector = ({ onSelect, selectedProject }) => {
    const handleSelect = (project) => {
        onSelect(project); // Appeler la fonction onSelect avec le nom du projet sélectionné
    };

    return (
        <>
            <div className="project-selector">
                <button className={selectedProject === 'project1' ? 'selected' : ''} onClick={() => handleSelect('project1')}>
                    TardyGrade
                </button>
                <button className={selectedProject === 'project2' ? 'selected' : ''} onClick={() => handleSelect('project2')}>
                    DCH-IT
                </button>
                <button className={selectedProject === 'project3' ? 'selected' : ''} onClick={() => handleSelect('project3')}>
                    Dragonium
                </button>
            </div>
        </>
    );
};

const ProjectSection = () => {
    const [selectedProject, setSelectedProject] = useState('project1'); // Initialisez l'état avec 'project1'

    useEffect(() => {
        const hash = window.location.hash.substr(1);
        if (hash === 'project1' || hash === 'project2' || hash === 'project3') {
            setSelectedProject(hash);
        } else {
            window.location.href = '/BTS#BTS'; // Rediriger vers la page /BTS
        }
        const projectSection = document.getElementById('project-section');
        if (projectSection) {
            projectSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    // Fonction pour afficher le composant de projet sélectionné
    const renderSelectedProject = () => {
        switch (selectedProject) {
            case 'project1':
                return <TardyGrade />;
            case 'project2':
                return <DCH />;
            case 'project3':
                return <Dragonium />;
            default:
                return null;
        }
    };

    // Fonction pour mettre à jour le projet sélectionné
    const handleProjectSelect = (project) => {
        setSelectedProject(project);
        window.location.hash = project; // Mettre à jour l'ancrage de l'URL
    };

    return (
        <>
            {/* Point d'ancrage 180vh plus haut */}
            <div className="spacer" id="project-section" style={{ top: '90vh' }}></div>
            <div className="project-section">
                {/* Menu de sélection de projet */}
                <ProjectSelector onSelect={handleProjectSelect} selectedProject={selectedProject} />
                {/* Affichage du projet sélectionné */}
                <div className="project-content">
                    {renderSelectedProject()}
                </div>
            </div>
        </>
    );
};

export default ProjectSection;
