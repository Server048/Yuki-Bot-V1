const { Client } = require('discord.js');
const bot = new Client;
const token = "ODY1ODk3MjQ1MDM5MDAxNjQw.YPKrpg.9e96FkRG7ZCXLiySmCfJm8_RUnY"; // TOKEN BOT KAMU
var PREFIX = "gt@"; // PREFIX BOT KAMU

bot.on('ready', () => {
    console.log('Bot ZeroTopia Online')

    bot.user.setActivity("Register Bot By : Yuki Azura", { 
        type: "PLAYING"
    }).catch(console.error);
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');
    if(!message.content.startsWith(PREFIX)) return;
    switch (args[0]) {

    case 'register':

            if(message.channel.type == "dm") return message.channel.send("Kamu tidak bisa registrasi dari DM")
                const shifter = args.shift()
            if(!args.length) return message.channel.send("Mohon berikan nama untuk di set")
                const nick = "[ Player ZeroTopia ] " + args.join(" ")
            if(nick.length > 32) return message.channel.send("Nickname terlalu panjang, mohon berikan yang lebih singkat")
            try {
                    message.member.roles.add("866130882233237505") //Role Yang Mau DiSet
                    message.member.setNickname(nick)
                    return message.reply("Accept Jangan Lupa Subscribe Channel **Yuki Azura**");
                } catch(e) {
                    return message.channel.send("Ada sebuah kesalahan disaat melaksanakan command.")
                            }
            break;
    }
})

bot.login(token);
