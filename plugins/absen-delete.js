let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.sendBut(m.chat, `_*¡𝙽𝚘 𝚑𝚊𝚢 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!*_\n\n*${usedPrefix}asistencia* - 𝚎𝚖𝚙𝚎𝚣𝚊𝚛 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`, wm, 'ᴇᴍᴘᴇᴢᴀʀ', '.asistencia', m)
    delete conn.absen[id]
    m.reply(`𝚂𝚎 𝚎𝚕𝚒𝚖𝚒𝚗𝚘 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚍𝚎 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
