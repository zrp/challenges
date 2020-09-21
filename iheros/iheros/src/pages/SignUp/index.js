import React, { useState } from 'react';
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
    Password,
    Location,
    City,
    Country,
    ButtonRegister
 } 
from './styles'
import logo from '../../assets/logo.png'


toast.configure();
export default function SignUp() {
    document.title = 'SignUp - iHeros'

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const history = useHistory();

    async function register(event) {
        event.preventDefault();
        try {
            const response = await apiService.post('/register', {
                username,
                password,
                city,
                country
            });
            console.log(response, 'cadastro');
            toast.success('Foi cadastrado com sucesso!')
            history.push('/');
        } catch (error) {
            toast.error('Ops! Alguma coisa deu errado, tente realizar novamente!')
        }
        setUsername('');
        setPassword('');
        setCity('');
        setCountry('');
    }

    return (
        <Container>
            <Section>
                <Logo>
                    <img src={logo} alt='iHero'/>
                </Logo>
                <Title>Cadastro</Title>
                <Details>Faça o seu cadastro e seja um iHero e nos ajude a combater ameaças.</Details>
                <Link to='/'>
                    <Return>
                            <FaArrowLeft size={16} color='#E02041'/> Voltar para o logon
                    </Return>
                </Link>
            </Section>

            <Register onSubmit={register}>
                <Username placeholder='Nome do seu username' type='text' value={username} onChange={event => setUsername(event.target.value)}></Username>
                <Password placeholder='Password' type='password' value={password} onChange={event => setPassword(event.target.value)}></Password>
                <Location>
                    <City placeholder='Cidade' value={city} onChange={event => setCity(event.target.value)}></City>
                    <Country placeholder='País' value={country} onChange={event => setCountry(event.target.value)}></Country>
                </Location>
                <ButtonRegister type='submit'> Cadastrar </ButtonRegister>
            </Register>
        </Container>
    )
}