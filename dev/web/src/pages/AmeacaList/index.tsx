import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import AmeacaItem, {Ameaca} from '../../components/AmeacaItem'
import Select from '../../components/Select/Index';
import api from '../../services/api';

import './styles.css';

function AmeacaList() {

    const [ameacas, setAmeacas] = useState([]);

    const [rank, setRank] = useState('');

    async function searchAmeacas(e: FormEvent) {
        e.preventDefault();

        if(rank === "God" || rank === "Dragon" || rank === "Tiger" || rank === "Wolf") {
            const response = await api.get('ameacas', {
                params: {
                    rank,
                }
            });
            setAmeacas(response.data);

        } else {
            const response = await api.get('ameacas');
            setAmeacas(response.data);
        }
    };

    return (
        <div id="page-hero-list" className="container">
            <PageHeader title="Pesquise uma ameça por rank ou faça uma busca geral.">
                <form id="search-heroes" onSubmit={searchAmeacas}>
                    <Select 
                        name="rank_ameaca" 
                        label="Rank Ameaça"
                        value={rank}
                        onChange={(e) => { setRank(e.target.value)}}
                        options={[
                            { value: 'God', label: 'God' },
                            { value: 'Dragon', label: 'Dragon' },
                            { value: 'Tiger', label: 'Tiger' },
                            { value: 'Wolf', label: 'Wolf' }
                        ]}
                    />
                    
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            
            <main>
                {
                ameacas.map((ameaca: Ameaca) => {
                    return <AmeacaItem key={ameaca.id} ameaca={ameaca} />
                })}    
            </main>
        </div>
    )
}

export default AmeacaList;