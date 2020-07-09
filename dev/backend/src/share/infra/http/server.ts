import 'dotenv';

import express from 'express';
import io from 'socket.io-client';
import 'reflect-metadata';

import Queue from '../../../modules/Threats/infra/queues/ThreatRequistrationQueue';

import 'express-async-errors';
import routes from './routes';

import '../database';
import '../../container';
import cors from 'cors';

const app = express();

const socket = io('https://zrp-challenge-socket.herokuapp.com');
const queue = new Queue();
socket.on('occurrence', data => {
  queue.add('ThreatRegister', { data });
});
queue.process();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server running on Port 3333');
});
