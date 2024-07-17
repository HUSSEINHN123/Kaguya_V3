import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import tinyurl from 'tinyurl';
import { join } from 'path';

// مثال على تعريف الأوامر
const commands = [
  {
    name: "كاغويا",
    author: "Kaguya Project",
    role: "member",
    description: "يدردش معك ويرد برسالة مع ستيكر عند الرد عليه.",
    aliases: ["بوت"],

    async execute({ api, event, client }) {
      const { threadID, messageID, body, senderID } = event;

      if (body.toLowerCase().includes("كاغويا")) {
        const stickers = [
          "1747083968936188", "1747090242268894", "1747089445602307", "1747085962269322",
          "1747084572269461", "1747092188935366", "1747088982269020", "2041012539459553",
          "2041015422792598", "2041021119458695", "2041022286125245", "2041022029458604",
          "2041012539459553", "2041012692792871", "2041011836126290", "2041012262792914",
          "2041015329459274"
        ];

        const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

        try {
          const response = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=ar&message=${encodeURIComponent(body)}&filter=true`);
          const replyMessage = response.data.success || "عذرا، لم أتمكن من فهم رسالتك.";

          api.sendMessage(replyMessage, threadID, (error, info) => {
            if (!error) {
              api.sendMessage({ sticker: randomSticker }, threadID);
              client.handler.reply.set(info.messageID, {
                author: senderID,
                type: "reply",
                name: "كاغويا",
                unsend: false,
              });
            }
          }, messageID);
        } catch (error) {
          console.error(error);
          api.sendMessage("⚠️ | حدث خطأ أثناء محاولة الدردشة. يرجى المحاولة مرة أخرى.", threadID);
        }
      }
    },

    async onReply({ api, event, reply, client }) {
      const { threadID, messageID, body, senderID } = event;

      if (reply.author === senderID) {
        const stickers = [
          "1747083968936188", "1747090242268894", "1747089445602307", "1747085962269322",
          "1747084572269461", "1747092188935366", "1747088982269020", "2041012539459553",
          "2041015422792598", "2041021119458695", "2041022286125245", "2041022029458604",
          "2041012539459553", "2041012692792871", "2041011836126290", "2041012262792914",
          "2041015329459274"
        ];

        const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];

        try {
          const response = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=ar&message=${encodeURIComponent(body)}&filter=true`);
          const replyMessage = response.data.success || "عذرا، لم أتمكن من فهم رسالتك.";

          api.sendMessage(replyMessage, threadID, (error, info) => {
            if (!error) {
              api.sendMessage({ sticker: randomSticker }, threadID);
              client.handler.reply.set(info.messageID, {
                author: senderID,
                type: "reply",
                name: "كاغويا",
                unsend: false,
              });
            }
          }, messageID);
        } catch (error) {
          console.error(error);
          api.sendMessage("⚠️ | حدث خطأ أثناء محاولة الدردشة. يرجى المحاولة مرة أخرى.", threadID);
        }
      }
    }
  }
];

// تصدير الأوامر فقط
export default { commands };
