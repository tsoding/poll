import $ from 'jquery';
import PollTable from './PollTable.js';

new PollTable(14222115, {
    'wassm': 0.8,
    'gross': 0.9
}).appendTo($('#poll'));
