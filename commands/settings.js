const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "settings",           
            desc: "(setting list).",
            category: "_help",
            react: "⚙️",
            filename: __filename,
            use: '<text>',

        },

        async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/270422fca219c19f0e22c.jpg',
                },

                caption: `

       *|| LEO - MD SETTINGS ||*

*⚙️ ❶ ➢ Tᴏ Sᴇᴛ AɴᴛɪLɪɴᴋ Tʏᴘᴇ :*
Ex:- ${prefix}setvar ANTILINK:true/false

*⚙️ ❷ ➢ Tᴏ Sᴇᴛ Aᴜᴛᴏ Rᴇᴀᴄᴛɪᴏɴ Tʏᴘᴇ :*
Ex:- ${prefix}setvar AUTO_REACTION:true/false

*⚙️ ❸ ➢ Tᴏ Sᴇᴛ Aᴜᴛᴏ Rᴇᴀᴅ Sᴛᴀᴛᴜꜱ Tʏᴘᴇ :*
Ex:- ${prefix}setvar AUTO_READ_STATUS:true/false

*⚙️ ❹ ➢ Tᴏ Sᴇᴛ Lᴇᴠᴇʟ Uᴘ Mᴇꜱꜱᴀɢᴇ Tʏᴘᴇ :*
Ex:- ${prefix}setvar LEVEL_UP_MESSAGE:true/false

*⚙️ ❺ ➢ Tᴏ Sᴇᴛ OᴘᴇɴAɪ Aᴘɪ Kᴇʏ :*
Ex:- ${prefix}setvar OPENAI_API_KEY:put OPENAI api key

*⚙️ ❻ ➢ Tᴏ Sᴇᴛ Oᴡɴᴇʀ Nᴀᴍᴇ :*
Ex:- ${prefix}setvar OWNER_NUMBER:put any name

*⚙️ ❼ ➢ Tᴏ Sᴇᴛ Oᴡɴᴇʀ Nᴜᴍʙᴇʀ :*
Ex:- ${prefix}setvar OWNER_NUMBER:947666322xx

*⚙️ ➑ ➢ Tᴏ Sᴇᴛ Pᴀᴄᴋ Iɴꜰᴏ :*
Ex:- ${prefix}setvar PACK_INFO:put any name

*⚙️ ➒ ➢ Tᴏ Sᴇᴛ Pʀᴇꜰɪx Tʏᴘᴇ :*
Ex:- ${prefix}setvar PREFIX:.

*⚙️ ❿ ➢ Tᴏ Sᴇᴛ Aᴜᴛᴏ Rᴇᴀᴅ Mᴇꜱꜱᴀɢᴇ Tʏᴘᴇ :*
Ex:- ${prefix}setvar READ_MESSAGE:true/false

*⚙️ ❶❶ ➢ Tᴏ Sᴇᴛ Tʜᴜᴍʙɴᴀɪʟ Iᴍᴀɢᴇ :*
Ex:- ${prefix}set THUMB_IMAGE:put image url

*⚙️ ❶❷ ➢ Tᴏ Sᴇᴛ Wᴏʀᴋ Tʏᴘᴇ :*
Ex:- ${prefix}setvar WORKTYPE:public/private

════════════════════════
*⚠️ Don't Add Space After This ➢ " : " Symbol.*

*⚠️ Don't Add Space Before This ➢ " : " Symbol.*
════════════════════════

*⦁ ʟᴇᴏ - ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ ⦁*`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
