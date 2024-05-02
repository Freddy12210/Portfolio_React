import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const updateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollDistance = documentHeight - windowHeight;
    const percentage = (scrollTop / scrollDistance) * 100;
    setScrollPercentage(percentage);

    // Check if user has scrolled down, if so, fix the progress bar to the top
    setIsFixed(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercentage);
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  const progressStyle = {
    width: `${scrollPercentage}%`,
    height: '5px',
    backgroundColor: '#af0000',
  };

  const progressContainerStyle = {
    position: isFixed ? 'fixed' : 'static',
    top: '100px', // hauteur de la barre de navigation
    left: '0',
    width: '100%',
    minHeight: '0px', // hauteur minimale pour la barre de progression
    zIndex: '999', // Assurez-vous que la barre de progression est en dessous de la barre de navigation
};


  return (
    <div className="progress-container" style={progressContainerStyle}>
      <div className="progress" style={{ height: '5px', backgroundColor: '#2e2f34' }}>
        <div className="progress-bar" style={progressStyle}></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
