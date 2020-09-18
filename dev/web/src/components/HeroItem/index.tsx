import React from 'react';
import './styles.css';

export interface Hero {
    id: number;
    nome: string;
    rank: string;
    locado: boolean;
    bio: number;
}

interface HeroItemProps {
    hero: Hero;
}

const HeroItem: React.FC<HeroItemProps> = ({hero}) => {

    let status = "";
    if(hero.locado) {
        status = "Em combate";
    } else {
        status="Disponível para batalha"
    };

    return (
        <article className="hero-item">
        <header>
            <div>
                <strong>{hero.nome}</strong>
                <span>Rank: {hero.rank}</span>
            </div>
        </header>

        <p>{hero.bio}</p>

        <footer>
            <p>
                Status:
                <strong>{status}</strong>
            </p>
        </footer>
    </article>
    );
}

export default HeroItem;