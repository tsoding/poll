import $ from 'jquery';
import PollTable from './PollTable.js';

new PollTable(14220953, {
    'foo': 0.9,
    'bar': 100.0,
    'baz': 0.0
}).appendTo($('#poll'));
