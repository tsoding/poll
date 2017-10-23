import $ from 'jquery';

export default class {
    constructor(name, votes) {
        this._node = $(`<div>${votes}: ${name}</div>`);
    }

    appendTo(entry) {
        $(entry).append(this._node);
        return this;
    }
};
