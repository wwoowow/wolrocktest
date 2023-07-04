const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")
const db = require("croxydb")

module.exports = {
  name: Discord.Events.ClientReady,

  run: async(client, message) => {
    console.log(`${client.user.tag} Aktif!`);
    const activities = [
      "beratada tten!",
      "efeye tten",
      "sus zehra"
    ]
    
    setInterval(async() => {
      client.user.setPresence({ activities: [{ name: `${activities[Math.floor(Math.random() * activities.length)]}` }], status: 'idle' });
    }, 100 * 15);
	db.set(`botAcilis_`, Date.now())


  }
}