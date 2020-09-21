const connection = require('../database/connection');
// const bcrypt = require('bcryptjs');


module.exports = {

    // get
    async index (request, response ) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    //post
    async create (request, response){
        const { username, password, city, country } = request.body;
        await connection('users').insert({
            username,
            // password:await hashPassword(password),
            password,
            city,
            country
        })
        console.log();
        return response.json({ username, password });
    
    }
}

// const hashPassword = async (plaintextPassword) => {
//     const saltRounds = 10;
//     const salt = await bcrypt.genSalt(saltRounds);
//     return await bcrypt.hash(plaintextPassword, salt);
// }
