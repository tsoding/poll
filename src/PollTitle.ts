import * as $ from 'jquery';

import UiComponent from './UiComponent';

export default class PollTitle implements UiComponent {
    private node: JQuery<HTMLElement>;

    constructor(title: string) {
        this.node = $(`<div class="poll-title">${title}</div>`);
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        entry.append(this.node);
        return this;
    }
}
