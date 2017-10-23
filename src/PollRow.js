import $ from 'jquery';

export default class {
    constructor(title, votes, coefficient = 1.0) {
        this._title = title;
        this._votes = votes;
        this._coefficient = coefficient;
        this._effectiveVotes = Math.ceil(this._votes * this._coefficient);
        this._node = $(`<div>${this._effectiveVotes} (${this._coefficient}): ${title}</div>`);
    }

    appendTo(entry) {
        $(entry).append(this._node);
        return this;
    }

    compare(otherRow) {
        return this._effectiveVotes - otherRow._effectiveVotes;
    }
};
