import * as $ from 'jquery';

export default class Loader {
    private node: any;

    constructor() {
        this.node = $("<div class='loader'>Loading...</div>");
    }

    appendTo(entry: any) {
        $(entry).append(this.node);
        return this;
    }
};
