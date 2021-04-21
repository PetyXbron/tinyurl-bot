[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

# Discord link shortener bot
### Discord javascript bot, with you can shorten your long links to http://tinyurl.com/

This discord bot was created just for fun.

This is not a paid promotion with tinyurl.

I found a package on the [npmjs website](https://www.npmjs.com/) which has a function for shorting urls with tinyurl.
This code is useful for beginners or for someone who would be really lazy to use a url shortener on the internet. Have fun.

This code could not be created without **Tinyurl package**
* Tinyurl converter/shortener links
  * [Github Repository](https://github.com/JeffResc/TinyURL-Node.js)
  * [npmjs package](https://www.npmjs.com/package/tinyurl)
  * [Author Github Profile](https://github.com/JeffResc)

## HOW TO USE
1. Download the code from this repository and open it in visual studio code or other coding programs.
2. Configurate the config.js file.
```javascript
module.exports = {
    bot: {
        token: '',
        prefix: '',
        status: '',
        activity: ''
    }
};
```
**Token** - Your unique bot token, just copy it from https://discord.com/developers/applications/.
![TOKEN](https://tinyurl.com/discordbot-token)

**Prefix** - Your custom prefix of the bot, like "!", every command should start with prefix.

**Status** - Discord users and bots can have an activity status. Like you're playing game. You can set on your bot, that he play Minecraft or someting like that.

**Activity** - With custom status, you need to specify activity type. You can choose between PLAYING, LISTENING, WATCHING and COMPETING.

3. You need to use command `npm install` to install all packages. *In visual studio code the console opens with `ctrl+;`*
4. You're finished! Use `npm start` in console and start the bot. Then you can use command `shorten <your link> (alias)`