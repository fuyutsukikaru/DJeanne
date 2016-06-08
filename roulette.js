module.exports = function(text) {
  var options = text.split(/[ ]+/);
  var random = Math.floor(Math.random() * options.length);
  return "Is it really okay for me to choose? Well then, I choose " + options[random].trim();
}
