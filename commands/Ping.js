module.exports = {
  name: "ping",
  description: "ping pong",

  execute(client, message, args) {
    message.channel.send(`Pong ${client.ws.ping}ms`);
  },
};
