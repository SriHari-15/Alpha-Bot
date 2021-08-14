const Discord = require("discord.js");
const intents = new Discord.Intents(32767);
const Command = require("./Command.js");
const fs = require("fs")

class Client extends Discord.Client {
  constructor() {
    super({ intents });

    /**
     * @type {Discord.Collection<string, Command>}
     *
     */
    this.commands = new Discord.Collection();
  }

  start(token) {
    fs.readdirSync("./src/Commands")
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        /**
         * @type {Command}
         */
        const command = require(`../Commands/${file}`);
        this.commands.set(command.name, command);
        console.log(`Loaded ${command.name} command`);
      });
    this.login(token)
  }
}

module.exports = Client;
