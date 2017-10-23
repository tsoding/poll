import $ from 'jquery';

export default class {
    constructor() {
        this._node = $("<div class='loader'>Loading...</div>");
    }

    appendTo(entry) {
        $(entry).append(this._node);
        return this;
    }
};
