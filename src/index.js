console.clear();
// const Discord = require("discord.js");

const Client = require("./Structures/Client.js");
const client = new Client();

require("dotenv-flow").config();
const token = process.env.BOT_TOKEN;
const prefix = ".";

client.on("ready", () => {
  console.log(`${client.user.tag} is online!`);
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.substring(prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => (cmd.name = args[0]));

  if (!command) return;

  command.run(message, args, client);
});

client.start(token);
