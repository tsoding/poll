import * as $ from 'jquery';
import PollOptions from './PollOptions';

export default class {
    private node: any;

    constructor(id, coefficients) {
        this.node = $(`
          <div>
            <div>Poll: <a href="http://www.strawpoll.me/${id}">http://www.strawpoll.me/${id}</a></div>
            <div>&dash;&dash;&dash;</div>
          </div>`);
        new PollOptions(id, coefficients).appendTo(this.node);
    }

    appendTo(entry) {
        $(entry).append(this.node);
        return this;
    }
};
