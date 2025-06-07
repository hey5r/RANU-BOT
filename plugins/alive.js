const {cmd , commands} = require('../command')
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["bot","robo"],
    react: "⚡",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{              
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: Supunwa})
    
    
 const botname = "RANU-MD"; 
 const ownername = "MR RANDUL"; 
 const Supunwa = { 
 key: { 
  remoteJid: 'status@broadcast', 
  participant: '0@s.whatsapp.net' 
   }, 
message:{ 
  newsletterAdminInviteMessage: { 
    newsletterJid: '120363402051068395@newsletter', 
    newsletterName: "RANU MD", 
    caption: `RANU MD` + ` Verified By ` + `MR RANDUL`, 
    inviteExpiration: 0
  }
 }
 }
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
