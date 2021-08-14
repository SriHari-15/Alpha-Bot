console.clear();
// const Discord = require("discord.js");

const Client = require("./Structures/Client.js");
const client = new Client();

require("dotenv-flow").config();
const token = process.env.BOT_TOKEN;
const prefix = ".";

client.start(token);
