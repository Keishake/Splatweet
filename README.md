# Splatweet
Get SplatoonJP's tweet and send to Slack

## setup

```
$ npm install
$ heroku config:set CONSUMER_KEY="Your twitter consumer key here"
$ heroku config:set CONSUMER_SECRET="Your twitter consumer secret here"
$ heroku config:set ACCESS_TOKEN_KEY="Your twitter access token here"
$ heroku config:set ACCESS_TOKEN_SECRET="Your twitter access token secret here"
$ heroku config:set WEBHOOK_URL="Your Slack webhook url here"
$ heroku config:set NODE_ENV="heroku"

```
And Deploy to Heroku!


## Use in your server (not heroku)

if you want to use it in your server, copy `env.json.base` to `env.json` and set your credentials.   Then `node app.js`.

