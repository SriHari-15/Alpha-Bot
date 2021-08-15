const Command = require("../Structures/Command");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "avatar",
  descriptionL: "Displays the avatar of the user",
  permission: "",
  role: "",

  async run(message, args, client) {
    // const embed = new Discord.MessageEmbed()
    //   .setColor("BLURPLE")
    //   .setImage(message.author.avatarURL({ dynamic: true }))
    //   .setFooter(`Command ran by ${message.author.tag}`)
    //   .setTimestamp();
    // message.channel.send({ embeds: [embed] });

    args.shift();

    const failEmbed = new MessageEmbed()
      .setAuthor("Avatar Command")
      .setColor("RED")
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setDescription(
        "Unable to run the command. Please enter a valid user & follow this template:\n`.avatar (or) .avatar <@User/User ID> | .avatar @Sri Hari#0001`"
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

    let finalEmbed = new MessageEmbed()
      .setAuthor("Avatar Command")
      .setColor("BLURPLE")
      .setFooter(
        `Command ran by ${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setImage(targetUser.user.avatarURL({ dynamic: true, size: 256 }));
    message.channel.send({ embeds: [finalEmbed] });
  },
});
