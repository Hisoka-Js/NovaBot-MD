const { sticker1, sticker5 } = require('../lib/sticker')

let handler = async (m, { conn }) => {
    let stiker = false
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚞𝚗 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚌𝚘𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜`
            stiker = await sticker5(img, false, packname, author)
        } else if (/image/.test(mime)) {
            let img = await q.download()
            if (!img) throw `𝚁𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚊 𝚞𝚗 𝚒𝚖𝚊𝚐𝚎𝚗 𝚌𝚘𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜`
            stiker = await sticker5(img, false, packname, author)
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('𝚖𝚊𝚡𝚒𝚖𝚘 𝟷𝟶 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜!')
            let img = await q.download()
            if (!img) throw `𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎 𝚊 𝚞𝚗 𝚟𝚒𝚍𝚎𝚘 𝚌𝚘𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚜`
            stiker = await sticker5(img, false, packname, author)
        } else if (m.quoted.text) {
            if (isUrl(m.quoted.text)) stiker = await sticker(false, m.quoted.text, packname, author)
            else throw '¡𝙻𝚊 𝚄𝚁𝙻 𝚗𝚘 𝚎𝚜 𝚟𝚊𝚕𝚒𝚍𝚊!'
        }
    } catch (e) {
        throw e
    }
    finally {
        if (stiker) {
            m.reply(stiker_wait)
            await conn.sendFile(m.chat, stiker, '', '', m)
        }
        else {

            throw 0
        }
    }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^(stiker|s|sticker)$/i
handler.register = false

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}
