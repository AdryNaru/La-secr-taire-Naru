exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
    .setColor(0x00FE00)
    .setImage("https://i.pinimg.com/originals/56/3e/e1/563ee155181249f6410d5ba2bd393c11.png")
    message.delete();
    message.channel.send("@everyone Retrouvez NaruSnake en compagnie de AdryNeko ce soir sur Black Desert Online entre 20h30 - 21h sur Twitch www.twitch.tv/narusnake").catch(console.error);
    message.channel.send({embed}).catch(console.error);
    console.log
}