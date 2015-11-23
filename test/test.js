var Watcher = require('hls-watcher');

var sampleLiveStream = 'https://livestream.peer5.com/video/kite/index.m3u8';

var w1 = new Watcher(sampleLiveStream);

w1.listenFile();

w1.on("change", function(data) {
  console.log({ "change": data });
});

