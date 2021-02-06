const linkMemes = [
  "https://www.reddit.com/r/MAAU/new/",
  "https://www.reddit.com/r/DylanteroYT/new/",
  "https://www.reddit.com/r/MAAU/top/",
  "https://www.reddit.com/r/DylanteroYT/hot/",
  "https://www.reddit.com/r/MAAU/hot/",
  "https://www.reddit.com/r/DylanteroYT/top/",
  "https://www.reddit.com/r/Colombia/hot/",
  "https://www.reddit.com/r/Colombia/new/",
  "https://www.reddit.com/r/Colombia/top/",
];

Object.defineProperty(Array.prototype, "flat", {
  value: function (depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  },
});

const storyLinks = ["https://www.reddit.com/r/entitledparents/new/"];
const historias = [];
//packages
var img = [];
const Discord = require("discord.js"), // discord bots
  axios = require("axios"), //http request
  cheerio = require("cheerio"); //web scrapping
const help = new Discord.MessageEmbed()
  .setTitle("puro momo rey 🤑")
  .setDescription(
    "``` *help te da informacion sobre los comandos ( for now the bot is only in spanih, but in a future it will be memes in english :D)\n\n *monda de solo puro momo \n\n  *bruh : si \n\n  *nm para agregar nuevos memes  \n\n *cm solo te da informacion de cuantos memes tienes \n\n *meme solo te da un momo \n\n *callao es solo para insultar ```"
  );

const client = new Discord.Client(),
  commands = {
    "*callao": async function (msg) {
      msg.channel.send("Come monda echee <@720304994523283497>");
    },
    "*nm": async function (msg) {
      msg.channel.send("se busco un nuevo momo");
      linkMemes.map((i) => {
        axios.get(i).then((r) => {
          let $ = cheerio.load(r.data);
          $("._2_tDEnGMLxpM6uOa2kaDB3").each((i, e) => {
            img.push($(e).attr("src"));
          });
        });
      });
    },
    "*meme": async function (msg) {
      let exampleEmbed = new Discord.MessageEmbed()
        .setTitle(
          "un momo :regional_indicator_b: :regional_indicator_r:  :regional_indicator_u: :regional_indicator_h:"
        )
        .setImage(img[Math.floor(Math.random() * img.length)]);
      msg.channel.send(exampleEmbed);
    },
    "*bruh": (msg) => {
      msg.channel.send(":flushed:");
      msg.channel.send("<:typescript:791822787689971772>");
      msg.channel.send("https://media.giphy.com/media/VIOkcgpsnA2Zy/200.gif");
    },
    "*cm": async function (msg) {
      msg.channel.send(`la cantidad de momos es : ${img.length}`);
    },

    "*monda": async function (msg) {
      msg.channel.send("El pana brother jorge floyd todo un idolo  :bruh:");
      msg.channel.send("https://www.youtube.com/watch?v=IRZWiqBHYaY");
      msg.channel.send(
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/8862/production/_112541943_whatsubject.jpg"
      );
    },

    "*chill": async function (msg) {
      msg.channel.send("chill");
    },

    "*help": async function (msg) {
      msg.channel.send(help);
    },
  };

client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "a",
      type: "WATCHING",
    },
    status: "*help",
  });

  console.log(`BOT_JOSE LISTO!!! ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (commands.hasOwnProperty(msg.content)) {
    commands[msg.content](msg);
  }
  if (/\chill/i.test(msg.content) && !msg.author.bot) {
    msg.author.send("chill");
  }
});
client.login("lbJjBkRe3p_b0tiilfJ_lJ28Pr5gQCWJ");
