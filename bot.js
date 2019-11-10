const dcord = require('discord.js');
const bot = new dcord.Client();

bot.once('ready', () => {
    console.log(`Logged in as ${bot.user.tag} (${bot.user.id}). Run a.help to get started.`)
    bot.user.setActivity('don\'t invite me')
})

bot.login('NjQzMTUzODU5MDgyMTkwODk2.Xchedw.CekHiyGODSie-T44P7BVwkvWjwc')
require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('bot is running')
}).listen(process.env.PORT || 3001)