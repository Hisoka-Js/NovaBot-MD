/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 GRUPO」 ──────*

*Hola 👋*
*estos sos los grupo oficial del bot*
*https://chat.whatsapp.com/Byyrc8RJnUkJw6vvUgsbDF*

*grupos del ayudar del bot*
*https://chat.whatsapp.com/Kn8ZwqPX3VW06l56aIi4Xv*

*grupos del amistades donde esta el bot*
*amistades*
https://chat.whatsapp.com/JZaD3sfNoVW4JvaoQ4uVwF

*botcereza*
https://chat.whatsapp.com/DCJclB8oBAPIAoleUtNEaN

*grupo del enlace aqui puede manda enlacs* *y tambien si quiere un bot para tu grupos poner .join mas enlace*
*enlace lolibot*
https://chat.whatsapp.com/DlDRY1p2VrcKGpXU7XO0Ad

*enlace la jefa*
https://chat.whatsapp.com/JegOp8NUSMd0vn75s4hkaj

*anime*
https://chat.whatsapp.com/G0UddFaGaLDI0KpCV8ksW3
h`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/e1e0f0bc5a5229c348eda.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'github',
               url: ''
             }

           },
               {
             quickReplyButton: {
               displayText: 'menu completo',
               id: '.full',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
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

handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^gru(po|s)|grupos$/i
handler.register = true

module.exports = handler
