let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 𝐀𝐃𝐌𝐈𝐍 」*\n

*𝙽𝚘𝚖𝚋𝚛𝚎:* 
${groupMetadata.subject}

*𝙲𝚛𝚎𝚊𝚍𝚘𝚛 𝚍𝚎𝚕 𝙶𝚛𝚞𝚙𝚘:* 
@${m.chat.split`-`[0]}

*𝙰𝚍𝚖𝚒𝚗𝚜:*
${listAdmin}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['admin']
handler.tags = ['group']
handler.command = /^(admin|admins)$/i
handler.register = true

handler.group = true

module.exports = handler
