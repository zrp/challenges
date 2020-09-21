const connection = require("../database/connection");

module.exports = {

    async create (request, response) {
        const { username, password } = request.body;

        const user = await connection('users')
            .where('username', username)
            .where('password', password)
            .select('id', 'username')
            .first();

            if(!user){
                return response.status(400).json({ error: 'Nenhum cadastro encontrado com esse username' })
            }
            return response.json(user);
    }
}