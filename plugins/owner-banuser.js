let handler = async (m, { conn, text }) => {
    if (!text) throw 'etiquetas al quien quiere banea \n\nEjemplo: .ban @tag'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'usuarios baneado no tenga permiso del usar el bot'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `usuarios no esta el base del datos`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler
