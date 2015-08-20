var common = require('./common');
var config = common.config();
var Slack = require('slack-node');
var twitter = require('ntwitter');
var _ = require('underscore');

var slackApi = new Slack();
slackApi.setWebhook(config.slack_webhook_url);

var tw = new twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

var SplatoonJP = "2888006497";
var SplatoonWorld = "3292437866";
var UserIds = SplatoonJP;
var UserArray = [SplatoonJP];

tw.stream('statuses/filter', {'follow':UserIds}, function(stream) {
  stream.on('data', function (data) {
    if(_.contains(UserArray, data.user.id_str)){
      slackApi.webhook({
        channel: config.slack_channel,
        username: data.user.name,
        text: data.text
      }, function(err, response) {
        console.log(response);
      });
    }
  });
});

// For Heroku Error
// Error R10 (Boot timeout) -> Web process failed to bind to $PORT within 60 seconds of launch
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Splatweet is working!\n');
}).listen(process.env.PORT || 3000);
console.log('process start!');
