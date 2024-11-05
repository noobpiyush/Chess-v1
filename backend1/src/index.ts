import {WebSocketServer} from 'ws';
import { GaameManager } from './GameManager';

const wss = new WebSocketServer({port: 8080});

const gameManager = new GaameManager();

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    gameManager.addUser(ws)
    ws.on("disconnect", () => gameManager.removeUser(ws));
})