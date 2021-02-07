import BotClient from "../client";
import { Message } from "discord.js";

export const name: string = "ping";

export const execute = (
  client: BotClient,
  message: Message,
  args: string[]
) => {
  message.channel.send(`Pong! ${client.ws.ping}ms`);
};
