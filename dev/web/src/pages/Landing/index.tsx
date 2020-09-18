import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import onepunche from '../../assets/images/one-punch.jpg'

import searchIcon from '../../assets/images/icons/search.svg';
import createIcon from '../../assets/images/icons/create.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

import './styles.css';


function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('/heroes/total').then(response => {
            const { total } = response.data;
            
            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Bem-vindo a iHero</h2>
                </div>
                <img 
                    src={onepunche} 
                    alt="Ihero" 
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/heroes" className="heroes">
                        <img src={searchIcon} alt="Pesquisar heroes"/>
                        Pesquisar heroes
                    </Link>
                    <Link to="/be-hero" className="heroes">
                        <img src={createIcon} alt="Seja um hero"/>
                        Seja um hero
                    </Link>
                    <Link to="/ameacas" className="heroes">
                        <img src={searchIcon} alt="Pesquisar ameaças"/>
                        Pesquisar ameaças
                    </Link>
                </div>
                <span className="total-connections">
                    Total de {totalConnections} heros cadastrados <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    
    )
}

export default Landing;