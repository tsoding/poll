import * as $ from 'jquery';

import PollRow from './PollRow';
import Loader from './Loader';
import UiComponent from './UiComponent';

import Poll from './Poll';

function projectIdFromTitle(title: string): string {
    let projectIdRegexp = /#(\w+)/g;
    let match = projectIdRegexp.exec(title);
    return match ? match[1] : undefined;
}

export default class PollTable implements UiComponent {
    private node: JQuery<HTMLElement>;

    constructor(poll: Poll, coefficients: Map<string, number>) {
        this.node = $(`<div>`);

        new Loader().appendTo(this.node);

        poll.data()
            .then(
                (data) => {
                    this.node.empty();

                    data.options
                        .map(
                            (title, index) => new PollRow(
                                title,
                                data.votes[index],
                                coefficients.get(projectIdFromTitle(title))
                            )
                        )
                        .sort((row1, row2) => row2.compare(row1))
                        .forEach((row) => row.appendTo(this.node));
                }
            );
    }

    appendTo(entry: JQuery<HTMLElement>): this {
        entry.append(this.node);
        return this;
    }
};
