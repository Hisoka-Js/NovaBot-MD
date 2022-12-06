let handler = async(m, { conn, text }) => {
    if (!text) throw 'user ejemplo'
    if (text.length > 300) throw 'maximos , 30 caracteres!'
    const laporan = `*「 REPORT 」*\nNombre : wa.me/${m.sender.split`@`[0]}\nmensajes : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '5492266466080@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️reporte enviado a mi creador, si se trata de una broma o cualquier pelotudeces seda inodado. pero sino se que responda al tu reporte.i!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
