import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;

    let txt = `
*⌬━━━━━▣━━◤⌬◢━━▣━━━━━━⌬*

Hola *@${userId.split('@')[0]}* soy *${Hayabusa bot}*

╔══════⌬『 𝑰 𝑵 𝑭 𝑶 』
║ ✎ Cliente: @${userId.split('@')[0]}
║ ✎ Bot: ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
║ ✎ Modo: Público
║ ✎ Usuarios » ${totalreg}
║ ✎ Tiempo ${uptime}
║ ✎ Comandos » ${totalCommands}
╚══════ ♢.✰.♢ ══════➤

*◤━━━━━ ☆. ⌬ .☆ ━━━━━◥*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
*𝑳 𝑰 𝑺 𝑻 𝑨 𝑫𝑬 𝑪 𝑶 𝑴 𝑨 𝑵 𝑫 𝑶 𝑺*

*┏━━━━▣━━⌬〘 ANIME 🔥 〙*
┃〘  🔥 .angry/enojado @tag
┃〘  🌟 .bath/bañarse @tag
┃〘  🔥 .bite/morder @tag
┃〘  🌟 .bleh/lengua @tag
┃〘  ⚡ .blush/sonrojarse @tag
┃〘  ⚡ .bored/aburrido @tag
┃〘  ⚡ .coffe/cafe @tag
┃〘  🔥 .cry/llorar @tag
┃〘  ⚡ .cuddle/acurrucarse @tag
┃〘  🔥 .dance/bailar @tag
┃〘  🌟 .drunk/borracho @tag
┃〘  🌟 .facepalm/palmada @tag
┃〘  ⚡ .happy/feliz @tag
┃〘  ⚡ .hello/hola @tag
┃〘  ⚡ .hug/abrazar @tag
┃〘  🌟 .kill/matar @tag
┃〘  🌟 .kiss/besar @tag
┃〘  🔥 .kiss2/besar2 @tag
┃〘  👑 .laugh/reirse @tag
┃〘  👑 .lick/lamer @tag
┃〘  🔥 .love2/enamorada @tag
┃〘  🌟 .patt/acariciar @tag
┃〘  🌟 .poke/picar @tag
┃〘  👑 .pout/pucheros @tag
┃〘  🔥 .ppcouple
┃〘  👑 .pregg/embarazar @tag
┃〘  ⚡ .punch/golpear @tag
┃〘  🔥 .run/correr @tag
┃〘  👑 .sad/triste @tag
┃〘  👑 .scared/asustada @tag
┃〘  🌟 .seduce/seducir @tag
┃〘  🌟 .shy/timida @tag
┃〘  ⚡ .slap/bofetada @tag
┃〘  ⚡ .sleep/dormir @tag
┃〘  ⚡ .smoke/fumar @tag
┃〘  ⚡ .think/pensando @tag
┃〘  👑 .undress/encuerar @tag
┃〘  🔥 .waifu
┃〘  🌟 .infoanime
┃〘  🔥 .harem [@usuario] [pagina]
┃〘  🌟 .regalar <nombre del personaje> @usuario
┃〘  🌟 .topwaifus [página]
┃〘  ⚡ .vote <nombre>
┃〘  👑 .wvideo <nombre del personaje>
┃〘  🌟 .wimage <nombre del personaje>
┃〘  👑 .charinfo <nombre del personaje>
┃〘  🌟 .winfo <nombre del personaje>
┃〘  🌟 .waifuinfo <nombre del personaje>
*┗━━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 INFO 🌟 〙*
┃〘  👑 .afk [alasan]
┃〘  ⚡ .owner
┃〘  🔥 .totalfunciones
┃〘  👑 .allmenu
┃〘  🔥 .mods
┃〘  👑 .runtime
┃〘  🌟 .script
┃〘  🔥 .staff
┃〘  🔥 .blocklist
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 GAME 👑 〙*
┃〘  ⚡ .ahorcado
┃〘  🌟 .delttt
┃〘  👑 .math <mode>
┃〘  ⚡ .sopa
┃〘  ⚡ .buscarpalabras
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 SUB BOTS ⚡ 〙*
┃〘  👑 .serbot
┃〘  ⚡ .serbot code
┃〘  👑 .token
┃〘  🌟 .sockets
┃〘  ⚡ .deletesesion
┃〘  🔥 .pausarai
*┗━━━━━━━━━━━➤
*┏━━━━▣━━⌬〘 RPG 🔥 〙*
┃〘  ⚡ .lb
┃〘  🔥 .levelup
┃〘  🌟 .aventura
┃〘  🌟 .adventure
┃〘  👑 .baltop
┃〘  👑 .berburu
┃〘  🌟 .cofre
┃〘  ⚡ .daily
┃〘  👑 .claim
┃〘  🌟 .depositar
┃〘  ⚡ .explorar
┃〘  🔥 .gremio
┃〘  🌟 .halloween
┃〘  🔥 .heal
┃〘  🌟 .inventario
┃〘  🔥 .inv
┃〘  ⚡ .explorar
┃〘  👑 .monthly
┃〘  👑 .navidad
┃〘  ⚡ .christmas
┃〘  🌟 .retirar
┃〘  🔥 .rob
┃〘  🔥 .slut
┃〘  🔥 .pay
┃〘  ⚡ .weekly
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 STICKER 🔥 〙*
┃〘  🔥 .brat *<texto>*
┃〘  🔥 .emojimix *<emoji+emoji>*
┃〘  🌟 .pfp @user
┃〘  🌟 .qc
┃〘  👑 .stiker <img>
┃〘  👑 .sticker <url>
┃〘  ⚡ .toimg (reply)
┃〘  🌟 .ttp
┃〘  🌟 .attp
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 GROUPS 🔥 〙*
┃〘  ⚡ .invite *<521>*
┃〘  👑 .setemoji *<emoji>*
┃〘  🔥 .todos *<mensaje opcional>*
┃〘  🔥 .testwelcome @user
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 ON / OFF ⚡ 〙*
┃〘  🔥 .welcome
┃〘  🔥 .bv
┃〘  👑 .bienvenida
┃〘  🔥 .antiprivado
┃〘  🌟 .antipriv
┃〘  🔥 .antiprivate
┃〘  🌟 .restrict
┃〘  🔥 .restringir
┃〘  🌟 .autolevelup
┃〘  ⚡ .autonivel
┃〘  ⚡ .autosticker
┃〘  👑 .antibot
┃〘  ⚡ .antibots
┃〘  🔥 .autoaceptar
┃〘  🔥 .aceptarauto
┃〘  ⚡ .autorechazar
┃〘  🌟 .rechazarauto
┃〘  🌟 .autoresponder
┃〘  🌟 .autorespond
┃〘  🌟 .antisubbots
┃〘  ⚡ .antisub
┃〘  🌟 .antisubot
┃〘  🔥 .antibot2
┃〘  🌟 .modoadmin
┃〘  🌟 .soloadmin
┃〘  👑 .autoread
┃〘  👑 .autoleer
┃〘  🌟 .autover
┃〘  👑 .antiver
┃〘  🌟 .antiocultar
┃〘  ⚡ .antiviewonce
┃〘  ⚡ .reaction
┃〘  🔥 .reaccion
┃〘  🌟 .emojis
┃〘  👑 .nsfw
┃〘  🌟 .nsfwhot
┃〘  🌟 .nsfwhorny
┃〘  👑 .antispam
┃〘  🌟 .antiSpam
┃〘  ⚡ .antispamosos
┃〘  👑 .antidelete
┃〘  🔥 .antieliminar
┃〘  ⚡ .jadibotmd
┃〘  🔥 .modejadibot
┃〘  🔥 .subbots
┃〘  ⚡ .detect
┃〘  👑 .configuraciones
┃〘  🔥 .avisodegp
┃〘  🔥 .detect2
┃〘  🔥 .avisos
┃〘  🌟 .eventos
┃〘  🔥 .autosimi
┃〘  🌟 .simsimi
┃〘  🌟 .antilink
┃〘  🔥 .antilink2
┃〘  ⚡ .antitoxic
┃〘  🔥 .antitoxicos
┃〘  ⚡ .antitraba
┃〘  ⚡ .antitrabas
┃〘  🌟 .antifake
┃〘  🔥 .antivirtuales
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 PREMIUM ⚡ 〙*
┃〘  🔥 .comprarpremium
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 DOWNLOAD 👑 〙*
┃〘  🔥 .play
┃〘  ⚡ .play2
┃〘  🌟 .ytmp3
┃〘  🔥 .yta
┃〘  👑 .ytmp4
┃〘  👑 .ytv
┃〘  👑 .spotify
┃〘  🌟 .music
┃〘  🔥 .pl
┃〘  🌟 .pla
┃〘  🔥 .ytmp3
┃〘  👑 .yta
┃〘  🌟 .ytmp4
┃〘  🌟 .ytv
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 TOOLS 🔥 〙*
┃〘  🌟 .webinfo
┃〘  🌟 .dalle
┃〘  🔥 .imagen
┃〘  🌟 .genearimg
┃〘  ⚡ .setdespedida
┃〘  🌟 .setwelcome
┃〘  🌟 .nuevafotochannel
┃〘  ⚡ .nosilenciarcanal
┃〘  ⚡ .silenciarcanal
┃〘  🔥 .noseguircanal
┃〘  ⚡ .seguircanal
┃〘  🔥 .avisoschannel
┃〘  🌟 .resiviravisos
┃〘  🔥 .inspect
┃〘  🔥 .inspeccionar
┃〘  ⚡ .eliminarfotochannel
┃〘  🔥 .reactioneschannel
┃〘  ⚡ .reaccioneschannel
┃〘  👑 .nuevonombrecanal
┃〘  👑 .nuevadescchannel
┃〘  👑 .invite
┃〘  👑 .setcatalogo
┃〘  🌟 .setbanner
┃〘  🔥 .setcatalogo
┃〘  👑 .setmoneda
┃〘  🔥 .setname
┃〘  ⚡ .wm
┃〘  ⚡ .cal *<ecuacion>*
┃〘  🔥 .fake
┃〘  🌟 .remini
┃〘  👑 .hd
┃〘  👑 .enhance
┃〘  👑 .ver
┃〘  🌟 .whatmusic <audio/video>
┃〘  ⚡ .spamwa <number>|<mesage>|<no of messages>  ◜🪪◞
┃〘  🔥 .ssweb
┃〘  🌟 .ss
┃〘  ⚡ .tamaño *<cantidad>*
┃〘  🌟 .document *<audio/video>*
┃〘  ⚡ .wikipedia
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 FUN ⚡ 〙*
┃〘  👑 .simi
┃〘  🔥 .bot
┃〘  🔥 .amistad
┃〘  ⚡ .gay <@tag> | <nombre>
┃〘  🌟 .lesbiana <@tag> | <nombre>
┃〘  🔥 .pajero <@tag> | <nombre>
┃〘  ⚡ .pajera <@tag> | <nombre>
┃〘  🌟 .puto <@tag> | <nombre>
┃〘  ⚡ .puta <@tag> | <nombre>
┃〘  🌟 .manco <@tag> | <nombre>
┃〘  🔥 .manca <@tag> | <nombre>
┃〘  ⚡ .rata <@tag> | <nombre>
┃〘  🔥 .prostituta <@tag> | <nombre>
┃〘  👑 .prostituto <@tag> | <nombre>
┃〘  ⚡ .chiste
┃〘  🌟 .consejo
┃〘  ⚡ .doxear
┃〘  👑 .doxxing <nombre> | <@tag>
┃〘  🔥 .facto
┃〘  🌟 .formarpareja
┃〘  ⚡ .formarpareja5
┃〘  🔥 .frase
┃〘  ⚡ .huevo @user
┃〘  🌟 .iqtest
┃〘  👑 .meme
┃〘  🌟 .morse *<encode|decode>*
┃〘  👑 .nombreninja *<texto>*
┃〘  🔥 .pajeame
┃〘  👑 .personalidad
┃〘  🔥 .piropo
┃〘  🔥 .pokedex *<pokemon>*
┃〘  🌟 .pregunta
┃〘  👑 .ship
┃〘  👑 .love
┃〘  👑 .sorteo
┃〘  🔥 .top *<texto>*
┃〘  🌟 .formartrio @usuario1 @usuario2
┃〘  🔥 .zodiac *2002 02 25*
┃〘  👑 .8ball *<pregunta>*
┃〘  👑 .marry *@usuario*
┃〘  👑 .divorce
┃〘  👑 .si
┃〘  🔥 .no
┃〘  ⚡ .letra <estilo> <texto>
┃〘  🔥 .logo
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 NSFW ⚡ 〙*
┃〘  🔥 .sixnine/69 @tag
┃〘  ⚡ .anal/culiar @tag
┃〘  🔥 .blowjob/mamada @tag
┃〘  ⚡ .boobjob/rusa @tag
┃〘  ⚡ .cum/leche @tag
┃〘  ⚡ .fap/paja @tag
┃〘  🔥 .follar @tag
┃〘  🔥 .footjob/pies @tag
┃〘  ⚡ .fuck/coger @tag
┃〘  ⚡ .fuck2/coger2 @tag
┃〘  👑 .grabboobs/agarrartetas @tag
┃〘  👑 .penetrar @user
┃〘  🔥 .lickpussy/coño @tag
┃〘  🔥 .r34 <tag>
┃〘  🔥 .rule34 <tag>
┃〘  🔥 .sexo/sex @tag
┃〘  🌟 .spank/nalgada @tag
┃〘  ⚡ .suckboobs/chupartetas @tag
┃〘  🔥 .violar/perra @tag
┃〘  ⚡ .lesbianas/tijeras @tag
*┗━━━━━━━━━━━➤*
*┏━━━━▣━━⌬〘 OWNER 🔥 〙*
┃〘  🌟 .addllama *<@user>*
┃〘  🔥 .addprem [@user] <days>
┃〘  ⚡ .autoadmin
┃〘  👑 .copia
┃〘  ⚡ .broadcastgroup
┃〘  ⚡ .bcgc
┃〘  🔥 .chetar *@user*
┃〘  🌟 .chetar *<número>*
┃〘  🌟 .cleanfiles *
┃〘  👑 .cleartmp
┃〘  🔥 .deletefile
┃〘  🌟 .delprem <@user>
┃〘  👑 .deschetar *@user*
┃〘  🔥 .deschetar *<número>*
┃〘  🔥 .dsowner
┃〘  🔥 .>
┃〘  🔥 .=>
┃〘  🔥 .fetch
┃〘  👑 .get
┃〘  ⚡ .getplugin
┃〘  🔥 .groups
┃〘  👑 .grouplist
┃〘  👑 .invite
┃〘  ⚡ .prefix [prefix]
┃〘  🌟 .quitarxp *<@user>*
┃〘  ⚡ .quitarllama *<@user>*
┃〘  🌟 .quitarllama all
┃〘  ⚡ .resetprefix

┃〘  🌟 .restart
┃〘  ⚡ .reunion
┃〘  👑 .meeting
┃〘  🌟 .savefile <ruta/nombre>
┃〘  👑 .saveplugin
┃〘  ⚡ .setcmd *<texto>*
┃〘  👑 .setimage
┃〘  👑 .setstatus <teks>
┃〘  👑 .spam2
┃〘  ⚡ .update
┃〘  ⚡ .actualizar
┃〘  🔥 .codigo <cantidad de llamas>
┃〘  🔥 .ip <alamat ip>
*┗━━━━━━━━━━━➤*
> © Hayabusa-Bot by Dilan
  `.trim();

    await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}