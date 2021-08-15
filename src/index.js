console.clear();

// Disabling pings in replies (NOTE FOR SELF)
// message.reply({embeds: [firstEmbed], allowedMentions: {repliedUser: false}})

const Client = require("./Structures/Client.js");
const client = new Client();

require("dotenv-flow").config();
const token = process.env.BOT_TOKEN;

client.start(token);
