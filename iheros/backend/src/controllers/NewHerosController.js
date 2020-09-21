const { count } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {


    async index (request, response) {
        const { page = 1 } = request.query;
        
        const [count] = await connection('heros').count();

        console.log(count);

        const users = await connection('heros')
        .join('users', 'users.id', '=' , 'heros.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'heros.*',
            'users.username',
            'users.city',
            'users.country'
        ]);


        response.header('X-Total-Count', count['count(*)']);
        return response.json(users);
    },

    async create (request, response) {
        const { hero, classHero, latitude, longitude} = request.body;
        const user_id = request.headers.authorization;


        const [id] = await connection('heros').insert({
            hero,
            classHero,
            latitude,
            longitude,
            user_id
        });
        console.log();
        return response.json({id});
    },

    async delete (request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;
 
        const hero = await connection('heros')
        .where('id', id)
        .select('user_id')
        .first();

        if(hero.user_id !== user_id) {
            return response.status(401).json({error: 'Não autorizado'})
        }
        await connection('heros').where('id', id).delete();

        return response.status(204).send();
    }
    
}