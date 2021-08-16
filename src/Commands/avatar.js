const Command = require("../Structures/Command");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "avatar",
  descriptionL: "Displays the avatar of the user",
  permission: "",
  role: "",

  async run(message, args, client) {
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
    // Automatically assings the message author's ID if no ID is specified
    if (!args[0]) {
      args[0] = message.author.id;
    }

    // This is my method of acceoting both @Users and UIDs... There are more efficient & easier ways to do it but, I just like this
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
