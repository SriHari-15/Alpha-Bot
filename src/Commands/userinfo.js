const Command = require("../Structures/Command");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "userinfo",
  description: "Shows some basic info of a user",
  permission: "",
  role: "",

  async run(message, args, client) {
    args.shift();

    const failEmbed = new MessageEmbed()
      .setAuthor("User Info Command")
      .setColor("RED")
      .setTimestamp()
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(
        "Unable to run the command. Please follow this template:\n" +
          "`.userinfo (or) .userinfo <@User/User ID> | .userinfo @Sri Hari#0001`"
      );
    if (!args[0]) {
      args[0] = message.author.id;
    }

    const target = message.mentions.users.first();
    let uid;

    if (!target) {
      uid = args[0];
    } else {
      uid = target.id;
    }

    let errored = false;
    let targetUser = await message.guild.members.fetch(uid).catch(() => {
      errored = true;
    });

    if (errored) {
      message.channel.send({ embeds: [failEmbed] });
      return;
    }

    const initStatus = targetUser.presence.status
    const status = initStatus.charAt(0).toUpperCase() + initStatus.slice(1)

    const finalEmbed = new MessageEmbed()
      .setAuthor("User Info Command")
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setColor("BLURPLE")
      .setThumbnail(targetUser.user.avatarURL({ dynamic: true }))
      .addFields([
        {
          name: "Tag",
          value: targetUser.user.tag,
        },
        {
          name: "ID",
          value: targetUser.id,
        },
        {
          name: "Created At",
          value: targetUser.user.createdAt.toString(),
        },
        {
          name: "Joined At",
          value: targetUser.joinedAt.toString(),
        },
        {
          name: "Display Name",
          value: targetUser.displayName,
        },
        {
          name: "Presence",
          value: status,
        },
        {
          name: "Highest Role",
          value: `<@&${targetUser.roles.highest.id}>`
        }
      ]);
    message.channel.send({ embeds: [finalEmbed] });
  },
});
