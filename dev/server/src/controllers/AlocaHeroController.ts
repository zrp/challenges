import { Request, Response } from 'express'
import db from '../database/connection';

export default class AlocaHeroController {

    async index(request: Request, response: Response) {
        const { nomeHero, nomeAmeaca } = request.params;

        if(nomeAmeaca) {
            const aloca_hero = await db('aloca_hero').select('*').where( {
                ameaca: nomeAmeaca,
            });
            return response.status(201).json(aloca_hero);
        }

        if(nomeHero) {
            const aloca_hero = await db('aloca_hero').select('*').where( {
                hero: nomeHero,
            });
            return response.status(201).json(aloca_hero);
        }

        const aloca_hero = db('aloca_hero');
        return response.status(201).json(aloca_hero);
    
    }

    async atualizaAmeaca(request: Request, response: Response) {
        const { nomeAmeaca, status } = request.params;

        const trx = await db.transaction();

        try {
            const aloca_hero = await trx('aloca_hero').update({
                status,
            }).where( {
                ameaca: nomeAmeaca,
            });
    
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: "Unexpected error"
            });
        };

    }

} 