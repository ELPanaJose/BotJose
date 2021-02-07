const { Client, Collection } = require("discord.js");
const fs = require("fs");
const logger = require("@ayanaware/logger");

module.exports = class BotClient extends Client {
  constructor(options) {
    super();
    this.botoptions = options;
    this.commands = new Collection();
    this.logger = logger.get("Bot");

    this.on("ready", () => {
      this.logger.info("ready");
      this.user.setStatus({ status: "dnd" });
    });

    this.on("message", (message) => {
      const prefix = "*";
      if (!message.content.startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();

      if (!this.commands.has(command)) return;

      try {
        this.commands.get(command).execute(this, message, args);
      } catch (error) {
        message.channel.send(
          `An error occured while executing that command Error: ${error}`
        );
      }
    });
  }

  loadCommands() {
    const commandFiles = fs
      .readdirSync("./commands")
      .filter((file) => file.endsWith(".js"));

    for (const commandFile of commandFiles) {
      const command = require(`./commands/${commandFile}`);
      this.commands.set(command.name, command);
    }
  }

  run() {
    super.login(this.botoptions.token);
    this.loadCommands();
  }
};
