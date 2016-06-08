module.exports = function(rest) {
  if (rest) {
    var help = {
      "guide": "Enter !guide <query> in order to search for a guide.",
      "roulete": "Enter !roulette <choices separated by spaces> to have me pick an option for you."
    }
    return help[rest] || "That help command doesn't exist.";
  } else {
    return "Type !help before guide, roulette in order to see detailed info about each command.";
  }
}
