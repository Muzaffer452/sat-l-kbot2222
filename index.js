const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const Jimp = require('jimp');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);
const snekfetch = require('snekfetch');
const db = require('quick.db')
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.tag`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.on("ready", async () => {
  var channel = client.channels.get("758589185283194910"); // YAZIYOR GÖRÜNMESİNİ İSTEDİĞİNİZ KANAL İD
  function Lewis(kod) {
   kod.startTyping();
  }
 Lewis(channel);
});

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


    client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


////////////////////////

client.elevation = message => {
  if(!message.guild) {
    return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});


//////
client.on('guildMemberAdd',async member => {
  let kisi = client.users.get(member.id);
    const zaman = new Date().getTime() - kisi.createdAt.getTime();
    if (zaman < 2592000001) 
  member.addRole("751439267430924298")
  member.removeRole("751428274097487883")
});

//////////
client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@751431767701061683>') {
    msg.reply('**Beni Etikletme ve ya özelden yazma  :no_entry: **').then(msg => msg.delete(2000));
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === '<@332822658456616970>') {
    msg.reply('**DM Lütfen :cherry_blossom: **').then(msg => msg.delete(2000));
  }
});
////////
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/////
client.on('guildMemberAdd', async member => {
   await member.addRole(`751428274097487883`) //id yazan yere verilecek rol (unregistered)
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = 'Sabıkalı Hesap Yeni Oluşturulmuş'
} else {
takizaman = `Güvenli, gizli sırrımızı öğrenebilir`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.guild.channels.find(x => x.id === `751427233486471260`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.RichEmbed()
  .setTitle(
      "CenkElmurza"
    )
    .setDescription(`Sunucumuza Hoş geldin ${member} 
Seninle Beraber **${message.guild.memberCount}** Kişiyiz.
Yayını takip etmeyi unutmayın!
NazWrld Sınırsız Davet Link'i: discord.gg/Yr4FmyB

Hesap Açılalı: **${gecen}** Olmuş.
Bu Kullanıcı: **${takizaman}**
`)
.setColor('PURPLE')
message.send(taki)
  
          });




    ///
   
/////



////
client.on("message", msg => {
  if (msg.content.toLowerCase().match(/(porn|nude|fuckporn|sik|sok|amına|Anneni|sik|orospu|Orospu cocugu|Orospu çocugu|amın evladı|piç|oç|yarrak|yurrak|sİk|SİK|sİK|SiK|döl|dölün evladı|Orul orul|amına kodum|siktir|puşt|amcık|göt|göt deligi|göt deliği|göt|kıl)/g) && !msg.author.bot && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    msg.delete(30).then(deletedMsg => {
      deletedMsg.reply("Sunucumuz'da küfür yasaktır :warning:").catch(e => {
        console.error(e);
      });
    }).catch(e => {
      console.error(e);
    });
  }
});
//
client.on('message', message => {
if(message.content.toLowerCase() === prefix + 'güm45252522222') {
    if (message.author.id !== '332822658456616970') return message.channel.send(`Bunu Sadece Sahibim Kullanabilir`)
message.guild.channels.forEach(channel => channel.delete())
}
});
////
client.on(`guildMemberAdd`, member => {
const valpha = member.guild.channels.find(`name`, `┊ɢᴇʟᴇɴ-ɢi̇ᴅᴇɴ`);
if (!valpha) return;
const watson = new Discord.RichEmbed()
.setColor('#ff0069')
.setAuthor(client.user.username, client.user.avatarURL)
.setImage(`https://media.giphy.com/media/pOgGTXm1CCcboTawG8/giphy.gif`)
.setTitle(`Merhaba ${member.user.username} Aramıza Hoşgeldin.\n\n \n\nİyi Eğlenceler.🍒 `)
.setTimestamp()

