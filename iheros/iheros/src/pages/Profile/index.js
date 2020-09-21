import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2, FiAlertTriangle, FiEdit } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import apiService from '../../services/apiService';

//alerts
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { 
    Container,
    Header,
    Welcome,
    Register,
    Exit,
    Main,
    Title,
    Ul,
    Li,
    Description,
    Alert,
    Strong,
    Details,
    Icons
} from './styles';

//socket io
import io from 'socket.io-client';

const socket = io('https://zrp-challenge-socket.herokuapp.com');
socket.on('connect', () => console.log('[IO] Connect => New connection'));
socket.emit('occurrence');


toast.configure();
export default function Profile() {
    document.title ='Profile - iHeros'

    const [heros, setHeros] = useState([]);
    const [occurrence, setOccurrence] = useState([]);

    const history = useHistory();

    const username = localStorage.getItem('username');
    const idUser = localStorage.getItem('id');


    useEffect(() => {
        const handleOccurrence = newOccurrence => 
            setOccurrence([...occurrence, newOccurrence]);
            socket.on('occurrence', handleOccurrence);
            return () => socket.off('occurrence', handleOccurrence);
        }, []);
        
    useEffect(() => {
        apiService.get('/profile', {
            headers: {
                Authorization: idUser,
            }
        }).then(response => {
            setHeros(response.data);
        })
    }, [idUser]);


    function logout() {
        localStorage.clear();
        history.push('/')
    }

    async function deleteHero(id) {
        try {
          await apiService.delete(`/heros/${id}`, {
              headers: {
                  Authorization: idUser
              }
          }) ;

          setHeros(heros.filter((item ) => item.id !== id));

        } catch (error) {
            toast.error('Erro ao deletar hero!')
        }
    }


    return (
        <Container>
            <Header>
                    <img src={logo} height='150px'/>
                <Welcome>
                    iHero {username}
                </Welcome>
                <Link to='/NewHero'>
                    <Register> Cadastrar um novo herói </Register>
                </Link>
                <Exit onClick={logout}>
                    <FiPower size={18} color='#fff'/>
                </Exit>
            </Header>

            <Main>
                <Title> { heros == '' ? 'Sem herói cadastrado' : 'Heróis cadastrados' } </Title>
                <Ul>
                {heros.map((item) => (
                    <Li key={item.id}>
                        <Description>
                            <Icons>
                                <FiEdit size={20} color='#000'/>
                            </Icons>
                            
                            <Icons onClick={() => deleteHero(item.id)}>
                                <FiTrash2 size={20} color='#000'/>
                            </Icons>
                            <Alert> <FiAlertTriangle size={20} color='red'/> Novo Herói </Alert>
                            <Strong> iHero </Strong>
                            <Details> {item.hero} </Details>
                            <Strong> Rank </Strong>
                            <Details> {item.classHero} </Details>
                            <Strong> Localização </Strong>
                            <Details> Latitude: {item.latitude} / Longitude: {item.longitude} </Details>
                        </Description>
                    </Li>
                    ))}
                </Ul>
            </Main>

            <Main>
                <Title> { occurrence == '' ? 'Sem ameaças detectadas' : 'Ameaças detectadas' } </Title>
                <Ul>
                {occurrence.map((item) => (
                    <Li key={item.dangerLevel}>
                        <Description>
                            <Alert> <FiAlertTriangle size={20} color='red'/> Nova Ameaça detectada!! </Alert>
                            <Strong> Monstro </Strong>
                            <Details> {item.monsterName} </Details>
                            <Strong> Nível Ameaça </Strong>
                            <Details> {item.dangerLevel } </Details>

                            <Strong> Rank do Herói </Strong>
                            <Details> 
                                {item.dangerLevel === 'God' ? 'Classe S' : '' } 
                                {item.dangerLevel === 'Dragon' ? 'Classe A' : '' } 
                                {item.dangerLevel === 'Tiger' ? 'Classe B' : '' } 
                                {item.dangerLevel === 'Wolf' ? 'Classe C' : '' } 
                            </Details>
                            <Strong> Localização </Strong>
                            <Details> Latitude: {item.location[0].lat} / Longitude: {item.location[0].lng} </Details>
                        </Description>
                    </Li>
                    ))}
                </Ul>
            </Main>
        </Container>
    )
}