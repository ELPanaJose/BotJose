const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "see all the commands",
  execute(client, message, args) {
    if (!args[0]) {
      const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("All the commands");

      client.commands.forEach((command) => {
        embed.addField(command.name, command.description);
      });

      message.channel.send(embed);
    } else {
      const command = client.commands.has(args[0]);

      if (command) {
        const cmd = client.commands.get(args[0]);
        const embed = new MessageEmbed()
          .setTitle(`Information about ${cmd.name}`)
          .setDescription(`Description: ${cmd.description}`);
        message.channel.send(embed);
      } else {
        message.channel.send("Hey that command does not exist");
      }
    }
  },
};
