var https = require('https')
  , client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); 

function checkPrice() {
  https.get('https://coinbase.com/api/v1/currencies/exchange_rates', function(res) {
    var str = ''
    res.on('data', function (chunk) {
      str += chunk;
    });

    res.on('end', function () {
      str = JSON.parse(str);
      rate = parseFloat(str.btc_to_usd).toFixed(2);
      if (rate >= process.env.RATE) {
        client.messages.create({ 
          to: process.env.PHONE_NUMBER, 
          from: "+16502763738", 
          body: rate,   
        }, function(err, message) { 
          process.stdout.write('Sent ' + message.date_created + ' @ ' + rate + '\n'); 
        });
      } else {
        process.stdout.write(rate + '\n')
      }
    });
  });
}

checkPrice();