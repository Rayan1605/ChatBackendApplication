import Queue, { Job} from "bull";
import Logger from "bunyan";
import { createBullBoard} from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';
import {config} from "@root/config";

let bullAdapters: BullAdapter[] = [];

export let serverAdapter: ExpressAdapter;

export abstract class BaseQueue {
    queue: Queue.Queue
    log: Logger;

    constructor(QueueName: string) {
        this.queue = new Queue(QueueName, `${config.REDIS_HOST}`);
        bullAdapters.push(new BullAdapter(this.queue));
        bullAdapters = [...new Set(bullAdapters)];
        serverAdapter = new ExpressAdapter();
        serverAdapter.setBasePath('/queues');

    }

}

















