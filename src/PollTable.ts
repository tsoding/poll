import * as $ from 'jquery';
import PollOptions from './PollOptions';
import Poll from './Poll';
import UiComponent from './UiComponent';

export default class PollTable implements UiComponent {
    private node: JQuery<HTMLElement>;

    constructor(poll: Poll, coefficients: Map<string, number>) {
        this.node = $(`
          <div>
            <div>Poll: <a href="${poll.userUrl()}">${poll.userUrl()}</a></div>
            <div>&dash;&dash;&dash;</div>
          </div>`);

        new PollOptions(poll.data(), coefficients).appendTo(this.node);
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        entry.append(this.node);
        return this;
    }
};
