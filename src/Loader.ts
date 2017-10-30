import * as $ from 'jquery';

export default class Loader {
    private node: JQuery<HTMLElement>;

    constructor() {
        this.node = $("<div class='loader'>Loading...</div>");
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        entry.append(this.node);
        return this;
    }
};
