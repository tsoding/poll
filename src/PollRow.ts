import * as $ from 'jquery';

export default class {
    private title: string;
    private votes: any;
    private coefficient: number;
    private effectiveVotes: number;
    private node: any;

    constructor(title, votes, coefficient = 1.0) {
        this.title = title;
        this.votes = votes;
        this.coefficient = coefficient;
        this.effectiveVotes = Math.ceil(this.votes * this.coefficient);
        this.node = $(`<div>${title} (ev=${this.effectiveVotes};c=${this.coefficient};ov=${this.votes})</div>`);
    }

    appendTo(entry) {
        $(entry).append(this.node);
        return this;
    }

    compare(otherRow) {
        return this.effectiveVotes - otherRow.effectiveVotes;
    }
};
