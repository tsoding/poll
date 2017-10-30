import * as $ from 'jquery';
import PollTable from './PollTable';
import Strawpoll from './Strawpoll';
import ArchivedPoll from './ArchivedPoll';

new PollTable(
    new Strawpoll(14222115),
    new Map([
        ['wassm', 0.8],
        ['gross', 0.9]
    ])
).appendTo($('#poll'));
