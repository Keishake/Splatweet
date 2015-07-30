if(process.env.NODE_ENV === 'heroku'){
  exports.config = function() {
    config = {
      "consumer_key" : process.env.CONSUMER_KEY,
      "consumer_secret" : process.env.CONSUMER_SECRET,
      "access_token_key" : process.env.ACCESS_TOKEN_KEY,
      "access_token_secret" : process.env.ACCESS_TOKEN_SECRET,
      "slack_webhook_url" : process.env.WEBHOOK_URL
    }
    return config;
  };

}else{
  var env = require('./env.json');
  exports.config = function() {
    return env;
  };
}

