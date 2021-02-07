import { Client, Collection } from "discord.js";
import fs from "fs";
import { BotOptions } from "./interfaces/BotOptions";
import logger from "@ayanaware/logger";
import path from "path";
import { Command } from "./interfaces/Command";

export default class BotClient extends Client {
  public BotOptions: BotOptions;
  public logger: logger = logger.get("Bot");
  public commands: Collection<string, Command> = new Collection();
  public constructor(options: BotOptions) {
    super();
    this.BotOptions = options;

    this.on("ready", () => {
      this.logger.info(`Logged in as ${this.user.username}`);
      this.user.setPresence({ status: "dnd" });
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
    const commandFiles = fs.readdirSync(path.join(__dirname, "commands"));

    for (const commandFile of commandFiles) {
      const command: Command = require(`./commands/${commandFile}`);
      this.commands.set(command.name, command);
    }
  }

  start() {
    super.login(this.BotOptions.token);
    this.loadCommands();
  }
}
