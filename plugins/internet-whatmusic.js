let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `responda al musica que quiere encontrar un titulos *${usedPrefix + command}*`
 m.reply('espera estoy buscado....')
				const bodyForm = new FormData()
			        bodyForm.append('audio', await q.download(), 'music.mp3')
           			bodyForm.append('apikey', 'caliph_71')
           			axios('https://api.zeks.me/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				  m.reply(`*cancion encontrar!*\n\n*titulos* : ${data.data.title}\n*Artista* : ${data.data.artists}\n*Generos* : ${data.data.genre}\n*Album* : ${data.data.album}\n*liberar* : ${data.data.release_date}`)
				}).catch(() => {
				m.reply('canción no encontrarás')
				})
				
}
handler.help = ['whatmusic', 'judullagu']
handler.tags = ['tools', 'internet']

handler.command = /^(whatmusic|judullagu)$/i
handler.register = true

module.exports = handler
