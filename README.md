# Audio Clock

[![NPM](https://nodei.co/npm/audio-clock.png?downloads=true)](https://npmjs.org/package/audio-clock)

Keep time in the browser for audio applications.

setTimeout/setInterval can not be depended on when running in a browser's single threaded environment.
Therefor we need to push them into a webworker and communicate with them that way.

Adapted from [metronome](https://github.com/cwilso/metronome)
