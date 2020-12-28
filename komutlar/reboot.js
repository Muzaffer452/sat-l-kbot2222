const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage(' **Girişi onaylayın.:crystal_ball: **').then(msg => msg.delete(1000))
.then(() => {
  message.channel.awaitMessages(response => response.content === "yolla gelsin", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage('  **Yeniden Başlıyorum :crystal_ball: **   ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :space_invader: **Bot Yeniden Başlatılıyor** :crystal_ball: `).then(msg => msg.delete(1000))
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' `Yeniden Başlama İşlemini İptal Ettim` ').then(msg => msg.delete(1000));
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['res','yb'],
  permLevel: 4
};

exports.help = {
  name: 'res',
  description: '[YAPIMCI]',
  usage: 'res'
};
 