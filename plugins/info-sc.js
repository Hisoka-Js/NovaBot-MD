/*
 * si puede apoyame con una estrella gracias muchísimas gracia
*/

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
https://github.com/elrebelde21/The-whatbot-MD`
conn.sendBut(m.chat, esce, wm3, 'gracias', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i
handler.register = true

module.exports = handler
