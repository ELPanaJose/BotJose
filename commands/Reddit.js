const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "reddit",
  description: "get a post from any subreddit",

  execute(client, message, args) {
    const subreddit = args[0];
    if (!subreddit)
      return message.channel.send("you need to provide a subreddit");
    axios
      .get(`https://meme-api.herokuapp.com/gimme/${subreddit}`)
      .then((res) => {
        const embed = new MessageEmbed()
          .setTitle(res.data.title)
          .setColor("BLUE")
          .setImage(res.data.url)
          .setURL(res.data.postLink)
          .setFooter(`👍 ${res.data.ups}`);

        message.channel.send(embed);
      })
      .catch((err) => {
        if (err.response) {
          message.channel.send("Error");
        } else if (err.request) {
          message.channel.send("Error");
        } else {
          message.channel.send("Error");
        }
      });
  },
};
