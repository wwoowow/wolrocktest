const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")
const fs = require("fs");
const db = require('croxydb')
const config = require("./config.json");

const Rest = require("@discordjs/rest");
const DiscordApi = require("discord-api-types/v10");

const client = new Discord.Client({
	intents:  3276543,
    partials: Object.values(Discord.Partials),
	allowedMentions: {
		parse: ["users", "roles", "everyone"]
	},
	retryLimit: 3
});

global.client = client;
client.commands = (global.commands = []);

/*                         SLASH COMMANDS                               */

console.log(`[-] ${fs.readdirSync("./commands").length} komut algılandı.`)

for(let commandName of fs.readdirSync("./commands")) {
	if(!commandName.endsWith(".js")) return;

	const command = require(`./commands/${commandName}`);	
	client.commands.push({
		name: command.name.toLowerCase(),
		description: command.description.toLowerCase(),
		options: command.options,
		dm_permission: false,
		type: 1
	});

	console.log(`[+] ${commandName} komutu başarıyla yüklendi.`)
}

/*                         EVENTS                                    */

console.log(`[-] ${fs.readdirSync("./events").length} olay algılandı.`)

for(let eventName of fs.readdirSync("./events")) {
	if(!eventName.endsWith(".js")) return;

	const event = require(`./events/${eventName}`);	
	const evenet_name = eventName.split(".")[0];

	client.on(event.name, (...args) => {
		event.run(client, ...args)
	});

	console.log(`[+] ${eventName} olayı başarıyla yüklendi.`)
}

/*                     LOADING SLASH COMMANDS                     */

//

client.once("ready", async() => {
	const rest = new Rest.REST({ version: "10" }).setToken(process.env.token);
  try {
    await rest.put(DiscordApi.Routes.applicationCommands(client.user.id), {
      body: client.commands,  //
    });
  } catch (error) {
    throw error;
  }
});

client.login(process.env.token).then(() => {
	console.log(`[-] Discord API'ye istek gönderiliyor.`);
	eval("console.clear()")
}).catch(() => {
	console.log(`[x] Discord API'ye istek gönderimi başarısız.`);
});
const { joinVoiceChannel } = require('@discordjs/voice')
client.on('ready', () => {
  let channel = client.channels.cache.get("1035496379637841931") 
  

      const VoiceConnection = joinVoiceChannel({
          channelId: channel.id, 
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator 
  });
})
/*
resim mesajları
*/

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'oğuz') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1074086478222729338/1124021503281868911/IMG_20230615_201022_108.jpg');
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'oğuz saz') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1012301667171053608/1124306579282468975/IMG_20230630_145157_481.jpg');
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'efe') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1012301667171053608/1124306579685118033/IMG_20230630_145153_425.jpg');
  }
});


client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === 'berat') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1018218523664846888/1117155810091487353/beratnew2.png');
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === '!gelirmi') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1018218523664846888/1115660484406939678/image.png');
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === '!berat2') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1018218523664846888/1117153424740458516/image.png');
  }
});

client.on('messageCreate', msg => {
  if (msg.content.toLowerCase() === '!eray') {
    msg.channel.send('https://cdn.discordapp.com/attachments/1012301667171053608/1124307428398346290/Screenshot_20230629-152812.jpg');
  }
});