import { Request, Response } from 'express'
import db from '../database/connection';


export default class AmeacaController {

    async pesquisaHero(rank: string){
        const heroes = await db('heroes').select('*')
        .where({
            rank,
            locado: false,
        });

        return heroes;
    };

    async show(request: Request, response: Response) {
        const {rank} = request.query;

        if (rank == "God" || rank == "Dragon" || rank == "Tiger" || rank == "Wolf") {
            const ameacas = await db('ameaca').select('*')
            .where({
                rank,
            });

            if (!ameacas) {
                return response.status(400).json ({
                    error: 'Não existe o rank pesquisado'
                })
            };
            return response.status(201).json(ameacas);
        };

        const ameacas = await db('ameaca')

        return response.json(ameacas);

    }

    async create(data: any) {
        const nome = data.monsterName;
        const rank = data.dangerLevel;
        const status = "Não derrotado";
        const longitude = data.location.log;
        const latitude = data.location.lat;

        const trx = await db.transaction();
    
        try {

            if (nome && rank && status && longitude && latitude) {

                    const ameaca = await trx('ameaca').insert({
                        nome,
                        rank,
                        status,
                        longitude,
                        latitude,
                    });  
                     
            };

            let rankHero = '';
            let rankValue = 4;

            switch (rank) {
                case 'God':
                    rankHero = "S";
                    rankValue = 4;
                case 'Dragon':
                    rankHero = "A";
                    rankValue = 3;
                case 'Tiger':
                    rankHero = "B";
                    rankValue = 2;
                case 'Wolf':
                    rankHero = "C";
                    rankValue = 1;
            }

            let heroes: any;
            heroes = this.pesquisaHero(rankHero);

            if (heroes) {
                await trx('aloca_hero').insert({
                    hero: heroes[0].nome,
                    ameaca: nome,
                    status: "Em combate",
                });
            } else {
                if (rankValue == 1) {
                    heroes = this.pesquisaHero("B");
                    await trx('aloca_hero').insert({
                        hero: heroes[0].nome,
                        ameaca: nome,
                        status: "Em combate",
                    });

                } else if (rankValue == 2) {
                    heroes = this.pesquisaHero("A");
                    await trx('aloca_hero').insert({
                        hero: heroes[0].nome,
                        ameaca: nome,
                        status: "Em combate",
                    });

                } else if (rankValue == 3) {
                    heroes = this.pesquisaHero("S");
                    await trx('aloca_hero').insert({
                        hero: heroes[0].nome,
                        ameaca: nome,
                        status: "Em combate",
                    });

                } else if (rankValue <= 4) {
                    heroes = this.pesquisaHero("A");
                    await trx('aloca_hero').insert({
                        hero: heroes[0].nome,
                        ameaca: nome,
                        status: "Em combate",
                    });

                }
            }
            await trx.commit();
        } catch (err) {
            await trx.rollback();
        }

    }

    async updateStatus(request: Request, response: Response) {
        const { nome, status } = request.body;

        await db('ameaca').update({
            status,
        }).where({
            nome,
        })

        return response.status(201).json({
            sucesso: 'Status da ameaça atualizado'
        })
    }

    async destroy(request: Request, response: Response) {
        const {id} = request.params;
        const trx = await db.transaction();
        try {

            await trx('ameaca').delete('*').where({ id });           
            return response.status(200).json({
                message: 'Ameaca apagada!'
            })

        } catch (err) {
            await trx.rollback();
            return response.status(200).json({
                message: 'Erro'
            })
        }

        


    }
} 