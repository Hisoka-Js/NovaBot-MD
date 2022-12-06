let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
𝙽𝚒𝚟𝚎𝚕 *${user.level} (${user.exp - min}/${xp})*
𝚃𝚎 𝚏𝚊𝚕𝚝𝚊 *${max - user.exp}* 𝚙𝚊𝚛𝚊 𝚜𝚞𝚋𝚒𝚛 𝚍𝚎 𝚗𝚒𝚟𝚎𝚕! 
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`⊱⋅ ──────────── ⋅⊰
¡𝙵𝙴𝙻𝙸𝙲𝙸𝚃𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙷𝙰𝚂 𝚂𝚄𝙱𝙸𝙳𝙾 𝙳𝙴 𝙽𝙸𝚅𝙴𝙻! 
*${before}* -> *${user.level}*
𝚄𝚜𝚊 #𝚖𝚢 𝚙𝚊𝚛𝚊 𝚟𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚛 
	⊱⋅ ──────────── ⋅⊰`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i
handler.register = false

module.exports = handler
