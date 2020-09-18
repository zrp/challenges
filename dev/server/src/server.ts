import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
import AmeacasController from './controllers/AmeacasController';
import http from 'http';
import socketio from 'socket.io';


const ameacaControllers = new AmeacasController();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const publicDirectoryPath = path.join('','../../web/public');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(publicDirectoryPath));
app.set('views', publicDirectoryPath);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let dadosAmeaca: any;

io.on('connection', (socket: any) => {
    
    socket.on('occurrence', (data: any) => {
        dadosAmeaca.push(data);
        ameacaControllers.create(dadosAmeaca);
    })
});

app.listen(3333);