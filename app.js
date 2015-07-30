var common = require('./common');
var config = common.config();

var twitter = require('ntwitter');
var tw = new twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

tw.stream('statuses/filter', {'follow':'2888006497'}, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});
