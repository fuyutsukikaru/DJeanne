var Discord = require('discord.io');

var pre = "!";

var bot = new Discord.Client({
  token: "MTg5ODQxMDU4NTYwMDgxOTIw.CjjCww.VVaGJ7sMJUMjrL66bRHKY77PeIk",
  autorun: true
});

bot.on('ready', function() {
  console.log(bot.username + " - (" + bot.id + ")");
  var tweets = require("./twitter.js")(this);
});

bot.on('message', function(user, userID, channelID, message, event) {
  if (message.charAt(0) === pre) {
    var index = message.indexOf(" ");
    var first = index >= 0 ? message.substr(1, index).toLowerCase().trim() : message.substr(1, message.length);
    var rest = index >= 0 ? message.substr(index + 1).trim() : null;
    console.log(first);
    console.log(rest);

    var commands = {
      "commands": () => { return "Type ! before guide, roulette, or help."; },
      "guide": () => { return require("./guides.js")(rest); },
      "roulette": () => { return require("./roulette.js")(rest); },
      "salt": () => {
        bot.uploadFile({
          to: channelID,
          file: "images/salt.jpg",
          filename: "salt.jpg"
        });
      },
      "help": () => { return require("./help.js")(rest); },
      "default": () => { return "No command found."; }
    };

    var result = commands[first]();
    if (typeof result === "string") {
      bot.sendMessage({
        to: channelID,
        message: result
      });
    }
  }
});
