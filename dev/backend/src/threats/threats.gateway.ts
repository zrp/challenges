import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { io, Socket } from 'socket.io-client';
import { ThreatsService } from './threats.service';

@WebSocketGateway()
export class ThreatsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  private threatsSocket: Socket;

  constructor(private readonly threatsService: ThreatsService) {}

  handleConnection(client: Socket) {
    // console.log('Novo cliente conectado:', client.id);
  }

  handleDisconnect(client: Socket) {
    // console.log('Cliente desconectado:', client.id);
  }

  @SubscribeMessage('occurrence')
  handleOccurrence(client: Socket, payload: any) {
    this.threatsService.processThreatOccurrence(payload);
  }

  onModuleInit() {
    this.threatsSocket = io(
      'https://zrp-challenges-dev-production.up.railway.app/',
    );
    this.threatsSocket.on('connect', () => {
      // console.log('Conectado ao serviço de socket');
    });

    this.threatsSocket.on('occurrence', (payload: any) => {
      console.log('ocorrunce', payload.id);

      this.threatsService.processThreatOccurrence(payload);
    });

    this.threatsSocket.on('disconnect', () => {
      // console.log('Desconectado do serviço de socket');
    });
  }
}
