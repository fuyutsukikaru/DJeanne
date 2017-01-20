var fuzzy = require('fuzzy');

module.exports = function(query) {
  if (query.toLowerCase() == "list") {
    var results = guide_link.map((cur, index, arr) => {
      return cur.message;
    });
    return results.join(", ");
  }
  var options = {
    pre: "",
    post: "",
    extract: function(text) { return text.terms; }
  };
  var results = fuzzy.filter(query.toLowerCase(), guide_link, options);
  console.log(results.length);
  return results && results.length > 0 ? "Is this what you asked for? If not, I'll take all the punishment for my mistakes. "
    + results[0].original.message : "None found";
}

var guide_link = [
  {
    terms: "general ultimate beginner startup progression",
    message: "**Ultimate Guide** - http://gbf-english.proboards.com/thread/240/granblue-fantasy-ultimate-guide",
  },
  {
    terms: "weapons optimization baha cosmos magna",
    message: "**Weapon Optimization** - http://gbf-english.proboards.com/thread/595/weapon-summon-optimisation-progression",
  },
  {
    terms: "guild wars",
    message: "**Guild Wars** - http://gbf-english.proboards.com/thread/597/brief-guide-guild-wars",
  },
  {
    terms: "ssr characters skills information",
    message: "**SSR character info** - https://docs.google.com/spreadsheets/d/1AMaVEsvS5SmUvIhQA47ATPccJXLP1PfUUIBcWUMU0aw/edit#gid=0",
  },
  {
    terms: "ssr characters tiers",
    message: "**SSR tier list** - https://docs.google.com/spreadsheets/d/1cC4nqQyLQ8VsZUHH8wDCvxzAfdwwrAKfLwvxV1GgXqU/edit#gid=0",
  },
  {
    terms: "sr characters tiers",
    message: "**SR tier list** - https://docs.google.com/spreadsheets/d/1NSmJ_7odu2jFgaTse3Hdohc7nlKXbUoh5kl-l7A0f70/edit?pref=2&pli=1#gid=0",
  },
  {
    terms: "towns gifts special prizes",
    message: "**Special Town Gifts** - http://gbf-english.proboards.com/thread/220/special-gifts-town",
  },
  {
    terms: "english wiki",
    message: "**English Wiki** - https://granblue-wiki.com/index.php/Main_Page",
  },
  {
    terms: "japanese wiki",
    message: "**Japanese Wiki** - http://gbf-wiki.com/index.php?%A5%B0%A5%E9%A5%F3%A5%D6%A5%EB%A1%BC%A5%D5%A5%A1%A5%F3%A5%BF%A5%B8%A1%BC%28%A5%B0%A5%E9%A5%D6%A5%EB%29%B9%B6%CE%ACwiki",
  },
  {
    terms: "damage calculator optimizer",
    message: "**Damage calculator** - http://gbf.xzz.jp/",
  },
  {
    terms: "cross fates characters",
    message:  "**Cross Fates** - http://gbf-wiki.com/index.php?%A5%AF%A5%ED%A5%B9%A5%D5%A5%A7%A5%A4%A5%C8%A5%A8%A5%D4%A5%BD%A1%BC%A5%C9%B0%EC%CD%F7",
  }
];
