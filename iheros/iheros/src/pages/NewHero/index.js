import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiService from '../../services/apiService';

import {
    Container,
    Section,
    Logo,
    Title,
    Details,
    Return,
    Register,
    Username,
    ClasseHero,
    Location,
    Latitude,
    Longitude,
    ButtonRegister
 } 
from './styles'
import logo from '../../assets/logo.png'


toast.configure();
export default function NewHero() {
    document.title = 'NewHero - iHeros'

    const idUser = localStorage.getItem('id');

    const [hero, setHero] = useState('');
    const [classHero, setClassHero] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const history = useHistory();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setLatitude(latitude);
                    setLongitude(longitude);
                },
                (err) => {
                    console.log(err);
                }, {
                timeout: 30000,
            }
        )
    }, [])

    async function newHero(event) {
        event.preventDefault();

        const data = {
            hero,
            classHero,
            latitude,
            longitude,
        }

        try {
             await apiService.post('/heros', data, {
                headers: {
                    Authorization: idUser,
                }
            });
            toast.success('Herói cadastrado com sucesso!')
            history.push('/profile');
        } catch (error) {
            toast.error('Ops! Alguma coisa deu errado, tente realizar novamente!')
        }
    }

    return (
        <Container>
            <Section>
                <Logo>
                    <img src={logo} alt='iHero'/>
                </Logo>
                <Title>Cadastro</Title>
                <Details>Cadastre seu iHero e nos ajude a combater ameaças.</Details>
                <Link to='/profile'>
                    <Return>
                            <FaArrowLeft size={16} color='#E02041'/> Voltar para o logon
                    </Return>
                </Link>
            </Section>

            <Register onSubmit={newHero}>
                <Username placeholder='Hero' type='text' value={hero} onChange={event => setHero(event.target.value)}></Username>
                <ClasseHero placeholder='Classe do Herói' type='text' value={classHero} onChange={event => setClassHero(event.target.value)}></ClasseHero>
                <Location>
                    <Latitude placeholder='latitude' value={latitude} onChange={event => setLatitude(event.target.value)}></Latitude>
                    <Longitude placeholder='longitude' value={longitude} onChange={event => setLongitude(event.target.value)}></Longitude>
                </Location>
                <ButtonRegister type='submit'> Cadastrar </ButtonRegister>
            </Register>
        </Container>
    )
}