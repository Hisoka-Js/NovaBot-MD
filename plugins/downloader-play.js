//made by https://github.com/Paquito1923
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
const { servers, yta, ytv } = require('../lib/y2mate')
let fs = require('fs')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `uff. que esta buscando 🤔?\n\nejemplo:\n${usedPrefix + command} bad bunny`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁𝙾𝙽 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw '𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁𝙴𝚂 𝙵𝙰𝙻𝙻𝙰𝚁𝙽'
  if (yt2 === false) throw '𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁𝙴𝚂 𝙵𝙰𝙻𝙻𝙰𝚁𝙽'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
let anu =  `
*𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*𝙿𝙴𝚂𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾:* ${filesizeF}
*𝙿𝙴𝚂𝙾 𝙳𝙴 𝚅𝙸𝙳𝙴𝙾:* ${yt2.filesizeF}
*𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁:* ${usedServer}
*𝚄𝚁𝙻:* 
${vid.url}

`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: await (await fetch(thumb)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'GITHUB',
               url: 'https://github.com/elrebelde21/The-whatbot-MD',
             }

           },
               {
             quickReplyButton: {
               displayText: 'video',
               id: `.ytmp4 ${vid.url}`,
             }

            },
               {
             quickReplyButton: {
               displayText: 'Audio',
               id: `.ytmp3 ${vid.url}`,
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(p|play)$/i

handler.exp = 0

module.exports = handler
