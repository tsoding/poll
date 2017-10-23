import $ from 'jquery';
import Loader from './Loader.js';
import PollRow from './PollRow.js';

export default class {
    constructor(id, coefficients) {
        this._node = $("<div>");

        new Loader().appendTo(this._node);

        $.ajax(`http://www.strawpoll.me/api/v2/polls/${id}`)
            .then(
                (poll) => {
                    $(this._node).empty();

                    poll['options']
                        .map(
                            (option, index) => {
                                let coefficient = typeof coefficients[option] !== 'undefined' ? coefficients[option] : 1.0;
                                return [option, Math.ceil(poll['votes'][index] * coefficient)];
                            }
                        )
                        .sort(
                            (item1, item2) => item2[1] - item1[1]
                        )
                        .forEach(
                            (item) => {
                                new PollRow(item[0], item[1]).appendTo(this._node);
                            }
                        );
                }
            );

    }

    appendTo(entry) {
        $(entry).append(this._node);
        return this;
    }
};
