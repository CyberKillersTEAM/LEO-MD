
const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "*@user @pp Welcome to the @gname.....!!!!!😊👇🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *____________*\n   *⦁ Lᴇᴏ - MᴜʟᴛɪDᴇᴠɪᴄᴇ Bᴏᴛ ⦁*\n*⦁ Bʏ - Cʏʙᴇʀ Iꜱᴜʀᴜ ⦁*" },
goodbye:{ type: String, default: "*@user @pp Welcome to the @gname.....!!!!!😊👇🏻♥️* \n\n*_GROUP DESCRIPTION_*\n@desc\n\n\n *____________*\n   *⦁ Lᴇᴏ - MᴜʟᴛɪDᴇᴠɪᴄᴇ Bᴏᴛ ⦁*\n*⦁ Bʏ - Cʏʙᴇʀ Iꜱᴜʀᴜ ⦁*" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
