import $ from 'jquery';
import PollOptions from './PollOptions.js';

export default class {
    constructor(id, coefficients) {
        this._node = $(`
          <div>
            <div>Poll: <a href="http://www.strawpoll.me/${id}">http://www.strawpoll.me/${id}</a></div>
            <div>&dash;&dash;&dash;</div>
          </div>`);
        new PollOptions(id, coefficients).appendTo(this._node);
    }

    appendTo(entry) {
        $(entry).append(this._node);
        return this;
    }
};
