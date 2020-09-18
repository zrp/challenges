import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import HeroItem, {Hero} from '../../components/HeroItem'
import Select from '../../components/Select/Index';
import api from '../../services/api';

import './styles.css';


function HeroList() {

    const [heroes, setHeroes] = useState([]);

    const [rank, setRank] = useState('');


    async function searchHeroes(e: FormEvent) {
        e.preventDefault();

        if(rank === "S" || rank === "A" || rank === "B" || rank === "C") {
            console.log(rank)
            const response = await api.get('heroes', {
                params: {
                    rank,
                }
            });
            setHeroes(response.data);
        } else {
            const response = await api.get('heroes');
            setHeroes(response.data);
        }
    };

    return (
        <div id="page-hero-list" className="container">
            <PageHeader title="Pesquise um hero por rank ou faça uma busca geral.">
                <form id="search-heroes" onSubmit={searchHeroes}>
                    <Select 
                        name="rank" 
                        label="Rank"
                        value={rank}
                        onChange={(e) => { setRank(e.target.value)}}
                        options={[
                            { value: 'S', label: 'Rank S' },
                            { value: 'A', label: 'Rank A' },
                            { value: 'B', label: 'Rank B' },
                            { value: 'C', label: 'Rank C' }
                        ]}
                    />
                    
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {heroes.map((hero: Hero) => {
                    return <HeroItem key={hero.id} hero={hero} />
                })}    
            </main>
        </div>
    )
}

export default HeroList;