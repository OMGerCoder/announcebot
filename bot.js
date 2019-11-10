// of course, we need the library
const dcord = require('discord.js');
const dotenv = require('dotenv')
dotenv.config();
const { prefix } = require('./settings.json')
// create the bot
const bot = new dcord.Client();

// run this code when bot is up
bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag} (${bot.user.id}). Run a.help to get started.`)
    bot.user.setActivity(`don't invite me | ${prefix}help`)
})
// listen for messages
bot.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();
    if (msg.content === `${prefix}ping`) {
        msg.channel.send('Test complete.')
        console.log(`Ping command executed by ${msg.author.tag}.`)
    } else if (msg.content === `${prefix}serverinfo`) {
        msg.channel.send(`**Server name:** ${msg.guild.name}\n**Total members:** ${msg.guild.memberCount}`)
        console.log(`Server info command executed by ${msg.author.tag}.`)

    } else if (msg.content === `${prefix}args`) {
        if (!args.length) {
            return msg.channel.send(`You didnt provide arguments, @${msg.author.tag}!`)
        }
        msg.channel.send(`Command name: ${cmd}\nArguments: ${args}`)
    }
})
// login
bot.login(process.env.TOKEN)
// run server so heroku works
require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('bot is running')
}).listen(process.env.PORT || 3001)