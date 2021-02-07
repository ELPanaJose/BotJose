const BotClient = require("./client");
const { token } = require("./config.json");

const client = new BotClient({
  token: token,
});

client.run();
