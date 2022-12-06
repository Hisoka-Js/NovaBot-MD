let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'y el textos?'
    m.reply(`mensaje de difundido al ${anu.length} Chat, el tiempos ${anu.length * 0.5 } segundos`)
    for (let i of anu) {
    await delay(500)
    conn.sendBut(i, `${pesan}`, wm, 'OWNER', '.owner', null).catch(_ => _)
    }
  m.reply(`mensaje del difundir al ${anu.length} Group`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgc|bcgc)bot)$/i

handler.owner = true

module.exports = handler
