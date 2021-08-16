const Command = require("../Structures/Command.js");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "purge",
  description: "Purges an amount of messages",
  permission: "MANAGE_MESSAGES",
  role: "",

  async run(message, args, client) {
    const amt = args[1];

    const failEmbed = new MessageEmbed()
      .setAuthor("Purge Command")
      .setColor("RED")
      .setTimestamp()
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(
        "Unable to run the command. Please follow this template:\n`.purge <count> | .purge 10`"
      );
    if (!amt || isNaN(amt))
      return message.channel.send({ embeds: [failEmbed] });

    const amtParsed = parseInt(amt);

    const failEmbed2 = new MessageEmbed()
      .setAuthor("Purge Command")
      .setColor("RED")
      .setTimestamp()
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription("You cannot purge more than 100 messages!");
    if (amtParsed > 100) return message.channel.send({ embeds: [failEmbed2] });

    message.channel.bulkDelete(amtParsed);

    const successEmbed = new MessageEmbed()
      .setAuthor("Purge Command")
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(
        `<a:am_gifyes:868165574419710032> Successfully cleared ${amtParsed} messages!`
      );
    const resultMsg = await message.channel.send({ embeds: [successEmbed] });
    setTimeout(() => {
      resultMsg.delete();
    }, 3000);
  },
});