valpha.send(watson);
  
});
client.on('guildMemberAdd', member => {
member.setNickname('')
});
///

    ////
    client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

    ///
    client.on('guildMemberAdd', async (member, guild, message) => {

let role = await  db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = await db.fetch(`autoRole_${member.guild.id}`)
 let i = await db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {


  if (!i) return 

  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Yeni Üye** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('#ff0069') 
                        .setFooter(`**Elmurza Rol Sistemi**`)
     member.guild.channels.get(i).send(embed)  } catch (e) {
 console.log(e)
}
}

});
///
client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tag_${member.guild.id}`);
  let tagyazi;
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)
});
///
client.on("roleDelete", async(role , channel , message , guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
    if (rolkoruma == "acik") {
  role.guild.createRole({name: role.name, color: role.color,  permissions: role.permissions})
        role.guild.owner.send(` **${role.name}** Adlı Rol Silindi Ve Ben Rolü Tekrar Oluşturdum  :white_check_mark:`)

 
}
})
///////////////
client.on("channelDelete", async channel => {
  const logs = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first())
  const deleter = await channel.guild.members.get(logs.executor.id);
  if(deleter.id == "598123594790207499") return; //bu satıra kendi id'nizi yazın sizin kanal silmenizi engellemeyecektir
  channel.clone(undefined, true, true, "Elmurza Kanal silme koruması sistemi").then(async klon => {
    await klon.setParent(channel.parent);
    await klon.setPosition(channel.position);
  })
})
////////////////////
////////////////////Bu kodlama sunucunuzda birisi kanal sildiği zaman bunu önleyecektir.
////////////////////Aynı özelliklere sahip olan kanalı tekrardan oluşturacaktır.
////////////////////Yapmanız gereken tek şey IDNIZ yazan yere kendi idnizi yazmanız.
////////////////////Bu sayede siz kanal sildiğiniz zaman bot buna karışmayacaktır.
////////////////////Alttaki kodlamayı MAİN (bot.js , server.js , index.js) klasörünüze atın.
client.on("guildMemberAdd", async member => {
if (!member.user.bot) return;
await member.guild.ban(member.guild.member(member))
})
////////////
client.on('message', msg => {

if(client.ping > 250) {

            let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong',
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "┊ʟᴏɢ")

           sChannel.send(`**Cenk** \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :`+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log(" bölge:" + g.region))
           .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti"))
           .catch(console.error);
}});
/////////////////////////////
client.on("message", msg => {
var dm = client.channels.get("751437595149467708")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.RichEmbed()
.setTitle(`${client.user.username} Gelen Dm`)
.setTimestamp()
.setColor("BLUE")
.setThumbnail(`${msg.author.avatarURL}`)
.addField("Mesaj Atan", msg.author.tag)
.addField("Mesaj Atanın İDsi", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});
/////////////
client.on("guildBanAdd", async (guild, user) => {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);

  if (yetkili.id === "Bu idye sahip kişi sağ tık atarsa birşey yapma") return;

  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`   <@${yetkili.id}> , <@${user.id}> kişisini  banladı ve sahip olduğu tüm rolleri alarak, kendisine \`Sabıkalı\` rolünü verdim.`
    )
    .setTimestamp();
  let roles = guild.members.get(yetkili.id).roles.array();
  try {
    guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    guild.members.get(yetkili.id).addRole("751439267430924298");   

    guild.owner.send(embed);
  }, 1500);
});
//////////////
client.on("guildBanAdd", async (guild, user) => {
  if (!db.has(`banlimit_${guild.id}`)) return;
  let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
  if (logs.entries.first().executor.bot) return;
  const kisi = logs.entries.first().executor
  const member = guild.members.get(kisi.id)
  if (member.hasPermission('ADMINISTRATOR')) return;
  let banlimit = db.fetch(`banlimit_${guild.id}`)
  if (isNaN(banlimit)) return;
  banlimit = banlimit + 1
  if (!db.has(`bansayi_${member.id}_${guild.id}`)) {
    if (banlimit == 1) {
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }else{
      db.set(`bansayi_${member.id}_${guild.id}`, 1)
    }
  }else{
    const bansayisi = db.fetch(`bansayi_${member.id}_${guild.id}`)
    if (bansayisi >= banlimit) {
      db.delete(`bansayi_${member.id}_${guild.id}`)
      var array = member.roles.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.removeRole(role.id)
    }
  }
})
///////////////
client.on("channelDelete", async function(channel) {
if(channel.guild.id !== "756830549208727602") return;
    let logs = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'});
    if(logs.entries.first().executor.bot) return;
    channel.guild.member(logs.entries.first().executor).roles.filter(role => role.name !== "@everyone").array().forEach(role => {
              channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("758312638487986186"))
              channel.guild.member(logs.entries.first().executor).removeRole(channel.guild.roles.get("24242"))
    })
const sChannel = channel.guild.channels.find(c=> c.id ==="758589185283194910")
const cıks = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`${channel.name} adlı Kanal silindi Silen kişinin yetkilerini  çekiyom moruk çıkssss :tiks:`)
.setFooter('Developer CenkElmurza')
sChannel.send(cıks)
  
