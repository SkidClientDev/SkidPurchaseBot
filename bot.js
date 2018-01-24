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
    if (message.content === '!getalt') {
        //privatemessage
    	message.author.sendMessage("We are sorry! Alts its still refilling!.")
  	}
});

client.on('message', message => {
    if (message.content === '!order') {
        //privatemessage
    	message.author.sendMessage("Welcome To BBNI Order Panel!\nPlease Do !order intro If You Want To Buy Intro!.")
  	}
});

client.on('message', message => {
    if (message.content === '!order intro') {
        //privatemessage
    	message.author.sendMessage("To Order An Intro Go To This Website: https://bbni.ml")
  	}
});


client.on('message', message => {
    if (message.content === '!bbni') {
        //privatemessage
    	message.author.sendMessage("www.instagram.com/bbnifx")
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
