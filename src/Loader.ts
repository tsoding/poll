import * as $ from 'jquery';
import UiComponent from './UiComponent'

export default class Loader implements UiComponent {
    private node: JQuery<HTMLElement>;

    constructor() {
        this.node = $("<div class='loader'></div>");
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        entry.append(this.node);
        return this;
    }
};
