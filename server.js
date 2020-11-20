const linkMemes = [
  "https://www.reddit.com/r/MAAU/",
  "https://www.reddit.com/r/memes/",
  "https://www.reddit.com/r/dankmemes/",
  "https://www.reddit.com/r/Memes_Of_The_Dank",
  "https://www.reddit.com/r/4chan"
];
const {token}=require("./settings.json")
//packages
const {Client} = require("discord.js"), // discord bots
  axios = require("axios"), //http request
  cheerio = require("cheerio"); //web scrapping
//links
var img = [];
//objects
const commands = {
    "/callao": function(msg) {
      msg.channel.send("when haces tus momos en video :V");
    },
    "/newMomo": function(msg) {
      linkMemes.map(i => {
        axios
          .get(i)
          .then(r => {
            let $ = cheerio.load(r.data);
            $("._2_tDEnGMLxpM6uOa2kaDB3").each((i, e) => {
              img.push($(e).attr("src"));
            });
          })
          .catch(e => {
            if (e) {
              msg.channel.send(" no se ha encontrado un buen momo");
            }
          });
      });
    },
    },
    "/momo": function(msg) {
      msg.channel.send(img[Math.floor(Math.random() * img.length)]);
    },
    "/monda": function(msg) {
      msg.channel.send(
        "https://www.infobae.com/new-resizer/8iwerQ0t9dEThspv78qqDC0L7Uc=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/GGPDEBMJVNDIDAOTSULULDIVDA.jpg"
      );
    }
  };

Client.on("ready", () => {
  Client.user.setPresence({
    game: { name: "with discord.js" },
    status: "idle"
  });

  console.log(`${Client.user.username} is up and running!`);

  console.log(`BOT_JOSE LISTO!!! ${Client.user.tag}!`);
});


Client.on("message", msg => {
  if (commands.hasOwnProperty(msg.content)) {
    commands[msg.content](msg);
  }
  if (/\:v/i.test(msg.content) && !msg.author.bot) {
    msg.author.send("viva la grasa :V");
  }
});
Client.login(token);
