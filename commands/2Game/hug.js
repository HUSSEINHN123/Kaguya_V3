import jimp from 'jimp';
import fs from 'fs';

async function bal(one, two) {
    let avatarOne = await circle(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
    let avatarTwo = await circle(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);

    let avone = await jimp.read(await circle(avatarOne));
    let avtwo = await jimp.read(await circle(avatarTwo));

    let img = await jimp.read("https://i.imgur.com/ReWuiwU.jpg");

    img.resize(466, 659).composite(avone.resize(110, 110), 150, 76).composite(avtwo.resize(100, 100), 245, 305);

    const pth = "حضن.png";
    await img.writeAsync(pth);
    return pth;
}

async function circle(url) {
    const img = await jimp.read(url);
    img.circle();
    return await img.getBufferAsync(jimp.MIME_PNG);
}

export default {
    name: "حضن2",
    author: "Anonymous",
    role: "member",
    description: "إرسال صورة عناق بين شخصين ممنوحين.",
    execute: async function ({ api, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return api.sendMessage(" ⚠️ | المرجو عمل منشن للشخص اللذي تريد عناقه 🙂", event.threadID);
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            try {
                const ptth = await bal(one, two);
                return api.sendMessage({ body: "فقط أنتي وأنا 🥰", attachment: fs.createReadStream(ptth) }, event.threadID);
            } catch (error) {
                console.error(error);
                return api.sendMessage("حدث خطأ أثناء إرسال الصورة.", event.threadID);
            }
        } else {
            const one = mention[1], two = mention[0];
            try {
                const ptth = await bal(one, two);
                return api.sendMessage({ body: "فقط أنتي وأنا 🥰 <3", attachment: fs.createReadStream(ptth) }, event.threadID);
            } catch (error) {
                console.error(error);
                return api.sendMessage("حدث خطأ أثناء إرسال الصورة.", event.threadID);
            }
        }
    }
};
