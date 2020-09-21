const express = require('express');
const SessionController = require('./controllers/SessionController');
const RegisterController = require('./controllers/RegisterController');
const NewHerosController = require('./controllers/NewHerosController');
const HeroProfileController = require('./controllers/HeroProfileController');

const routes = express.Router();

//login
routes.post('/session', SessionController.create);

//register new user
routes.get('/register', RegisterController.index);
routes.post('/register', RegisterController.create);

//get heros by profile
routes.get('/profile', HeroProfileController.index);

//new hero
routes.get('/heros', NewHerosController.index);
routes.post('/heros', NewHerosController.create);
routes.delete('/heros/:id', NewHerosController.delete);


module.exports = routes;