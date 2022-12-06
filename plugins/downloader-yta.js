let axios = require('axios')
const fetch = require('node-fetch')
let limit = 1024354
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... en donde esta el URL?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize 
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
┏┉━━━━━━━━━━━❏
┆ *𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐌𝐏𝟑*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *𝚃𝚒𝚝𝚞𝚕𝚘:* ${title}
│• *𝚃𝚒𝚙𝚘:* MP3
┆• *📥 𝙿𝚎𝚜𝚘 𝚍𝚎𝚕 𝚊𝚛𝚌𝚑𝚒𝚟𝚘:* ${filesizeF}
└❏
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
handler.help = ['mp3','a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

