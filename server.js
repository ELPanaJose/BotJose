const linkMemes = [
  "https://www.reddit.com/r/MAAU/new/",
  "https://www.reddit.com/r/DylanteroYT/new/",
  "https://www.reddit.com/r/MAAU/top/",
  "https://www.reddit.com/r/DylanteroYT/hot/",
  "https://www.reddit.com/r/MAAU/hot/",
  "https://www.reddit.com/r/DylanteroYT/top/",
  
];

const storyLinks = ["https://www.reddit.com/r/entitledparents/new/"];
const historias = [];
//packages
var img = [];
const Discord = require("discord.js"), // discord bots
  axios = require("axios"), //http request
  cheerio = require("cheerio"); //web scrapping
//objects

const client = new Discord.Client(),
  commands = {
    "/callao": async function(msg) {
      msg.channel.send("when haces tus momos en video :V");
    },
    "/nm": async function(msg) {
      msg.channel.send("se busco un nuevo momo");
      linkMemes.map(i => {
        axios.get(i).then(r => {
          let $ = cheerio.load(r.data);
          $("._2_tDEnGMLxpM6uOa2kaDB3").each((i, e) => {
            img.push($(e).attr("src"));
          });
        });
      });
    },
    "/momo": async function(msg) {
      msg.channel.send(img[Math.floor(Math.random() * img.length)]).catch(e => {
        msg.channel.send(
          "mierda , no hemos encontrado un momo , seguramente bloquearon la ip :("
        );
      });
    },
    "/cantidadMomo": async function(msg) {
      msg.channel.send(`la cantidad de momos es : ${img.length}`);
    },
    "/monda": async function(msg) {
      // no te va a funcionar si pones una lista asi , no deberias de hacer , por ahora solo pon una secuencia tipo     mmmh no  sabia
      msg.channel.send("El pana brother jorge floyd todo un idolo");
      msg.channel.send("https://www.youtube.com/watch?v=IRZWiqBHYaY");
      msg.channel.send(
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/8862/production/_112541943_whatsubject.jpg"
      );

      // salte y vuelve a meterte si quieres seguir probando, el servidor no se   quiere reiniciar    carajo
    },
    "/help": async function(msg) {
      msg.channel.send(
        "``` primero va /nm(nuevo momo) , luego  /momo y cada vez que quiers ver un nuevo momo es /nm, despues si quieres ver al pana brother jorge floyd pon /monda , y si quieres insultar pon /callao```"
      );
    }
  };

client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "a",
      type: "WATCHING"
    },
    status: "/help"
  });

  console.log(`${client.user.username} is up and running!`);

  console.log(`BOT_JOSE LISTO!!! ${client.user.tag}!`);
});

client.on("message", msg => {
  if (commands.hasOwnProperty(msg.content)) {
    commands[msg.content](msg);
  }
  if (/\:v/i.test(msg.content) && !msg.author.bot) {
    msg.author.send("viva la grasa :V");
  }
});
client.login("token");
