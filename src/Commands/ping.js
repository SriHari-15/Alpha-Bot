const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
  name: "ping",
  description: "Shows the ping of the bot",
  permission: "",
  role: "",

  async run(message, args, client) {
    const firstEmbed = new Discord.MessageEmbed()
      .setAuthor("Ping Command")
      .setColor("YELLOW")
      .setFooter(`Command ran by ${message.author.tag}`)
      .setTimestamp()
      .setDescription("Calculating ping...");
    const sentMessage = await message.reply({embeds: [firstEmbed], allowedMentions: { repliedUser: false }});
    const ping = sentMessage.createdTimestamp - message.createdTimestamp;
    const secEmbed = new Discord.MessageEmbed()
      .setAuthor("Ping Command")
      .setColor("GREEN")
      .setFooter(`Command ran by ${message.author.tag}`)
      .setTimestamp()
      .setDescription(`API Latency: ${client.ws.ping}\nBot Latency: ${ping}`);
    sentMessage.edit({ embeds: [secEmbed] });
  },
});
