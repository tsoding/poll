import * as $ from 'jquery';

export default class PollRow {
    private title: string;
    private votes: number;
    private coefficient: number;
    private effectiveVotes: number;
    private node: JQuery<HTMLElement>;

    constructor(title: string,
                votes: number,
                coefficient: number = 1.0) {
        this.title = title;
        this.votes = votes;
        this.coefficient = coefficient;
        this.effectiveVotes = Math.ceil(this.votes * this.coefficient);
        this.node = $(`<div>${title} (ev=${this.effectiveVotes};c=${this.coefficient};ov=${this.votes})</div>`);
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        $(entry).append(this.node);
        return this;
    }

    compare(otherRow: PollRow): number {
        return this.effectiveVotes - otherRow.effectiveVotes;
    }
};
