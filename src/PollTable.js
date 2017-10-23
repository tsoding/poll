import $ from 'jquery';
import Loader from './Loader.js';
import PollRow from './PollRow.js';

function projectIdFromTitle(title) {
    let projectIdRegexp = /#(\w+)/g;
    let match = projectIdRegexp.exec(title);
    return match ? match[1] : undefined;
}

export default class {
    constructor(id, coefficients) {
        this._node = $("<div>");

        new Loader().appendTo(this._node);

        $.ajax(`https://www.strawpoll.me/api/v2/polls/${id}`)
            .then(
                (poll) => {
                    $(this._node).empty();

                    poll['options']
                        .map(
                            (title, index) => new PollRow(
                                title,
                                poll['votes'][index],
                                coefficients[projectIdFromTitle(title)]
                            )
                        )
                        .sort((row1, row2) => row2.compare(row1))
                        .forEach((row) => row.appendTo($(this._node)));
                }
            );

    }

    appendTo(entry) {
        $(entry).append(this._node);
        return this;
    }
};
