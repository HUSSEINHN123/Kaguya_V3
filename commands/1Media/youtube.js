import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';

export default {
  name: "يوتيوب",
  author: "حسين يعقوبي",
  cooldowns: 60,
  description: "تنزيل مقطع فيديو من YouTube",
  role: "عضو",
  aliases: ["فيديو", "يوتيوب", "مقطع"],

  async execute({ api, event }) {
    const input = event.body;
    const data = input.split(" ");

    if (data.length < 2) {
      return api.sendMessage("⚠️ | أرجوك قم بإدخال اسم المقطع.", event.threadID);
    }

    data.shift();
    const videoName = data.join(" ");

    try {
      const searchMessageID = await api.sendMessage(
        `✔ | جاري البحث عن المقطع المطلوب "${videoName}". المرجو الانتظار...`,
        event.threadID
      );

      // البحث عن المقطع باستخدام الرابط الجديد
      const searchUrl = `https://hiroshi-rest-api.replit.app/search/youtube?q=${encodeURIComponent(videoName)}`;
      const searchResponse = await axios.get(searchUrl);

      const searchResults = searchResponse.data.results;
      if (!searchResults || searchResults.length === 0) {
        return api.sendMessage("⚠️ | لم يتم العثور على أي نتائج.", event.threadID);
      }

      let msg = '📹 | تم العثور على المقاطع التالية:\n';
      const attachments = [];

      for (const [index, video] of searchResults.entries()) {
        const thumbnailPath = path.join(process.cwd(), 'cache', `${video.videoId}.jpg`);
        const thumbnailStream = fs.createWriteStream(thumbnailPath);
        
        const thumbnailResponse = await axios.get(video.thumbnail, { responseType: 'stream' });
        thumbnailResponse.data.pipe(thumbnailStream);

        attachments.push(fs.createReadStream(thumbnailPath));

        msg += `\n${index + 1}. ${video.title} - ⏱️ ${video.duration}`;
      }

      msg += '\n\n📥 | الرجاء التفاعل بإضافة ضفدع 🐸 على الرسالة التي تحتوي على المقطع الذي ترغب في تنزيله.';

      api.sendMessage(
        { body: msg, attachment: attachments },
        event.threadID,
        (error, info) => {
          if (error) return console.error(error);

          global.client.handler.reply.set(info.messageID, {
            author: event.senderID,
            type: "pick",
            name: "مقطع",
            searchResults: searchResults,
            unsend: true
          });
        }
      );

      // حذف الرسالة الأصلية بعد عرض النتائج
      api.unsendMessage(searchMessageID);

    } catch (error) {
      console.error('[ERROR]', error);
      api.sendMessage('🥱 ❀ حدث خطأ أثناء معالجة الأمر.', event.threadID);
    }
  },

  async onReply({ api, event, reply }) {
    if (reply.type !== 'pick') return;

    const { author, searchResults } = reply;

    if (event.senderID !== author) return;

    if (event.reaction !== '🐸') {
      return api.sendMessage("❌ | التفاعل غير صالح. الرجاء التفاعل بالضفدع 🐸 للتأكيد.", event.threadID);
    }

    const selectedVideo = searchResults[0]; // Assuming the first result is selected by default.
    const title = selectedVideo.title;
    const duration = selectedVideo.duration;
    const videoUrl = selectedVideo.link;

    try {
      // جلب رابط تنزيل الفيديو باستخدام الرابط الجديد
      const downloadUrl = `https://hiroshi-rest-api.replit.app/tools/yt?url=${encodeURIComponent(videoUrl)}`;
      const downloadResponse = await axios.get(downloadUrl);

      const videoUrl = downloadResponse.data.mp4;
      if (!videoUrl) {
        return api.sendMessage("⚠️ | لم يتم العثور على رابط تحميل الفيديو.", event.threadID);
      }

      // تحديد مسار تخزين الملف
      const fileName = `${event.senderID}.mp4`;
      const filePath = path.join(process.cwd(), 'cache', fileName);

      // تنزيل الملف وحفظه
      const writer = fs.createWriteStream(filePath);
      const videoStream = axios.get(videoUrl, { responseType: 'stream' }).then(response => {
        response.data.pipe(writer);
        writer.on('finish', () => {
          if (fs.statSync(filePath).size > 26214400) {
            fs.unlinkSync(filePath);
            return api.sendMessage('❌ | لا يمكن إرسال الملف لأن حجمه أكبر من 25 ميغابايت.', event.threadID);
          }

          // إرسال الرسالة مع المرفق
          api.setMessageReaction("✅", event.messageID, (err) => {}, true);

          const message = {
            body: `✅ | تم العثور على المقطع:\n❀ العنوان: ${title}\n⏱️ المدة: ${duration}`,
            attachment: fs.createReadStream(filePath)
          };

          api.sendMessage(message, event.threadID, () => {
            fs.unlinkSync(filePath);
          });
        });
      });

    } catch (error) {
      console.error('[ERROR]', error);
      api.sendMessage('🥱 ❀ حدث خطأ أثناء معالجة الأمر.', event.threadID);
    }
  }
};
