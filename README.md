# bitcoin-alerts

Receive a text message whenever Bitcoin to USD rate hits a set price.

###Instructions

1. Clone the project
2. Sign up for [Twilio](http://twilio.com) (you can make do with a free account— all your texts will just have 'Sent from your Twilio trial account' prepended to it)
4. Make note of your *TWILIO_ACCOUNT_SID* and *TWILIO_AUTH_TOKEN*
5. Sign up for heroku and deploy
6. Add the Heroku Scheduler add-on and add the following command: **$ node check_price.js**
7. In terminal, type the following command, replacing with your own credentials

    heroku config:set TWILIO_ACCOUNT_SID=**TWILIO_ACCOUNT_SID** TWILIO_AUTH_TOKEN=**TWILIO_AUTH_TOKEN** PHONE_NUMBER=**phone number to text** RATE=**bitcoin usd exchange rate you want to get notified at**