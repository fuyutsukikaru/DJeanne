var Twit = require('twit');
var schedule = require('node-schedule');
var keys = require('./keys.js');

var client = new Twit({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token: keys.access_token,
  access_token_secret: keys.access_token_secret
});

module.exports = function(bot) {
  var stream = client.stream('statuses/filter', { follow: "1549889018" });
  //var stream = client.stream('statuses/filter', { follow: "715981791690104832" });
  stream.on('tweet', function(tweet) {
    if (tweet.text.includes("時限クエ")) {
      //console.log(tweet.text.split("\n"));
      var arr = tweet.text.split("\n");
      /*var year = new Date().getFullYear();
      var dst = new Date().dst() ? 13 : 14;
      var month = parseInt(arr[0].charAt(arr[0].length - 6));
      var day = parseInt(arr[0].charAt(arr[0].length - 4));*/
      for (var i = 1; i < arr.length - 2; i += 5) {
        for (var j = i + 1; j < i + 4; j++) {
          if (arr[j].charAt(arr[j].length - 1) == "★") {
            var time = parseInt(arr[j].substr(0, 2));
            /*if ((parseInt(arr[j].substr(0, 2)) - dst) < 0) {
              day--;
              if (day <= 0) {
                month--;
                if (month <= 0) {
                  month = 12;
                }
                if (month == 2) {
                  day = year % 4 === 0 ? 29 : 28;
                } else if (month < 8 && month % 2 === 1) {
                  day = 31;
                } else {
                  day = 30;
                }
              }
            }
            time = time - 1 < 0 ? 23 : time - 1;
            var date = new Date(year, month, day, time, 50, 0);*/
            var data = arr[i].replace("&amp;", " and ") + " Star Angel Halo starts at " + time + ":00 JST"
            //console.log(data);
            //schedule.scheduleJob(date, function() {
              bot.sendMessage({
                to: "174700944318136320",
                //to: "189851785349824512",
                message: data
              });
            //});
            break;
          }
        }
      }
    }
  });
}

Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.dst = function() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}
