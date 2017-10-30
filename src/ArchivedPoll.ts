import Poll from './Poll';
import PollData from './PollData';

export default class ArchivedPoll implements Poll {
    private pollData: PollData;

    constructor(pollData: PollData) {
        this.pollData = pollData;
    }

    data(): Promise<PollData> {
        return Promise.resolve(this.pollData);
    }
}
