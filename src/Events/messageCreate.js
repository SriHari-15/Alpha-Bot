const Event = require("../Structures/Event.js");

const prefix = ".";

const botLog = require("../botLog.js");

// const fs = require("fs");

module.exports = new Event("messageCreate", async (client, message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.substring(prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => (cmd.name = args[0]));
  if (!command) return;

  const permissions = message.member.permissions.has(command.permission, true);
  if(!permissions && command.permission != "") return;

  const role = await message.member.roles.cache.has(command.role)
  if(!role && command.role != "") return;

  command.run(message, args, client);

  botLog(message);
  // fs.appendFile("log.txt", log_content + "\n", (err) => {
  //   if (err) throw err;
  // });
});
