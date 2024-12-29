//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidpromise2003@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mek-d1/X-bot";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/mx0z4n.jpg";
global.devs = "2349133354644";
global.sudo = process.env.SUDO || "2349133354644";
global.owner = process.env.OWNER_NUMBER || "2349133354644";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/mx0z4n.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347013349642,234xxxxx";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://x-bot-session-generator.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEIvUmIyZlIrNEczUmhFRnBhaE52Q0xsMzB3RVRDbFBTcktWalY2eG9Waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSm96R0lwVDBqZjU5NWVZMHhESDQwc1JuRXdqem1Xc3QvbWVJRU5aVlVUVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRW44MDVIblN5T3NRN3RNUndpc1VmaGZza2lBYmpjTWdFeWs2VFhuMjNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRYVB6dG9FRnBQVlRLU2s4djU4dFo1UlhUdUhiRjlJSWtxZkl1UHdMQlRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJRXo2d3NkTFpMRC9PS0lxa2RoSk8vTERUVTJESUxRbGhSK3UzbjdyVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ2RnNPOWRzWmZUQnBpNlJkVitQSDE1YVRSVWxZZVpOZW1iWG1yUy9zM0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUl6VFZFQ1RKNmhpOGZmeGNUUXhTenBLSHBGVkY2WlJFTFJSUE1WOHhuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtZVm1jV0JIeXFzUDM0NmV0Ykl4SlpNdWlYeTlUZUdCeE91b2YzN3Jrdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml6cGJwQjZGWjhFZFJHREwreEhlTnFDbHBmMTJJSVR6OGdtYmpSNERLWDdCZUc0SWgwSC93ZWNFdndQWURxbnc0S0g1L2VHc0ZTQmlSOXRZSHZJUEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJVcGxBQXc3S05jY2czMCtmS2lISEFuZXRTeXlnOC9NWlBrZndRS1RweDRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0T1NXVktwdVRpNkc1T18xOVc0amZnIiwicGhvbmVJZCI6IjI1YzZlMjMzLTM5NWMtNGYxZC04ZjIwLTY2ZWRiOGNlNjdhZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUUxrQ0pWUmk5ZnB0REFFU3g5SEswWUF0SmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQrY29VMVhSdW1naGp1R29xNUI5dGpMeDlVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJIMjdLWTQ5IiwibWUiOnsiaWQiOiIyMzQ4MDI2NjgyMjI1OjI2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkRhcmt0ZWVuIEV4Y2hhbmdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJVDUrYzBDRUpXdHhMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtb25GUGNwemZkRnF3TFVyWHlKZElCRmFXNHhLTzBFb0szMjcyc04vcEhVPSIsImFjY291bnRTaWduYXR1cmUiOiJ1YVRoUWJvOFpjZi9lbUhRNFA1MjZXb3dZWGFVWXZHM1g0ODFaQ09jSERvQzBObTVWTEVwdFhDejZwUFhabUQ3Z0xBT25NdHBMa2dZdjlHWm9zLzlCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoic2dTS094MkZWc1NleXNMNWxpblZ1WERlOGhESVE1TFF2NlJIbUJvM1l3ZHpXem9sbUNWRUlwUmlnMDBqWk1tSnNWbDZhNzlRcUozaDBFN1ZqSTJTQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDI2NjgyMjI1OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpxSnhUM0tjMzNSYXNDMUsxOGlYU0FSV2x1TVNqdEJLQ3Q5dTlyRGY2UjEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU0NjQ2MTF9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©X-:bot",
  author: process.env.PACK_AUTHER || "X-bot",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "X-bot",
  ownername: process.env.OWNER_NAME || "-X-",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
