const Event = require("../Structures/Event.js");

const prefix = "."

const fs = require("fs")

module.exports = new Event("messageCreate", (client, message) => {
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.substring(prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => (cmd.name = args[0]));

  if (!command) return;

  command.run(message, args, client);

  fs.appendFile("log.txt", message.content + "\n", (err) => {
    if (err) throw err;
  })
});
