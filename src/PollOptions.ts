import * as $ from 'jquery';
import Loader from './Loader';
import PollRow from './PollRow';

function projectIdFromTitle(title: string): string {
    let projectIdRegexp = /#(\w+)/g;
    let match = projectIdRegexp.exec(title);
    return match ? match[1] : undefined;
}

export default class PollOptions {
    private node: JQuery<HTMLElement>;

    constructor(id: number, coefficients: Map<string, number>) {
        this.node = $("<div>");

        new Loader().appendTo(this.node);

        $.ajax(`https://www.strawpoll.me/api/v2/polls/${id}`)
            .then(
                (poll) => {
                    $(this.node).empty();

                    poll['options']
                        .map(
                            (title, index) => new PollRow(
                                title,
                                poll['votes'][index],
                                coefficients.get(projectIdFromTitle(title))
                            )
                        )
                        .sort((row1, row2) => row2.compare(row1))
                        .forEach((row) => row.appendTo(this.node));
                }
            );
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        $(entry).append(this.node);
        return this;
    }
}
