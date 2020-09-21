const connection = require('../database/connection');


module.exports = {

    async index (request, response ) {
        
        const user_id = request.headers.authorization;

        const heros = await connection('heros')
        .where('user_id', user_id)
        .select('*');

        return response.json(heros);
    }
}