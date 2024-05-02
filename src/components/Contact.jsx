import React from 'react';
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <>
            <div className='spacer' id='contact' style={{ top: '270vh' }}></div> {/* Espace invisible */}
            <div className='contact' id='contact'>
                <div className='contacts'>
                    <div><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />freddy.morilleau44@gmail.com</div>
                    <div style={{marginLeft: 150}}><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />06 99 93 16 23</div>
                    <a href="https://www.linkedin.com/in/freddy-morilleau/" style={{ textDecoration: 'none'}}>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}}/>
                            Freddy Morilleau
                        </div>
                    </a>                
                </div>
                <div>
                    <form>
                        <p>Non-fonctionnel</p>
                        <div>
                            <input type="text" id="name" name="name" placeholder='Nom'/>
                        </div>
                        <div>
                            <input type="text" id="firstName" name="firstName" placeholder='Prénom'/>
                        </div>
                        <div>
                            <input type="text" id="entreprise" name="entreprise" placeholder='Entreprise'/>
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder='Email'/>
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder='Message'></textarea>
                        </div>
                        <button type="submit" className='bouton' style={{ width: '100px' }}>Envoyer</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;