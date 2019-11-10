// of course, we need the library
const dcord = require('discord.js');
const dotenv = require('dotenv')
dotenv.config();
const prefix = 'a.'
// create the bot
const bot = new dcord.Client();

// run this code when bot is up
bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag} (${bot.user.id}). Run a.help to get started.`)
    bot.user.setActivity(`don't invite me | ${prefix}help`)
})
// listen for messages
bot.on('message', msg => {
    if (msg.content === `${prefix}ping`) {
        msg.channel.send('Test complete.')
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