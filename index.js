var work = require('webworkify');
var w = work(require('./werk.js'));

var MINUTE_IN_MS = 60000;
var currentBPM = {bpm: 120, ms: 500 / 4};

function onTick(cb) {
  w.addEventListener('message', function(ev) {
    if (ev.data === 'tick') {
      cb();
    }
  })
}

function setMS(ms) {
  setCurrent(null, ms);
  w.postMessage({interval: currentBPM.ms});
}

function setCurrent(bpm, ms) {
  if (bpm) {
    currentBPM = {
      bpm: bpm,
      ms: (MINUTE_IN_MS/bpm) / 4
    };
  } else {
    currentBPM = {
      bpm: MINUTE_IN_MS/ms,
      ms: ms / 4
    };
  }
}

function start() {
  w.postMessage('start');
}

function stop() {
  w.postMessage('stop');
}

function setBPM(BPM) {
  setCurrent(BPM);
  w.postMessage({interval: currentBPM.ms});
}

function getBPM() {
  return currentBPM;
}

module.exports = {
  onTick: onTick,
  setMS: setMS,
  start: start,
  stop: stop,
  setBPM: setBPM,
  getBPM: getBPM
};
