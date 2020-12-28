const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  const ban = new Discord.RichEmbed()
  .addField(`**Waresunucum.com**`, `{user.username}#${user.discriminator} adlı kişi ${reason} sebebiyle banlandı.`)
  .setColor('#ff0069')
  .setImage("https://media.giphy.com/media/3ohhwvKHGA57ATprG0/giphy.gif") 
  .setTimestamp() 
  let guild = message.guild
  let modlog = guild.channels.find('name', '🔴𝐆𝐈𝐑𝐈𝐒-𝐋𝐎𝐆');
  if (!modlog) return message.reply('`ban-log` kanalını belirtiniz.');
  if (reason.length < 1) return message.reply('Lütfen Kişiyi etiketleyin');
  if (message.mentions.users.size < 1) return message.reply('Banlanacak kişi').catch(console.error);
  if (!message.guild.member(user).bannable) return message.reply('Yetkili banlama şansım yok.');
  message.guild.ban(user, 2)
  message.channel.send(ban)
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setImage("https://media.giphy.com/media/Vh2c84FAPVyvvjZJNM/giphy.gif")
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
    message.react("<a:598503909740511243:616887666537005066>")
  guild.channels.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};