var clock = require('../index');

var startButt = document.querySelector('.start');
var stopButt = document.querySelector('.stop');
var bpmInput = document.querySelector('#bpm');
var index = document.querySelector('.index');
var bpm = document.querySelector('.bpm');

var memIndex = 0;

bpmInput.addEventListener('change', function(ev) {
  clock.setBPM(parseInt(ev.target.value, 10));
});

startButt.addEventListener('click', function() {
  clock.start();
});

stopButt.addEventListener('click', function() {
  clock.stop();
});

clock.onTick(function() {
  if (memIndex === 17) {
    memIndex = 0;
  }
  index.textContent = memIndex;
  bpm.textContent = clock.getBPM().bpm;
  memIndex++;
});