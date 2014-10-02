var timerID = null;
var interval = 500;

module.exports = function(self) {
  self.addEventListener('message', function(ev) {
    if (ev.data === "start") {

      if (timerID) clearInterval(timerID);

      timerID = setInterval(function() {
                  self.postMessage("tick");
                }, interval);

    } else if (ev.data.interval) {

      interval = ev.data.interval;

      if (timerID) {
        clearInterval(timerID);
        timerID = setInterval(function() {
                    self.postMessage("tick");
                  }, interval);

      }
    } else if (ev.data === 'stop') {

		  clearInterval(timerID);
		  timerID = null;

    }
  })
}