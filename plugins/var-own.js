const Stefanie = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../stm');
const config = require('../config');

if (config.WORKTYPE == 'private') {

Stefanie.addCommand({pattern: 'number', fromMe: true, desc: 'Its send owner number'}, (async (message, match) => {

            const Raashii = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.Z_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Zara fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.Z_NUMBER + ':' + Config.Z_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: VIRUS FUCKER}, MessageType.contact);

  }));
}

else if (config.WORKTYPE == 'public') {

Stefanie.addCommand({pattern: 'number', fromMe: false, desc: 'Its send owner number'}, (async (message, match) => {
         var mode = ''
if (Config.Z_OWNER == 'VIRUS FUCKER') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : '

else mode = 'ᴏᴡɴᴇʀ : '
            
            const Raashii = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + mode + Config.Z_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Zara fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.Z_NUMBER + ':' + Config.Z_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: VIRUS FUCKER}, MessageType.contact);

  }));
}
