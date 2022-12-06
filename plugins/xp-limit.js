let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
conn.sendBut(m.chat, `${global.db.data.users[who].limit} Límites restantes ಥ_ಥ`, wm, 'ᴄᴏᴍᴘʀᴀʀ', '.buy', fdoc)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit|límites|límite|limites|limite)$/i
handler.register = false
module.exports = handler
