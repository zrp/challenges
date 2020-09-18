import { Request, Response } from 'express';
import db from '../database/connection';
import authConfig from './authConfig'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    })
}

export default class HeroesController {
    

    async index(request: Request, response: Response) {
        const {rank} = request.query;

        if (rank) {
            const heroes = await db('heroes').select('*')
            .where({
                rank,
            });

            heroes.map(hero => {
                hero.senha = undefined;
            });

            if (!heroes) {
                return response.status(400).json ({
                    error: 'Não existe o rank pesquisado'
                })
            };
            return response.json(heroes);
        } else {
            const heroes = await db('heroes')

            heroes.map(hero => {
                hero.senha = undefined;
            });

            return response.json(heroes);
        }
        
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            senha,
            rank,
            locado,
            bio
        } = request.body;

        console.log(nome,rank,locado,bio,senha);  

            if (nome && rank && bio && senha) {

                if (locado === true || locado === false) {

                    const hash = bcrypt.hashSync(senha, 8);

                    await db('heroes').insert({
                        nome,
                        senha: hash,
                        rank,
                        locado,
                        bio,
                    });
                    return response.status(201).json({
                        sucesso: 'Hero cadastrado!'
                    })

                } else {
                    return response.status(400).json({
                        error: 'O campo locado precisa ser um valor booleano'
                    })
                }

            } else {
                return response.status(400).json({
                    error: 'Passe todos os campos'})
            }
         }

    async authenticate(request: Request, response: Response) {
        const {nome, senha} = request.params;

        const hero = await db('heroes').select('*')
        .where({
            nome,
        });

        if (!hero) {
            return response.status(200).json({
                message: 'Hero não encontrado'
            })
        }

        if(!await bcrypt.compare(senha, hero[0].senha)) {
            return response.status(200).json({
                message: 'Senha inválida'
            })
        }
        
        return response.status(200).json({
            hero,
            token: generateToken({ id: hero[0].id }),
        })
    }

    async update(request: Request, response: Response) {
        const {
            nome,
            senha,
            rank,
            locado,
            bio,
        } = request.body;

        const {id} = request.params;
    
        const trx = await db.transaction();
    
        try {

            if (nome && rank && bio && senha) {
         
                const hash = bcrypt.hashSync(senha, 8);

                if (locado == true || locado == false) {
                    const updatedHero = await trx('heroes').update({
                        nome,
                        senha: hash,
                        rank,
                        bio,
                        locado
                    }).where( {id} );
                    
                    generateToken({ id });
                    
                    
                    return response.status(201).json({
                        sucesso: 'Usuário atualizado'
                    })
                } else {
                    await trx.commit();
                    return response.status(400).json({
                        error: 'O campo locado precisa ser um valor booleano'
                    })
                }

            } else {
                await trx.commit();
                return response.status(400).json({
                    error: 'É necessário informar valores para todos os campos'
                })
            }
                          

        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: "Unexpected error"
            });
        }
    }

    async destroy(request: Request, response: Response) {
        const {id} = request.params;

        const heroes = await db('heroes').delete('*').where({ id });

        return response.status(200).json({
            message: 'Hero apagado!'
        })
    }

    async atualizaLocacao (request: Request, response: Response) {
        const {nome, locado} = request.params;
        db('heroes').update({
            locado,
        }).where({ nome })
    }

    async totalheroes (request: Request, response: Response) {
        const totalHeroes = await db('heroes').count('* as total');
        const { total } = totalHeroes[0];

        return response.json({ total });
    }

}