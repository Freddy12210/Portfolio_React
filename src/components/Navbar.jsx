import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import LogoLinkedIn from '../assets/logoLinkedIn.png';
import ScrollProgress from './ScrollProgress'; // Importer le composant ScrollProgress
import { useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();

    useEffect(() => {
        // Si nous sommes sur la page /, vérifiez si un ancrage est présent dans l'URL et défilez jusqu'à cet ancrage
        if (location.pathname === '/') {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Si aucun ancrage n'est spécifié, défilez jusqu'en haut de la page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [location.pathname]);

    return (
        <>
            <Navbar className="fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand href="/">MF<span className="point"></span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/#savoirplus">CV</Nav.Link>
                            <Nav.Link>|</Nav.Link>
                            <Nav.Link href="/#projets">Projets</Nav.Link>
                            <Nav.Link>|</Nav.Link>
                            <Nav.Link href="/BTS">BTS</Nav.Link> {/* Gérer le clic sur le lien BTS */}
                            <Nav.Link>|</Nav.Link>
                            <Nav.Link href="/#contact">Contact</Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/freddy-morilleau/" className="linkedin-link">
                                <Image src={LogoLinkedIn} alt="Logo" width={30} height={30} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ScrollProgress />
        </>
    );
}

export default Menu;
