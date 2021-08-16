const Command = require("../Structures/Command");
const { MessageEmbed } = require("discord.js");
const announcementChannelId = process.env.ANNOUNCEMENT_CHANNEL;

module.exports = new Command({
  name: "announce",
  description: "Announces an announcement in a specific channel",
  permission: ["MENTION_EVERYONE"],
  role: "",

  async run(message, args, client) {
    if (!announcementChannelId) {
      message.reply({
        content:
          "Please set an announcement channel in your `.env` file using this format:\n" +
          "`ANNOUNCEMENT_CHANNEL=8****************4`",
        allowedMentions: { repliedUser: false },
      });
      return;
    }

    args.shift();

    const announcementChannel = await message.guild.channels.fetch(
      announcementChannelId
    );
    if (!announcementChannel) {
      message.reply({
        content: "Please enter a valid announcement channel in the .env file!",
        allowedMentions: { repliedUser: false },
      });
      console.warn("[ERROR] Invalid announcement channel!");
      return;
    }

    const finalEmbed = new MessageEmbed()
      .setAuthor("Announcement")
      .setColor("BLURPLE")
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(args.toString())
      .setTimestamp();
    message.delete();
    announcementChannel.send({ embeds: [finalEmbed] });
    let pingMsg = await announcementChannel.send("@everyone");
    setTimeout(() => {
      pingMsg.delete();
    }, 3000);
  },
});
