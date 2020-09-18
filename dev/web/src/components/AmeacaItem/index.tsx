import React from 'react';
import './styles.css';

export interface Ameaca {
    id: number;
    nome: string;
    rank: string;
    status: string;
    latitude: string;
    longitude: string;
}

interface AmeacasItemsProps {
    ameaca: Ameaca;
}


const AmeacaItem: React.FC<AmeacasItemsProps> = ({ameaca, ...rest}) => {

    return (
        <article className="ameaca-item">
        <header>
            <div>
                <strong>{ameaca.nome}</strong>
                <span>Rank: {ameaca.rank}</span>
            </div>
        </header>

        <p>Localização:
            Latitude: {ameaca.latitude}, 
            Longitude: {ameaca.longitude} </p>

        <footer>
            <p>
                Status:
                <strong>{ameaca.status}</strong>
            </p>

        </footer>
    </article>
    );
}

export default AmeacaItem;