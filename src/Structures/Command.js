const Discord = require("discord.js");
const Client = require("./Client.js");

// This class collects & stores all the Commands

/**
 *
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {Client} client
 */
function RunFunction(message, args, client) {}

class Command {
  /**
   * @typedef {{name: string, description: string, permission: Discord.PermissionString[] | Discord.PermissionString, role: Discord.Role.id, run: RunFunction}} CommandOptions
   * @param {CommandOptions} options
   */
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.permission = options.permission;
    this.role = options.role;
    this.run = options.run;
  }
}

module.exports = Command;
