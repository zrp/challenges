import Queue from 'bull';
import redis from '../../../../share/config/cache';
import '../../../../share/container';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, { redis }),
  name: job.key,
  handle: job.handle,
}));
class ThreatQueue {
  public add(name, data) {
    const Newqueue = queues.find(queue => queue.name === name);

    return Newqueue.bull.add(data);
  }

  public process(): void {
    return queues.forEach(queue => {
      queue.bull.process(queue.handle);
      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', job.name, job.data);
        console.log(err);
      });
    });
  }
}

export default ThreatQueue;
