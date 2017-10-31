import * as $ from 'jquery';
import PollTable from './PollTable';
import Strawpoll from './Strawpoll';
import ArchivedPoll from './ArchivedPoll';

new PollTable(
    new ArchivedPoll({
        "id":14222115,
        "title":"Morning Tsoding, November 2017",
        "options":["Web framework in Assembly (#wassm)",
                   "Graphics Library for Rust (#gross)",
                   "Functional Programming Language in Scala (#morganey)",
                   "Musical Game in C++ (#beatwave)",
                   "Digital Music Looper in Rust (#dimooper)",
                   "Chat Bot in Erlang (#tsoder)",
                   "Neural Network in Haskell (#nnaskell)"],
        "votes":[40,18,31,20,14,13,35],
        "multi":true,
        "dupcheck":"normal",
        "captcha":false
    }),
    new Map([
        ['wassm', 0.8],
        ['gross', 0.9]
    ])
).appendTo($('#archived-polls'));

new PollTable(
    new ArchivedPoll({
        "id":14000484,
        "title":"Morning Tsoding, October 2017",
        "options":["WASSM (Web framework in Assembly)",
                   "Dimooper (Digital Music Looper in Rust)",
                   "Tsoder (Chat Bot in Erlang)",
                   "Morganey (Functional Programming Language in Scala)",
                   "Boids (Flock Simulation in Haskell)",
                   "Beatwave (Musical Game in C++)",
                   "rust-gloss (Graphics Library for Rust)"],
        "votes":[
            29,                 // wassm
            10,                 // dimooper
            9,                  // tsoder
            22,                 // morganey
            9,                  // boids
            14,                 // beatwave
            25                  // gross
        ],
        "multi":true,
        "dupcheck":"normal",
        "captcha":false
    }),
    new Map()
).appendTo($('#archived-polls'));

new PollTable(
    new ArchivedPoll({
        "id":13807851,
        "title":"Morning Tsoding, September 2017",
        "options":["Dimooper (Digital Music Looper in Rust)",
                   "Tsoder (Chat Bot in Erlang)",
                   "Boids (Flock Simulation in Haskell)",
                   "Morganey (Functional Programming Language in Scala)",
                   "Issuestant (GitHub Bot in Scala)",
                   "Beatwave (Musical Game in C++)",
                   "Web-site in ASM"],
        "votes":[
            14,                 // dimooper
            21,                 // tsoder
            11,                 // boids
            19,                 // morganey
            15,                 // issuestant
            10,                 // beatwave
            32                  // wassm
        ],
        "multi":true,
        "dupcheck":"normal",
        "captcha":false
    }),
    new Map()
).appendTo($('#archived-polls'));
