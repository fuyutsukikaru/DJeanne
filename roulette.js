module.exports = function(text) {
  if (text) {
    var options = text.split(/[ ]+/);
    if (options.length < 2) {
      return "Please enter at least two options for me to choose from!";
    }
    var random = Math.floor(Math.random() * options.length);
    return "Is it really okay for me to choose? Well then, I choose **" + options[random].trim() + "**";
  }
  return "Please enter at least two options for me to choose from!";
}
