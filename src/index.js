console.clear();
// const Discord = require("discord.js");

const Client = require("./Structures/Client.js");
const client = new Client();
const Command = require("./Structures/Command.js");

require("dotenv-flow").config();
const token = process.env.BOT_TOKEN;
const prefix = ".";

const fs = require("fs");

fs.readdirSync("./src/Commands")
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    /**
     * @type {Command}
     */
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Loaded ${command.name} command`);
  });

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

client.login(token);
