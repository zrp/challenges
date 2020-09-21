import React, { useState} from 'react';
import apiService from '../../services/apiService';
import { Link } from 'react-router-dom';
// import { login } from '../../services/authService'
import { FaSignInAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
//
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/logo.png';

import {
    Container,
    Section, 
    Logo,
    Logon,
    Title,
    Username,
    Password,
    Enter,
    Register
 } from './styles'; 

toast.configure();
export default function SignIn() {
    document.title = 'SignIn - iHero'
    
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const history = useHistory();

async function authenticate(event){ 
    event.preventDefault();

    try {
        if(!username || !password){
            toast.error('Todos os campos devem ser preenchidos!')
        } 
        const response = await apiService.post('/session', {
            username,
            password
        })
        console.log(response, 'aqui')
        // login(response.data.token)      
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        history.push('/Profile') 

    } catch (error) {
        toast.error('Usuario ou senha estão incorretas!')
    }
}
    return (
        <Container>
            <Section>
                <Logo>
                    <img src={logo}/>
                </Logo>
                <Logon onSubmit={authenticate}>
                    <Title> Faça o seu logon </Title>
                    <Username type='text' placeholder='Username' value={username} onChange={event => setUsername(event.target.value)}/>
                    <Password type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
                    <Enter type='submit'> Entrar </Enter>
                    <Link to ='/SignUp'>
                        <Register> 
                           <FaSignInAlt size={16} color='#E02041'/> Não tenho cadastro
                        </Register>
                    </Link>
                </Logon>  
            </Section>
        </Container>
    )
}