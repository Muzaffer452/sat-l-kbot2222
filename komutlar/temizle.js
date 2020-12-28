const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(" Lütfen Silinicek Mesaj Miktarını Yazın.! :wastebasket: ").then(msg => msg.delete(5000));
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`** ${args[0]}  Adet Mesajı Sildim. :cloud_tornado: ** `).then(msg => msg.delete(1000))
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 4,
  kategori: "moderasyon"
};

exports.help = {
  komut: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};
