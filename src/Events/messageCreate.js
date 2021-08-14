const Event = require("../Structures/Event.js");

const prefix = ".";

// const fs = require("fs");

module.exports = new Event("messageCreate", (client, message) => {
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.substring(prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => (cmd.name = args[0]));

  if (!command) return;

  command.run(message, args, client);

  const moment = require("moment");
  const time = moment().format("DD-MM-YYYY | HH:mm:ss");
  let channelType;
  if (message.channel.type == "DM") {
    channelType = "DM";
  } else {
    channelType = message.channel.name;
  }

  const log_content =
    "[" +
    time +
    "] " +
    message.author.tag +
    " | " +
    message.channel.name +
    " | " +
    message.content;

  console.log(log_content);
  // fs.appendFile("log.txt", log_content + "\n", (err) => {
  //   if (err) throw err;
  // });
});