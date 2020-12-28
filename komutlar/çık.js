exports.run = async (client, message) => {
    if (!message.member.voiceChannel) { return message.channel.send("Beni bulunduğum odadan çıkarman için bir sesli kanalda bulunmak gerek!"); }
  
    message.member.voiceChannel.leave();
  };
  
  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 4,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "çık",
    description: "Leaves the VC that you are in.",
    usage: "",
    usageDelim: "",
  };