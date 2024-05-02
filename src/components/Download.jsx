import React from 'react';

const Download = ({ doc, message }) => {
    const handleDownload = () => {
        window.open(doc); // Ouvre le fichier dans une nouvelle fenêtre/tab
    };

    return (
        <button className='bouton' onClick={handleDownload}>{message}</button>
    );
};

export default Download;
