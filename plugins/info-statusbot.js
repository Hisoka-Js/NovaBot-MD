
let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let str = `
╭─────[ *𝙴𝚂𝚃𝙰𝙳𝙾* ]────✧
├◌ 𝚃𝚒𝚎𝚖𝚙𝚘 𝚊𝚌𝚝𝚒𝚟𝚘 : ${uptime}
├◌ 𝙼𝚘𝚍𝚘 : ${global.opts['self'] ? 'Self' : 'publik'}
├◌ ${Object.keys(global.db.data.users).length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜
├◌ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 𝙲𝚑𝚊𝚝𝚜 𝙱𝚊𝚗𝚎𝚊𝚍𝚘𝚜 
├◌ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜 𝙱𝚊𝚗𝚎𝚊𝚍𝚘𝚜 
╰────────────···
    `.trim()
conn.send2But(m.chat, str, wm, 'ɪɴғᴏ 💬', '.info', 'ᴏᴡɴᴇʀ 🤵', '.owner',m)
conn.reply(str)
}
handler.help = ['estado']
handler.tags = ['info']
handler.register = true
handler.command = /^estado(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
