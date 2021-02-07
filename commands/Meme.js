const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "meme",
  description: "get a meme",
  execute(client, message, args) {
    axios.get("https://meme-api.herokuapp.com/gimme").then((res) => {
      if (res.status !== 200) {
        message.channel.send(`Status code did not return 200 | ${res.status}`);
      } else {
        const embed = new MessageEmbed()
          .setTitle(res.data.title)
          .setColor("BLUE")
          .setImage(res.data.url)
          .setURL(res.data.postLink)
          .setFooter(`👍 ${res.data.ups}`);

        message.channel.send(embed);
      }
    });
  },
};
