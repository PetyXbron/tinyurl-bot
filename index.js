const Discord = require('discord.js');
const TinyURL = require('tinyurl');
const bot = new Discord.Client({
    disableEveryone: true,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
  });
const config = require('./config');
const prefix = config.bot.prefix;
const status = config.bot.status;
const activity = config.bot.activity.toUpperCase()
const /*First command - link shortener*/mainAliases = [`${prefix}short`, `${prefix}use`, `${prefix}tinyurl`, `${prefix}shorten`, `${prefix}url`];
const /*Second command - help command */secondAliases = [`${prefix}help`, `${prefix}how`, `${prefix}helpme`, `${prefix}commands`, `${prefix}cmds`]

bot.on('ready', async () => {
  bot.user.setActivity(status, {type: activity})
  console.log("✅ " + bot.user.username + " is now working")
});


bot.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const msgArray = message.content.split(" ");
    const cmd = msgArray[0];
    const args = msgArray.slice(1);

    if (new Set(mainAliases).has(cmd)) {
        const link = args[0];
        const alias = args[1];
        const embedNoLink = new Discord.MessageEmbed().setColor('#be1931').setDescription("⛔ " + "**Your message doesn't contain the link!**");
        if (!link) return message.channel.send(embedNoLink);
    
        if(!alias) {
          TinyURL.shorten(link,
            function(res, err) {
              if (err | res === 'Error') {
                if (err) console.log(err);
                const embedError = new Discord.MessageEmbed().setColor('#be1931').setDescription("⛔ " + `**[Your link](${link}) could not be shortened!**`)
                return message.channel.send(embedError);
              }
              const result = res
              const embedSuccess = new Discord.MessageEmbed().setColor('#77b255').setDescription(`✅ [**Your link**](${link}) was shortened to - **${result}**`)
              message.channel.send(embedSuccess);
            }
          );
        } else if (alias) {
          const informace = { 'url': link, 'alias': alias }
          TinyURL.shortenWithAlias(informace,
            function(res, err) {
                if (err | res === 'Error') {
                  if (err) console.log(err);
                  const embedError = new Discord.MessageEmbed().setColor('#be1931').setDescription("⛔ " + `**[Your link](${link}) could not be shortened!**`)
                  return message.channel.send(embedError);
                }
                const result = res;
                const embedSuccess = new Discord.MessageEmbed().setColor('#77b255').setDescription(`✅ [**Your link**](${link}) was shortened to - **${result}**`)
                message.channel.send(embedSuccess);
            }
          );
        };
    };

    if (new Set(secondAliases).has(cmd)) {
      const embedHelp = new Discord.MessageEmbed()
        .setColor('#0377fc')
        .setAuthor(bot.user.username, bot.user.displayAvatarURL())
        .setTitle('Help Command')
        .setDescription(`Oh, hello. There're only 2 commands.\n> Main \`${mainAliases}\`\n> Help \`${secondAliases}\``);
      message.channel.send(embedHelp);
    }
});


bot.login(config.bot.token);