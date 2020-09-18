import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input/Index';
import Textarea from '../../components/Textarea/Index';
import Select from '../../components/Select/Index';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function HeroForm() {

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [rank, setRank] = useState('');
    const [bio, setBio] = useState('');

    async function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        await api.post('heroes', {
            nome,
            rank,
            locado: false,
            bio,
            senha,
        }).then(() => {
            alert('Cadastro realizado com sucesso.');
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro.')
        });   

        console.log({
            nome,
            senha,
            rank,
            bio
        });

    }

    return (
        <div id="page-hero-form" className="container">
            <PageHeader 
                title="Seja um Hero"
                description="Faça esse breve cadastro e entraremos em contato em breve..."/>

            <main>
                <form onSubmit={handleCreateClass}>
                <fieldset>
                    <legend>iHero</legend>

                    <Input name="nome" label="Hero name" 
                    value={nome} onChange={(e)=> { setNome(e.target.value )}}/>

                    <Input name="senha" label="Senha" type="password"
                    value={senha} onChange={(e)=> { setSenha(e.target.value )}}/>

                    <Select 
                        name="rank" 
                        label="Rank"
                        value={rank}
                        onChange={(e)=> { setRank(e.target.value )}}
                        options={[
                            { value: 'S', label: 'Rank S' },
                            { value: 'A', label: 'Rank A' },
                            { value: 'B', label: 'Rank B' },
                            { value: 'C', label: 'Rank C' }
                        ]}
                    />

                    <Textarea name="bio" label="Biografia"
                    value={bio} onChange={(e)=> { setBio(e.target.value )}}/>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os campos.
                    </p>
                    <button type="submit">
                        Salvar cadastro
                    </button>
                </footer>
            </form>
            </main>
        </div>
    )
}

export default HeroForm;