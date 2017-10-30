import Poll from './Poll';
import PollData from './PollData';

export default class ArchivedPoll implements Poll {
    private pollData: PollData;
    private url: string;

    constructor(pollData: PollData, userUrl: string) {
        this.pollData = pollData;
        this.url = userUrl;
    }

    data(): Promise<PollData> {
        return Promise.resolve(this.pollData);
    }

    userUrl(): string {
        return this.url;
    }
}
