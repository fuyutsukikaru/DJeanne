var Twit = require('twit');
var schedule = require('node-schedule');

var client = new Twit({
  consumer_key: '3GxLR8Q9L5iZfcrpIoGF6fVfg',
  consumer_secret: 'XJX6mEE0DbPtCcH832QopifuyihWI9U2jloqoAs9hPNkhMBUmM',
  access_token: '104393179-9qvR3mQKU7MQWzaooN069MgLJGBPi2e8tWIN1Szg',
  access_token_secret: 'Lz7nqH0YtHYzzwXFFotUNOHcRZOk51a9WO5GPUE2yZ3u7'
});

module.exports = function(bot) {
  //var stream = client.stream('statuses/filter', { follow: "1549889018" });
  var stream = client.stream('statuses/filter', { follow: "715981791690104832" });
  stream.on('tweet', function(tweet) {
    if (tweet.text.includes("時限クエ")) {
      console.log(tweet.text.split("\n"));
      var arr = tweet.text.split("\n");
      var year = new Date().getFullYear();
      var month = arr[0].charAt(arr[0].length - 6);
      var day = arr[0].charAt(arr[0].length - 4);
      for (var i = 1; i < arr.length - 2; i += 5) {
        for (var j = i + 1; j < i + 4; j++) {
          if (arr[j].charAt(arr[j].length - 1) == "★") {
            var time = arr[j].substr(0, 2);
            var date = new Date(year, month, day, time - 1, 50, 0);
            var data = arr[i].replace("&amp;", " and ") + " Star Angel Halo starts in 10 minutes at " + time + ":00 JST"
            schedule.scheduleJob(date, function() {
              bot.sendMessage({
                to: "174700944318136320",
                //to: "189851785349824512",
                message: data
              });
            });
            break;
          }
        }
      }
    }
  });
}
