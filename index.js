const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const token = process.env.TOKEN

client.on("ready", () => {

	var memberCount = client.users.size;
	var serverCount = client.guilds.size;
		client.user.setGame("candy crush au bureau");
		client.user.setStatus("online");
	console.log("Je suis Online");
	console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
});
// dossier commands //
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    console.log
    files.forEach(file => {
        console.log
        let eventFunction = require(`./commands/${file}`);
        console.log
        let eventName = file.split(".")[0];
        console.log
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
        console.log
    });
});


client.on("message", (message) => {
    console.log
    if (message.author.bot) return;
    console.log
    if (message.content.indexOf(config.prefix) !==0) return;
    console.log
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // dossier commands//
    try { 
        console.log
        let commandFile = require(`./commands/${command}.js`);
        console.log
        commandFile.run(client, message, args);
        console.log

        } catch (err) {
            console.error(err);
            console.log
        }

    });

//bienvenue et départ//

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} putain pas lui`)
});

client.on("guildMemberRemove", member => {
    memeber.guild.channels.find("name", "bienvenue").send(`${member} c'est ça casse toi`)
});


client.login(token);