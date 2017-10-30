import * as $ from 'jquery';
import PollTable from './PollTable';

new PollTable(14222115, new Map([
    ['wassm', 0.8],
    ['gross', 0.9]
])).appendTo($('#poll'));
