import BotClient from "./client";
import { token } from "../config";

const client: BotClient = new BotClient({ token: token });

client.start();
