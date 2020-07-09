import 'reflect-metadata';
import '../../container';
import Queue from '../../../modules/Threats/infra/queues/ThreatRequistrationQueue';

const queue = new Queue();

queue.process();
