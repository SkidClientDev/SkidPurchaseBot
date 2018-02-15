const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('SkidPurchaseBot Its Ready~!');
    client.user.setStatus('Playing SkidClient')
    client.setStatus('Playing SkidClient')
});



client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('!buy');
  	}
});

client.on('message', message => {
    if (message.content === '!getalt') {
        //privatemessage
    	message.author.sendMessage("We are sorry! Alts its still refilling!.")
  	}
});

client.on('message', message => {
    if (message.content === '!buy') {
        //privatemessage
    	message.author.sendMessage("Skid Its Currently Not For Sale!!.")
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
