const Event = require("../Structures/Event.js");
const { MessageEmbed } = require("discord.js");

const prefix = ".";

const botLog = require("../botLog.js");

// const fs = require("fs");

module.exports = new Event("messageCreate", async (client, message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.substring(prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => cmd.name == args[0]);
  if (!command) return;

  const capCommand =
    command.name.charAt(0).toUpperCase() + command.name.slice(1) + " Command";

  const permissions = message.member.permissions.has(command.permission, true);
  const permsFailEmbed = new MessageEmbed()
    .setAuthor(capCommand)
    .setColor("RED")
    .setFooter(`Command ran by ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription(
      "You do not have the required permissions to run this command!"
    );
  if (!permissions && command.permission != "")
    return message.reply({
      embeds: [permsFailEmbed],
      allowedMentions: { repliedUser: false },
    });

  const roleFailEmbed = new MessageEmbed()
    .setAuthor(capCommand)
    .setColor("RED")
    .setFooter(`Command ran by ${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setDescription("You do not have the required roles to run this command!");
  const role = await message.member.roles.cache.has(command.role);
  if (!role && command.role != "")
    return message.reply({
      embeds: [roleFailEmbed],
      allowedMentions: { repliedUser: false },
    });

  command.run(message, args, client);

  botLog(message);
  // fs.appendFile("log.txt", log_content + "\n", (err) => {
  //   if (err) throw err;
  // });
});
