import * as $ from 'jquery';
import Poll from './Poll';
import PollData from './PollData';

export default class Strawpoll implements Poll {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    data(): Promise<PollData> {
        return $.ajax(`https://www.strawpoll.me/api/v2/polls/${this.id}`);
    }

    userUrl(): string {
        return `http://www.strawpoll.me/${this.id}`;
    }
};