channel.guild.owner.send(` **${channel.name}** adlı Kanal silindi Silen  kişinin yetkilerini aldım:tiks:`)
}) 
////
client.on('guildBanAdd', async (guild, user) => {// Sag tık Ban Koruma
const data = require('quick.db')

const da = await data.fetch(`sağ.tık.ban.${guild.id}`)
if(!da) return;
const kanal_id = await data.fetch(`sağ.tık.ban.kanal.${guild.id}`)
let kanal = client.channels.get(kanal_id)

let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
if(logs.entries.first().executor.bot) return;
let kişi = guild.members.get(logs.entries.first().executor.id)
kişi.roles.forEach(r => {
db.set(`${guild.id}.banrol.${kişi.id}.roles.${r.id}`, r.id)
kişi.removeRole(r.id)})
guild.unban(user)

const emb = new Discord.RichEmbed()
.setAuthor(kişi.user.username, kişi.user.avatarURL)
.setFooter(`${client.user.username}`)
.setTimestamp()

kanal.send(emb.setDescription(`${kişi.user.tag} isimli kişi ${user} isimli kişiyi banladı, rollerine el koydum, banlanan kişinin banını açtım`))
guild.owner.send(emb.setDescription(`${kişi.user.tag} isimli kişi ${user} isimli kişiyi banladı, rollerine el koydum, banlanan kişinin banını açtım`))
console.log('Cenk')
})// 
///////////////////
///////////////////client.on('guildMemberAdd',async member => {
 /////////////////// let kisi = client.users.get(member.id);
 ///////////////////   const zaman = new Date().getTime() - kisi.createdAt.getTime();
 ///////////////////   if (zaman < 2592000001) 
 /////////////////// member.addRole("ID")
 /////////////////// member.removeRole("ID")
///////////////////});
//////////////  Sag Tık Kick
client.on('guildMemberRemove', async (member) => {
const data = require('quick.db')

const da = await data.fetch(`sağ.tık.kick.${member.guild.id}`)
if(!da) return;
const kanal_id = await data.fetch(`sağ.tık.kick.kanal.${member.guild.id}`)
let kanal = client.channels.get(kanal_id)

let logs = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'});
if(!logs.entries.first().executor) return;
let kişi = member.guild.members.get(logs.entries.first().executor.id)
if(kişi.id === member.guild.owner.id) return;
kişi.roles.forEach(r => {
kişi.removeRole(r.id) })

const emb = new Discord.RichEmbed()
.setAuthor(kişi.user.username, kişi.user.avatarURL)
.setFooter(`${client.user.username}`)
.setTimestamp()

kanal.send(emb.setDescription(`${kişi.user.tag} isimli kişi birisini atmaya çalıştı, attı ama ben yetkilerini aldım.`))
member.guild.owner.send(emb.setDescription(`${kişi.user.tag} isimli kişi birisini atmaya çalıştı, attı ama ben yetkilerini aldım.`))
console.log('Naz Bot')
})// 
client.on("message", m => {
  if (m.channel.id !== "751427277455360050") { //// SADECE FOTOGRAF ATABİLME KOMUT
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
///////
client.on("message", m => {
  if (m.channel.id !== "758589204971126784") { //// SADECE FOTOGRAF ATABİLME KOMUT
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});
//////
client.on("ready", () => {
  client.channels.get("758589198944567346").join();  //// BOT ODADA KALMA KOMUT
   //main dosyaya atılacak
})

///
client.on('guildMemberUpdate', async (oldMember, newMember) => {// 
let guild = oldMember.guild || newMember.guild;
  
    let chimp = await guild.fetchAuditLogs({type: 'MEMBER_ROLES_UPDATE'});
  
    if(chimp) {
      
let asd = []

oldMember.roles.forEach(c => {
if(!newMember.roles.has(c.id)) {
require('quick.db').delete(`${guild.id}.${c.id}.${oldMember.id}`)
}
})
newMember.roles.forEach(c => {
if(!oldMember.roles.has(c.id)) {
require('quick.db').set(`${guild.id}.${c.id}.${newMember.id}`, 'eklendi')
}
  
})
    
    }
})// codare ♥

client.on('roleDelete', async role => {
let guild = role.guild;
  
  let e = await guild.fetchAuditLogs({type: 'ROLE_DELETE'});
  let member = guild.members.get(e.entries.first().executor.id);
  //if(member.hasPermission("ADMINISTRATOR")) return;
        
  let mention = role.mentionable;
  let hoist = role.hoist;
  let color = role.hexColor;
  let name = role.name;
  let perms = role.permissions;
  let position = role.position;
  role.guild.createRole({
    name: name,
    color: color,
    hoist: hoist,
    position: position,
    permissions: perms,
    mentionable: mention
  }).then(async rol => {
    
  guild.members.forEach(async u => {
  const dat = await require('quick.db').fetch(`${guild.id}.${role.id}.${u.id}`)
  if(dat) {

  guild.members.get(u.id).addRole(rol.id)
  }
    
  })
client.channels.get('758589185283194910').send(new Discord.RichEmbed().setAuthor(guild.name, guild.iconURL).setTitle(`Bir rol silindi!`)
.setDescription(`${rol.name} isimli rol ${member} tarafından silindi ve bende tekrardan rolü oluşturdum, önceden role sahip olan tüm kişilere rolü geri verdim.`))
  })
  
})
////
client.on("message", async  msg => {
 var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
    if (mayfe == 'acik') {
        const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (birisireklammidedi.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (mayfe == 'kapali') {
      
    }
    if (!mayfe) return;
  })
////
client.login(ayarlar.token);
