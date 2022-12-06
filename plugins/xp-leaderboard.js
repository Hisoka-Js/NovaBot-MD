let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
┌「 *𝚃𝚘𝚙 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚌𝚘𝚗 𝚖𝚊𝚜 𝙴𝚇𝙿 ${len}* 」
├ 𝚃𝚞: *${usersExp.indexOf(m.sender) + 1}* 𝚍𝚎 *${usersExp.length}*
│
${sortedExp.slice(0, len).map(({ jid, exp }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} 𝙴𝚇𝙿*`).join`\n`}
└────
┌「 *𝚃𝚘𝚙 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚌𝚘𝚗 𝚖𝚊𝚜 𝙻𝚒𝚖𝚒𝚝𝚎𝚜 ${len}* 」
├ 𝚃𝚞: *${usersLim.indexOf(m.sender) + 1}* 𝚍𝚎 *${usersLim.length}*
│
${sortedLim.slice(0, len).map(({ jid, limit }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} 𝙻𝚒𝚖𝚒𝚝𝚎𝚜*`).join`\n`}
└────
┌「 *𝚃𝚘𝚙 𝚍𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚌𝚘𝚗 𝚖𝚊𝚜 𝙽𝚒𝚟𝚎𝚕 ${len}* 」
├ 𝚃𝚞: *${usersLevel.indexOf(m.sender) + 1}* 𝚍𝚎 *${usersLevel.length}*
│
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *𝙽𝚒𝚟𝚎𝚕 ${level}*`).join`\n`}
└────`.trim()
  m.reply(text)
}
handler.help = ['leaderboard [jumlah user]', 'lb [jumlah user]']
handler.tags = ['xp']
handler.command = /^(leaderboard|lb|top|ranking)$/i
handler.register = false

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
