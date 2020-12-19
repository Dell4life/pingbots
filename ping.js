
const Discord = require('discord.js');

const client = new Discord.Client ();

const { prefix, token} = require ('./config1.json');



client.once('ready', () => {
    console.log("connected as " + client.user.tag)

    client.user.setActivity('p!ping')

});





//nyooom!
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
                var ping = Date.now() - message.createdTimestamp + " msA";
		console.log(ping);
		message.channel.send(ping);
	}else if (command === 'invite') {
          	message.channel.send('https://discord.com/oauth2/authorize?client_id=789205620367818762&scope=bot')

        } else {
		message.channel.send("use o!ping")


        }

});

client.login(token);

