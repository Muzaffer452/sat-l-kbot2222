
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

      if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ').then(msg => msg.delete(1000));
    return message.author.sendEmbed(ozelmesajuyari); }

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.').then(msg => msg.delete(1000));

  
    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol) return message.channel.send(':no_entry: Otorol ayarlamanız için bir rol etiketlemeniz gerek. `a!otorol ayarla @Rol #kanal`').then(msg => msg.delete(1000));
  else newRole = message.mentions.roles.first().id
  let isim = message.mentions.roles.first().name  
  let otorolkanal = message.mentions.channels.first();
  if (!otorolkanal) return message.channel.send(':no_entry: Otorol ayarlamanız için bir rol etiketlemeniz gerek. `g!otorol ayarla @Üye #kanal`').then(msg => msg.delete(1000));
    db.set(`otorolisim_${message.guild.id}`, isim)
  let i = await  db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id)
  let otorol = await db.set(`autoRole_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send(":no_entry: Etiketlediğiniz rol bulunamadı, etiketlediğiniz rolün etiketlenebilirliğinin aktif olduğundan emin olunuz.").then(msg => msg.delete(1000));
    message.channel.send(`Otorol, <@&${newRole}> mesaj kanalı <#${i}> olarak ayarlandı.`)  
     
  } 

  if (args[0] == 'kapat') {
    

    
    
    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`autoRole_${message.guild.id}`)

    message.channel.send(`Otorolü başarıyla kapattım.`).then(msg => msg.delete(1000));
  }
};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['oto-rol'],
    permLevel: 4
}

exports.help = {
    name: 'otorol',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
}