import io from 'socket.io-client';
import { container } from 'tsyringe';
import IThreatDto from 'modules/Threats/dtos/IThreatDto';
import CreateThreatService from '../../services/CreateThreatService';

class ThreatSocket {
  public async store(): Promise<void> {
    const createThreatService = container.resolve(CreateThreatService);
    const socket = io('https://zrp-challenge-socket.herokuapp.com');

    socket.on('occurrence', response => {
      const { dangerLevel, monsterName, location } = response;
    });
  }
}

export default ThreatSocket;
