import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.owner = [
   ['527421168105', 'Creador Tobi💙', true],
   ['595994384940', 'Comprador', true],
   ['5212731590195', 'Gestion White', true],
   ['584148256527', 'Colaborador Diomar', true],
   ['5491133980616', 'Kara', true],
   ['51971867199', 'Dev Senna', true],
   ['584241836217', 'Dev Prak', true],
   ['519168382008', 'Dev Darkcore', true],
   ['573215751237', 'CrowBot OFC1', true],
]

global.creadorbot = [
   ['527421168105', 'Tobi', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𝙊𝘽𝙄𝙏𝙊 𝘽𝙊𝙏'
global.botname = '𝙊𝘽𝙄𝙏𝙊 𝘽𝙊𝙏'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🌟★ ׄ ꒱ 𝙊𝘽𝙄𝙏𝙊𝘽𝙊𝙏𝐭 ୭'
global.author = '꒷꒦𖥻𝐁𝐲 𝙎𝙊𝙈𝘽𝙍𝘼𓆪'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ C.137 team'
global.errorm = '𝐄𝐫𝐫𝐨𝐫: ${error.message}'
global.errorm2 = '✰ 𝐀 𝐎𝐜𝐮𝐫𝐫𝐢𝐝𝐨 𝐔𝐧 𝐄𝐫𝐫𝐨𝐫, 𝐕𝐮𝐞𝐥𝐯𝐞 𝐌𝐚𝐬 𝐓𝐚𝐫𝐝𝐞 (৹˃̵﹏˂̵৹)'
global.resp = '𝐀𝐪𝐮𝐢 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 〜(^∇^〜)'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.nombrebot = '𝙊𝘽𝙄𝙏𝙊𝘽𝙊𝙏'
global.textbot = `༻𝙊𝘽𝙄𝙏𝙊 - 𝘽𝙊𝙏༺`
global.vs = '2.1.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// Set De Rem-Bot

global.welmss = 'Bienvenido a'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo1.jpg')
global.crowurl = fs.readFileSync('./storage/img/crowurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.mashach = ''
global.mashac = 'wa.me/527421168105*/n• *wa.me/5224312686*/n• *wa.me/5055786568*'
global.repobot = ''
global.grupo = ''
global.comu = ''
global.channel = ''
global.insta = ''
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '👑【✫𝚃𝙴𝙰𝙼  乂 C.137✫】🎩', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
