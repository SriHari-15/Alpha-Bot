const Event = require("../Structures/Event.js");

module.exports = new Event("ready", (client) => {
  // READY!!
  console.log(`\n${client.user.tag} is online!\n\nBOT LOGS:`);
});
