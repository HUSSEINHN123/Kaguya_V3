import moment from "moment-timezone";
import axios from "axios";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const unlinkAsync = promisify(fs.unlink);

export default {
  name: "التذكير-اليومي",
  author: "kaguya project",
  role: "admin",
  description: "يرسل رسائل تلقائيًا في أوقات محددة كل يوم مع صورة عشوائية.",
  execute: async ({ api, event }) => {
    const reminders = [
      { time: "10:00", message: `وليس كل ماصرفه الله عنك شرٌ لك لعلك أنت الخير الذي لا يستحقونه 💙💙.
𝑨𝒏𝒅 𝒏𝒐𝒕 𝒆𝒗𝒆𝒓𝒚𝒕𝒉𝒊𝒏𝒈 𝒕𝒉𝒂𝒕 𝑮𝒐𝒅 𝒔𝒑𝒆𝒏𝒕 𝒇𝒓𝒐𝒎 𝒚𝒐𝒖 𝒊𝒔 𝒆𝒗𝒊𝒍 𝒇𝒐𝒓 𝒚𝒐𝒖, 𝒑𝒆𝒓𝒉𝒂𝒑𝒔 𝒚𝒐𝒖 𝒂𝒓𝒆 𝒕𝒉𝒆 𝒈𝒐𝒐𝒅 𝒕𝒉𝒂𝒕 𝒕𝒉𝒆𝒚 𝒅𝒐 𝒏𝒐𝒕 𝒅𝒆𝒔𝒆𝒓𝒗𝒆.💙💙` },
      { time: "11:00", message: `لا شي يبقـــى للأبد حتى الشمس سـتگسر القانون يوماً وتشرق غرباً لتعلن النهاية🌷✨
𝑵𝑶𝑻𝑯𝑰𝑵𝑮 𝑹𝑬𝑴𝑨𝑰𝑵𝑺 𝑭𝑶𝑹𝑬𝑽𝑬𝑹, 𝑼𝑵𝑻𝑰𝑳 𝑻𝑯𝑬 𝑺𝑼𝑵 𝑾𝑰𝑳𝑳 𝑩𝑹𝑬𝑨𝑲 🌷✨` },
      { time: "12:00", message: `-𝑫𝒐𝒏'𝒕 𝒕𝒓𝒖𝒔𝒕 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒋𝒖𝒔𝒕 𝒃𝒆𝒄𝒂𝒖𝒔𝒆 𝒚𝒐𝒖 𝒍𝒊𝒌𝒆 𝒕𝒂𝒍𝒌𝒊𝒏𝒈𝑾𝒊𝒕𝒉 𝒉𝒊𝒎, 𝒍𝒊𝒇𝒆 𝒉𝒂𝒔 𝒃𝒆𝒄𝒐𝒎𝒆 𝒂𝒔𝒑𝒆𝒄𝒕𝒔 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒄𝒐𝒏𝒕𝒆𝒎𝒑𝒍𝒂𝒕𝒆 𝒘𝒆𝒍𝒍. 🦋✨
-لاتثق بشخص لمجرد اعجبك الحديث
معة فالحياة أصبحت مظاهر تاملوها جيدا .🦋✨` },
      { time: "13:00", message: `"‏النظرات قادرة على اختصار حديث 
من سبعين ألف كلمة.🤎
“𝑳𝒐𝒐𝒌𝒔 𝒄𝒂𝒏 𝒔𝒉𝒐𝒓𝒕𝒆𝒏 𝒂 𝒄𝒐𝒏𝒗𝒆𝒓𝒔𝒂𝒕𝒊𝒐𝒏 
𝑺𝒆𝒗𝒆𝒏𝒕𝒚 𝒕𝒉𝒐𝒖𝒔𝒂𝒏𝒅 𝒘𝒐𝒓𝒅𝒔🤎` },
      { time: "14:00", message: `𝑰 𝒈𝒂𝒗𝒆 𝒎𝒚 𝒇𝒆𝒆𝒍𝒊𝒏𝒈𝒔 𝒂𝒏𝒅 𝒆𝒏𝒆𝒓𝒈𝒚 𝒐𝒏𝒄𝒆, 𝒂𝒏𝒅 𝒉𝒆𝒓𝒆 𝑰 𝒇𝒆𝒍𝒍 𝒘𝒊𝒕𝒉 𝒎𝒚 𝒘𝒉𝒐𝒍𝒆 𝒘𝒆𝒊𝒈𝒉𝒕 𝒂𝒏𝒅 𝒄𝒐𝒖𝒍𝒅 𝒏𝒐𝒕 𝒈𝒆𝒕 𝒖𝒑. 🖤
لقد وهبتُ مشاعري و طاقتي مرةً واحدة وها أنا سَقطت بثقلي كله و لم أستطيع النهوض` },
      { time: "15:00", message: `لا يـهـمـني إن غادرنـي الـجـميـع ، فـمـنذ الـبـدايـة ارسـم مـسـتـقبلا لايـوجـد فيه احد..🤍🪐

𝑱𝒆 𝒎𝒆 𝒇𝒊𝒄𝒉𝒆 𝒒𝒖𝒆 𝒕𝒐𝒖𝒕 𝒍𝒆 𝒎𝒐𝒏𝒅𝒆 𝒎𝒆 𝒕𝒓𝒂𝒉𝒊𝒔𝒔𝒆, 𝒅𝒆𝒑𝒖𝒊𝒔 𝒍𝒆 𝒅é𝒃𝒖𝒕 𝒋𝒆 𝒅𝒆𝒔𝒔𝒊𝒏𝒆 𝒖𝒏 𝒂𝒗𝒆𝒏𝒊𝒓 𝒐ù 𝒊𝒍 𝒏'𝒚 𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒏𝒆..🤍🪐💗🍯` },
      { time: "16:00", message: `𝑯𝒐𝒘𝒆𝒗𝒆𝒓 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕 𝒍𝒊𝒇𝒆 𝒎𝒂𝒚 𝒔𝒆𝒆𝒎, 𝒕𝒉𝒆𝒓𝒆 𝒊𝒔 𝒂𝒍𝒘𝒂𝒚𝒔 𝒔𝒐𝒎𝒆𝒕𝒉𝒊𝒏𝒈 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒅𝒐 𝒂𝒏𝒅 𝒔𝒖𝒄𝒄𝒆𝒆𝒅 𝒂𝒕🩵✨
‏مهما بدت الحياة صعبه، يوجد دائمًا شيءٌ يمكنك النجاح فيه.🩵✨` },
      { time: "17:00", message: `𝘾𝙧𝙮𝙞𝙣𝙜 i𝙮s 𝙣𝙤𝙩 𝙖 𝙨𝙞𝙜𝙣 𝙤𝙛 𝙬𝙚𝙖𝙠𝙣𝙚𝙨𝙨. 𝙎𝙤𝙢𝙚𝙩𝙞𝙢𝙚𝙨 𝙖 𝙥𝙚𝙧𝙨𝙤𝙣 𝙘𝙧𝙞𝙚𝙨 𝙗𝙚𝙘𝙖𝙪𝙨𝙚 𝙝𝙚 𝙝𝙖𝙨 𝙗𝙚𝙚𝙣 𝙨𝙩𝙧𝙤𝙣𝙜 𝙛𝙤𝙧 𝙖 𝙡𝙤𝙣𝙜 𝙩𝙞𝙢𝙚. 🖤🥀
ليس البكاء دليل على الضعف، أحيانًا يبكي الشخص لأنه كان قوي لفترة طويلة.🖤🥀` },
      { time: "18:00", message: `‏"أعتقد أن بعض الناس قد قضوا الوقت معي لأنهم فقط كانوا وحيدين".🖤🥀
“𝙄 𝙩𝙝𝙞𝙣𝙠 𝙨𝙤𝙢𝙚 𝙥𝙚𝙤𝙥𝙡𝙚 𝙨𝙥𝙚𝙣𝙩 𝙩𝙞𝙢𝙚 𝙬𝙞𝙩𝙝 𝙢𝙚 𝙗𝙚𝙘𝙖𝙪𝙨𝙚 𝙩𝙝𝙚𝙮 𝙬𝙚𝙧𝙚 𝙟𝙪𝙨𝙩 𝙡𝙤𝙣𝙚𝙡𝙮.”🖤🥀` },
      { time: "19:00", message: `أنا ذلك الشخص الذي يرشد التائهين ولا يعرف كيف يغادر المتاهة.🤎🌪

𝒊 𝒂𝒎 𝒕𝒉𝒆 𝒑𝒆𝒓𝒔𝒐𝒏 𝒘𝒉𝒐 𝒈𝒖𝒊𝒅𝒆𝒔 𝒕𝒉𝒆 𝒘𝒂𝒏𝒅𝒆𝒓𝒊𝒏𝒈 𝒂𝒏𝒅 𝒅𝒐 𝒏𝒐𝒕 𝒌𝒏𝒐𝒘 𝒉𝒐𝒘 𝒕𝒐 𝒍𝒆𝒂𝒗𝒆 𝒕𝒉𝒆 𝒎𝒂𝒛𝒆.🤎🌪` },
      { time: "20:00", message: `أن يَكون لك صَديق يَراك وكأنّك الخير في
هذهِ الأرض، شُعور لا يُمكنك أن تَضعه في
كلماتٍ مُناسِبة.💖"
𝙏𝙤 𝙝𝙖𝙫𝙚 𝙖 𝙛𝙧𝙞𝙚𝙣𝙙 𝙬𝙝𝙤 𝙨𝙚𝙚𝙨 𝙮𝙤𝙪 𝙖𝙨 𝙩𝙝𝙚 𝙗𝙚𝙨𝙩 𝙞𝙣 𝙮𝙤𝙪
𝙏𝙝𝙞𝙨 𝙚𝙖𝙧𝙩𝙝, 𝙖 𝙛𝙚𝙚𝙡𝙞𝙣𝙜 𝙮𝙤𝙪 𝙘𝙖𝙣'𝙩 𝙥𝙪𝙩 𝙞𝙣
𝙎𝙪𝙞𝙩𝙖𝙗𝙡𝙚 𝙬𝙤𝙧𝙙𝙨.💖` },
      { time: "21:00", message: `-الغائبون بلا عذر كالحاضرين بلا فائدة ، كلاهما يشغل حيزاً ﻻ يستحقه.💨
- 𝑇ℎ𝑜𝑠𝑒 𝑤ℎ𝑜 𝑎𝑟𝑒 𝑎𝑏𝑠𝑒𝑛𝑡 𝑤𝑖𝑡ℎ𝑜𝑢𝑡 𝑒𝑥𝑐𝑢𝑠𝑒 𝑎𝑟𝑒 𝑙𝑖𝑘𝑒 𝑡ℎ𝑜𝑠𝑒 𝑤ℎ𝑜 𝑎𝑟𝑒 𝑝𝑟𝑒𝑠𝑒𝑛𝑡 𝑤𝑖𝑡ℎ𝑜𝑢𝑡 𝑏𝑒𝑛𝑒𝑓𝑖𝑡. 𝐵𝑜𝑡ℎ 𝑜𝑓 𝑡ℎ𝑒𝑚 𝑜𝑐𝑐𝑢𝑝𝑦 𝑠𝑝𝑎𝑐𝑒 𝑡ℎ𝑎𝑡 𝑡ℎ𝑒𝑦 𝑑𝑜 𝑛𝑜𝑡 𝑑𝑒𝑠𝑒𝑟𝑣𝑒.💨` }
    
    ];

    const imageUrls = [
      "https://i.imgur.com/L39Bu27.jpeg",
      "https://i.imgur.com/lTm8CtH.jpeg",
      "https://i.imgur.com/2GgRzqu.jpeg",
      "https://i.imgur.com/cl9dHRU.png",
      "https://i.imgur.com/tb5JrpZ.jpeg",
      "https://i.imgur.com/cObPoNO.jpeg",
      "https://i.imgur.com/rAfXyDp.jpeg",
      "https://i.imgur.com/2lJlHJA.jpeg",
      "https://i.imgur.com/tHVgnAv.jpeg",
      "https://i.imgur.com/4HIFOiZ.jpeg",
      "https://i.imgur.com/O7NTeg8.jpeg",
      "https://i.imgur.com/2B7aLoZ.jpeg",
      "https://i.postimg.cc/jdHzrm2N/image.webp",
      "https://i.postimg.cc/Hk3XrMQk/c54f35041041453456734f737bf6e99b8978731f-high.webp"
      // أضف المزيد من الروابط هنا
    ];

    // دالة لحساب الوقت المتبقي للوصول إلى التوقيت المحدد باستخدام moment-timezone
    function calculateDelay(targetTime, timezone) {
      const now = moment().tz(timezone);
      const target = moment.tz(targetTime, "HH:mm", timezone);

      // إذا كان الوقت المستهدف قد مرّ بالفعل اليوم، نحدد الموعد لليوم التالي
      if (target.isBefore(now)) {
        target.add(1, "day");
      }

      return target.diff(now); // الوقت المتبقي بالمللي ثانية
    }

    // دالة لتحميل الصورة من الإنترنت إلى مجلد cache
    async function downloadImage(url) {
      const imagePath = path.join(process.cwd(), "cache", `${Date.now()}.jpg`);
      const response = await axios({
        url,
        method: "GET",
        responseType: "stream"
      });

      const writer = fs.createWriteStream(imagePath);
      response.data.pipe(writer);

      return new Promise((resolve, reject) => {
        writer.on("finish", () => resolve(imagePath));
        writer.on("error", reject);
      });
    }

    // دالة لإرسال رسالة مع صورة عشوائية في الوقت المحدد
    async function scheduleReminder(time, message, timezone) {
      const delay = calculateDelay(time, timezone);
      setTimeout(async () => {
        // اختيار صورة عشوائية
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        try {
          // تحميل الصورة وحفظها في المجلد المؤقت
          const imagePath = await downloadImage(randomImageUrl);

          // إعداد المرفقات مع الصورة
          const attachment = {
            body: message,
            attachment: fs.createReadStream(imagePath)};

          // إرسال الرسالة مع الصورة
          api.sendMessage(attachment, event.threadID, event.messageID, async () => {
            // حذف الصورة من المجلد المؤقت بعد الإرسال
            await unlinkAsync(imagePath);
          });
        } catch (error) {
          console.error("خطأ أثناء تحميل أو إرسال الصورة:", error);
          api.sendMessage("حدث خطأ أثناء تحميل الصورة.", event.threadID, event.messageID);
        }

        // جدولة الرسالة لليوم التالي بعد إرسالها
        setInterval(async () => {
          const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
          
          try {
            const imagePath = await downloadImage(randomImageUrl);
            const attachment = {
              body: message,
              attachment: fs.createReadStream(imagePath)
            };

            api.sendMessage(attachment, event.threadID, event.messageID, async () => {
              await unlinkAsync(imagePath);
            });
          } catch (error) {
            console.error("خطأ أثناء تحميل أو إرسال الصورة:", error);
            api.sendMessage("حدث خطأ أثناء تحميل الصورة.", event.threadID, event.messageID);
          }
        }, 24 * 60 * 60 * 1000); // إعادة جدولة كل 24 ساعة
      }, delay);
    }

    // جدولة جميع الرسائل للأوقات المحددة
    reminders.forEach(reminder => {
      scheduleReminder(reminder.time, reminder.message, "Africa/Casablanca"); // حدد المنطقة الزمنية هنا
    });

    // رسالة عند تفعيل الجدولة
    api.sendMessage("تم إعداد التذكيرات اليومية!", event.threadID, event.messageID);
  }
};