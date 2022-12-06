let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw '¿𝚍𝚘𝚗𝚍𝚎 𝚎𝚜𝚝𝚊 𝚎𝚕 𝚎𝚗𝚕𝚊𝚌𝚎 𝚍𝚎 𝚐𝚒𝚝𝚑𝚞𝚋? 𝚎𝚓𝚎𝚖𝚙𝚕𝚘: https://github.com/Bintang73/botst4rz'

    if (!regex.test(args[0])) throw '¡𝚕𝚒𝚗𝚔 𝚒𝚗𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚘!'

    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filename=Nurutomo-wabot-aq-v2.5.1-251-g836cccd.zip'
    m.reply(`*𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝚎𝚜𝚙𝚎𝚛𝚎, 𝚜𝚎 𝚎𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚎𝚕 𝚛𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚒𝚘...*`)
    conn.sendFile(m.chat, url, filename, null, m)

}
handler.help = ['gitclone <url>']
handler.tags = ['github']
handler.command = /gitclone/i
handler.register = true

handler.limit = true

module.exports = handler
