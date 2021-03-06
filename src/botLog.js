require("dotenv-flow").config();
const bot_log_id = process.env.BOT_LOG_CHANNEL; //Replace it with your bot log ID
const Discord = require("discord.js");

/**
 *
 * @param {Discord.Message} message
 * @returns {null}
 */
module.exports = async (message) => {
  if (!bot_log_id) return; // Ensures that the script runs only if there is a channel specified in the .env file

  const { guild } = message;
  const logChannel = await guild.channels.fetch(bot_log_id);

  // Prevents invalid channel error
  if (!logChannel) {
    console.warn(
      "[ERROR] Invalid bot log channel! Please enter a valid channel in the .env file"
    );
    return;
  }

  let channelType;
  let channelId;
  // Prevents the log freaking out if someone uses a command in DMs (which does not work.. but just in case)
  if (message.channel.type == "DM") {
    channelType = "DM";
    channelId = "DM";
  } else {
    channelType = message.channel.name;
    channelId = `<#${message.channelId}>`;
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor("BLACK")
    .setDescription(`Command ran: ${message.content}\nChannel: ${channelId}`);
  logChannel.send({ embeds: [embed] });

  const moment = require("moment");
  const time = moment().format("DD-MM-YYYY | HH:mm:ss");
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
};
