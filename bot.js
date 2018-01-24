const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('Help!');
  	}
});

client.on('message', message => {
    if (message.content === '!website') {
    	message.reply('https://bbni.ml');
  	}
});

client.on('message', message => {
    if (message.content === '!bot') {
    	message.reply('Online');
  	}
});

client.on('message', message => {
    if (message.content === '!status') {
    	message.author.sendMessage("Your message here.")
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
