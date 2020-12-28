  

const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;


var mutelirolu = "「🔇」Cezalı" 

module.exports.run = async (bot, message, args) => {

  let mutekisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mutekisi) return message.reply(` Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}cezalı <@kullanıcı> 1dakika-1saat-1gün\``)
  if(mutekisi.hasPermission("MANAGE_MESSAGES")) return message.reply(`Yetkili bir kişiyi cezalı atamam :no_entry_sign: \nDoğru Kullanım; \`${prefix}cezalı <@kullanıcı> </1dk/1sa/1g>\``)
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if(!muterol){
    try{
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutezaman = args[1]
  .replace(`dakika`, `m`)
  .replace(`saat`, `h`)
  .replace(`gün`, `d`)

  if(!mutezaman) return message.reply(`:warning: Lütfen bir zaman giriniz! \nDoğru Kullanım; \`${prefix}cezalı <@kullanıcı> </1dakika/1saat/1gün>\``)

  await(mutekisi.addRole(muterol.id));
  message.reply(`<@${mutekisi.id}> kullanıcısı ${args[1]} süresi boyunca karantina'da!`);

  setTimeout(function(){
    mutekisi.removeRole(muterol.id);
    message.channel.send(`<@${mutekisi.id}> kullanıcısının cezası  sona erdi!`);
  }, ms(mutezaman));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: "cezalı",
    description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar cezalı'ya atar",
    usage: "cezalı <@kullanıcı> </1dakika/1saat/1gün>"
  };