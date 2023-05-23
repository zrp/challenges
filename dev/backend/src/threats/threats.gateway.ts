import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { io, Socket } from 'socket.io-client';
import { ThreatsService } from './threats.service';

@WebSocketGateway()
export class ThreatsGateway {
  @WebSocketServer()
  private threatsSocket: Socket;

  constructor(private readonly threatsService: ThreatsService) {}

  @SubscribeMessage('occurrence')
  handleOccurrence(client: Socket, payload: any) {
    this.threatsService.processThreatOccurrence(payload);
  }

  onModuleInit() {
    this.threatsSocket = io(
      'https://zrp-challenges-dev-production.up.railway.app/',
    );

    this.threatsSocket.on('occurrence', (payload: any) => {
      this.threatsService.processThreatOccurrence(payload);
    });
  }
}
