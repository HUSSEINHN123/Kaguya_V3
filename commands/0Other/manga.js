import axios from "axios";
import fs from "fs-extra";
import path from "path";

export default {
  name: "اقتباس",
  author: "حسين يعقوبي",
  role: "member",
  aliases:["إقتباس","اقتباسات"],
  description: "يرسل اقتباسات عميقة مع صور معبرة 💖.",
  execute: async ({ api, event, Economy }) => {
    try {
      const messages = [
      `لــيــتـــــنا نـــســـتـــطـــيـــع إيــقــاف الـــــــزمــــن عــــلـــــى لـــــحـــــظـــــات كـــنـــا بـــــهــــــا ســعــداء 
⁰⁰.⁰⁰🖤🍷𝕀 𝕨𝕚𝕤𝕙 𝕨𝕖 𝕔𝕠𝕦𝕝𝕕 𝕤𝕥𝕠𝕡 𝕥𝕚𝕞𝕖 𝕠𝕟 𝕞𝕠𝕞𝕖𝕟𝕥𝕤 𝕨𝕙𝕖𝕟 𝕨𝕖 𝕨𝕖𝕣𝕖 𝕙𝕒𝕡𝕡𝕪 ⁰⁰.⁰⁰🖤🍷`,
        `أحدهم يضحك وأحدهم يبڪي ، أحدهم يُريد العيش والآخر يشتهي الموت ، وأحدهم لم يعد يبالي ..
وجميعهم أنا 🤎🥂🍂🖤🗞🥀
𝒐𝒏𝒆 𝒐𝒇 𝒕𝒉𝒆𝒎 𝒍𝒂𝒖𝒈𝒉𝒔, 𝒐𝒏𝒆 𝒐𝒇 𝒕𝒉𝒆𝒎 𝒄𝒓𝒊𝒆𝒔, 𝒐𝒏𝒆 𝒐𝒇 𝒕𝒉𝒆𝒎 𝒘𝒂𝒏𝒕𝒔 𝒕𝒐 𝒍𝒊𝒗𝒆, 𝒕𝒉𝒆 𝒐𝒕𝒉𝒆𝒓 𝒍𝒐𝒏𝒈𝒔 𝒇𝒐𝒓 𝒅𝒆𝒂𝒕𝒉, 𝒂𝒏𝒅 𝒐𝒏𝒆 𝒐𝒇 𝒕𝒉𝒆𝒎 𝒏𝒐 𝒍𝒐𝒏𝒈𝒆𝒓 𝒄𝒂𝒓𝒆𝒔.
 𝒂𝒏𝒅 𝒂𝒍𝒍 𝒐𝒇 𝒕𝒉𝒆𝒎 𝒂𝒓𝒆 𝒎𝒆 🖤🦋🥀🤎🍻📜`,
        `لا تيأس وأنت تعلم أن الله دوماً يخلق نوراً جديداً بعد كل ظلام🧚‍♀️🗞
𝑫𝒐𝒏'𝒕 𝒅𝒆𝒔𝒑𝒂𝒊𝒓 𝒘𝒉𝒊𝒍𝒆 𝒚𝒐𝒖 𝒌𝒏𝒐𝒘 𝒕𝒉𝒂𝒕 𝑨𝒍𝒍𝒂𝒉 𝒂𝒍𝒘𝒂𝒚𝒔 𝒄𝒓𝒆𝒂𝒕𝒆𝒔 𝒏𝒆𝒘 𝒍𝒊𝒈𝒉𝒕 𝒂𝒇𝒕𝒆𝒓 𝒆𝒗𝒆𝒓𝒚 𝒅𝒂𝒓𝒌𝒏𝒆𝒔𝒔🧚‍♀️`,
        `سوف يشتاقون اليك, عندما يفشلون في العثور على شخص مثلك. 🥀🌺
𝓣𝓱𝓮𝔂 𝔀𝓲𝓵𝓵 𝓶𝓲𝓼𝓼 𝔂𝓸𝓾 , 𝓦𝓱𝓮𝓷 𝓣𝓱𝓮𝔂 𝓯𝓪𝓲𝓵 𝓣𝓸 𝓯𝓲𝓷𝓓 𝓼𝓸𝓶𝓮𝓸𝓷𝓮 𝓛𝓲𝓴𝓮 𝓨𝓸𝓾🦋💜

آتٌـرکْ رسِــآلَــةّ  لَـشُخِــصّ  دٍوٌنِ ذِگــر آسِمًــهّ💔`,
        `لا شي يبقـــى للأبد حتى الشمس سـتگسر القانون يوماً وتشرق غارباً لتعلن النهاية🧡✨
𝑵𝑶𝑻𝑯𝑰𝑵𝑮 𝑹𝑬𝑴𝑨𝑰𝑵𝑺 𝑭𝑶𝑹𝑬𝑽𝑬𝑹, 𝑼𝑵𝑻𝑰𝑳 𝑻𝑯𝑬 𝑺𝑼𝑵 𝑾𝑰𝑳𝑳 𝑩𝑹𝑬𝑨𝑲 ✨🧡`,
        `➢بكـيت ثم ابتسمت و قـلت ؛ لا بُأس سيـأخذني الـلـه ذات يــوم🖤🏹.💔 0:00●━━━━━━━━━━━━ 2:49 ⇆ㅤㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ ↻‎#❥ــــہہـ٨ـہہـ٨ــــ♥ـــــﮩـLـــہہہـ٨ـہـ٨ـــ  💔`,
        `:ومــافائـــدة قلـــبي الأبـيض🤍 وأيـــامـي كلــــها سوداء 🖤
😞 𝒲𝒽𝒶𝓉 𝒾𝓈 𝓉𝒽ℯ 𝓊𝓈ℯ ℴ𝒻 𝓂𝓎 𝓌𝒽𝒾𝓉ℯ 𝒽ℯ𝒶𝓇𝓉 🤍 𝒶𝓃𝒹 𝒶𝓁𝓁 𝓂`,
        `"أحياناً لا يتوجب عليك سماع اعذارهم، لأن افعالهم قالت كل الحقيقة ".🖤🎶🥀
"S𝔬𝔪𝔢𝔱𝔦𝔪𝔢𝔰 𝔶𝔬𝔲 𝔡𝔬 𝔫𝔬𝔱 𝔥𝔞𝔳𝔢 𝔱𝔬 𝔥𝔢𝔞𝔯 𝔱𝔥𝔢𝔦𝔯 𝔢𝔵𝔠𝔲𝔰𝔢𝔰, 𝔟𝔢𝔠𝔞𝔲𝔰𝔢 𝔱𝔥𝔢𝔦𝔯 𝔞𝔠𝔱𝔦𝔬𝔫𝔰 𝔰𝔞𝔦𝔡 𝔞𝔩𝔩 𝔱𝔥𝔢 𝔱𝔯𝔲𝔱𝔥."🖤🎶🥀.🧡💭🎗`,
        `•♡
مهما حاولت أن أࢪد الإساءة بالإساءة ؛ غلبني الأصل الطيب 🤍😇

𝑵𝒐 𝒎𝒂𝒕𝒕𝒆𝒓 𝒉𝒐𝒘 𝒎𝒖𝒄𝒉 𝑰 𝒕𝒓𝒚 𝒕𝒐 𝒓𝒆𝒑𝒂𝒚 𝒐𝒇𝒇𝒆𝒏𝒔𝒆 𝒘𝒊𝒕𝒉 𝒐𝒇𝒇𝒆𝒏𝒔𝒆, 𝒕𝒉𝒆 𝒈𝒐𝒐𝒅 𝒐𝒓𝒊𝒈𝒊𝒏 𝒑𝒓𝒆𝒗𝒂𝒊𝒍𝒔 𝒐𝒗𝒆𝒓 𝒎𝒆 🥺🤞`,
        `ويبقى الاشتياق في القلب لا يشعر به احد🥀
الكرامة جميلة حتى وإن جعلتك وحيداً 🖤🦋🥀
.𝒅𝒊𝒈𝒏𝒊𝒕𝒚 𝒊𝒔 𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝒆𝒗𝒆𝒏 𝒊𝒇 𝒊𝒕 𝒎𝒂𝒌𝒆𝒔 𝒚𝒐𝒖 𝒂𝒍𝒐𝒏𝒆.🖤🎶فراشة الزهور 🥹`,
        `❤أجمل وأروع هندسة في العالم أن تبني جسراً من الأمل على نهر من اليأس 🖤🪄`,
`𝑡ℎ𝑒 𝑚𝑜𝑠𝑡 𝑏𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 𝑎𝑛𝑑 𝑤𝑜𝑛𝑑𝑒𝑟𝑓𝑢𝑙 𝑒𝑛𝑔𝑖𝑛𝑒𝑟𝑖𝑛𝑔 𝑖𝑛  𝑡ℎ𝑒 𝑤𝑜𝑟𝑙𝑑 𝑖𝑠 𝑡𝑜 𝑏𝑢𝑖𝑙𝑑 𝑎 𝑏𝑟𝑖𝑑𝑔𝑒 𝑜𝑓 ℎ𝑜𝑝𝑒 𝑜𝑣𝑒𝑟 𝑎 𝑟𝑖𝑣𝑒𝑟 𝑜𝑓 𝑑𝑒𝑠𝑝𝑎𝑖𝑟🖤
❤لـيـٰس ڪُـل هُـبـوط  يَـعـني انـهـّيـار مـقـآمـڪ فـهـبوطڪٰ  للسـجُـود يـࢪفـعـڪ الـىٰ ٱعـلى •• 🩵🧷
 𝑻𝒐𝒖𝒕𝒆𝒔 𝒍𝒆𝒔 𝒅𝒆𝒔𝒄𝒆𝒏𝒕𝒆𝒔 𝒏𝒆 𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒆𝒏𝒕 𝒑𝒂𝒔 𝒍'𝒆𝒇𝒇𝒐𝒏𝒅𝒓𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝒗𝒐𝒕𝒓𝒆 𝒑𝒐𝒔𝒊𝒕𝒊𝒐𝒏, 𝒅𝒐𝒏𝒄 𝒍𝒂 𝒅𝒆𝒔𝒄𝒆𝒏𝒕𝒆 à 𝒍𝒂 𝒑𝒓𝒐𝒔𝒕𝒓𝒂𝒕𝒊𝒐𝒏 𝒗𝒐𝒖𝒔 é𝒍è𝒗𝒆 𝒑𝒍𝒖𝒔 𝒉𝒂𝒖𝒕 .🩵🧷`,
        `❤الـــنـاس جــمـيـعـــا يـتـغـيـرون لـــسـبـبـيـن فــقـط إمــــا تــكـون عــقـولــهـم قــــد فــتـحـت وإمــــا أن تــكـون قـــلــوبـــهـم قــــد تــحـطـمـة.🥀💔
All people change for two reasons only: either their minds have been opened or their hearts have been broken.🥀💔`,
        `بَعٍض آلُِأصدِقٌآء نفُوُس رٍآقٌية وُأنيقٌة يجٍعٍلُِوُنڪ تڪتفُي بَهـم عٍن مئآت آلُِأصدِقٌآء .. 🖤🖇🥀" 
𝕾𝖔𝖒𝖊 𝖋𝖗𝖎𝖊𝖓𝖉𝖘 𝖆𝖗𝖊 𝖈𝖑𝖆𝖘𝖘𝖞 𝖆𝖓𝖉 𝖊𝖑𝖊𝖌𝖆𝖓𝖙 𝖘𝖔𝖚𝖑𝖘 𝖜𝖍𝖔 𝖒𝖆𝖐𝖊 𝖞𝖔𝖚 𝖘𝖆𝖙𝖎𝖘𝖋𝖎𝖊𝖉 𝖜𝖎𝖙𝖍 𝖙𝖍𝖊𝖒 𝖔𝖛𝖊𝖗 𝖍𝖚𝖓𝖉𝖗𝖊𝖉𝖘 𝖔𝖋 𝖋𝖗𝖎𝖊𝖓𝖉𝖘 .. 🖤🖇🥀"
🤍`,
        `❤أجمل وأروع هندسة في العالم أن تبني جسراً من الأمل على نهر من اليأس 🖤🪄
𝑡ℎ𝑒 𝑚𝑜𝑠𝑡 𝑏𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 𝑎𝑛𝑑 𝑤𝑜𝑛𝑑𝑒𝑟𝑓𝑢𝑙 𝑒𝑛𝑔𝑖𝑛𝑒𝑟𝑖𝑛𝑔 𝑖𝑛  𝑡ℎ𝑒 𝑤𝑜𝑟𝑙𝑑 𝑖𝑠 𝑡𝑜 𝑏𝑢𝑖𝑙𝑑 𝑎 𝑏𝑟𝑖𝑑𝑔𝑒 𝑜𝑓 ℎ𝑜𝑝𝑒 𝑜𝑣𝑒𝑟 𝑎 𝑟𝑖𝑣𝑒𝑟 𝑜𝑓 𝑑𝑒𝑠𝑝𝑎𝑖𝑟🖤🪄`,
        `

❤الـــنـاس جــمـيـعـــا يـتـغـيـرون لـــسـبـبـيـن فــقـط إمــــا تــكـون عــقـولــهـم قــــد فــتـحـت وإمــــا أن تــكـون قـــلــوبـــهـم قــــد تــحـطـمـة.🥀💔
All people change for two reasons only: either their minds have been opened or their hearts have been broken.🥀💔`,
        `

❤" حــتـي عـــائــلـتـك لا يـهـمـهـا مـاذا يــحـدث لـكـ كـل مـا يـهـمـهـا نـظـرت الـمـجـتـمـع لـكـ "
ـــ\/ــــــــــ\/ـــــــــــــ\/ــــــــــــــ\/ـــــــــ💔ـــــــــ\/ــــــــــــــ\/ــــــــــــ\/ــــــــــــ\/ـــ
“Even your family doesn’t care what happens to you, all that matters to them is how society sees you.”
`,
        `𝕳𝖆𝖞𝖆𝖙 𝖗𝖆𝖓𝖉𝖊𝖛𝖚𝖘𝖚𝖟 𝖇𝖎𝖗 𝖐𝖆𝖛𝖚ş𝖒𝖆 𝖛𝖊 𝖘𝖊𝖇𝖊𝖕𝖘𝖎𝖟 𝖇𝖎𝖗 𝖆𝖞𝖗ı𝖑ı𝖐𝖙ı𝖗🧸🤎
❤الحياة هي لقاء بلا موعد و فراق بدون سبب 🤎🧸

                      🌹🥀`,
        `♕. مأجمـل الــذي يتـــألم و لا يتكلــم و الــذي ينخــدع و لا يخــون. فليـس كـل مـن إبتســم سعيـــد قـد يكـون ورآء الإبتسامــات حــزن شديـــده ♕🖤🗞🥀
──── ❖ ──── ☠︎︎ ──── ❖ ────
🖤𝒲𝒽𝒾𝒸𝒽 𝒾𝓈 𝓉𝒽ℯ 𝓂ℴ𝓈𝓉 𝒷ℯ𝒶𝓊𝓉𝒾𝒻𝓊𝓁 𝒶𝓃𝒹 𝒹ℴℯ𝓈 𝓃ℴ𝓉 𝓈𝓅ℯ𝒶𝓀 𝒶𝓃𝒹 𝒹ℴ 𝓃ℴ𝓉 𝒷ℯ 𝒻ℴℴ𝓁ℯ𝒹. ℐ𝓉 𝒾𝓈 𝓃ℴ𝓉 ℯ𝓋ℯ𝓇𝓎ℴ𝓃ℯ 𝓌𝒽ℴ 𝓈𝓂𝒾𝓁ℯ𝓈 𝒽𝒶𝓅𝓅𝓎 𝒶𝓃𝒹 𝓉𝒽ℯ 𝓈𝓂𝒾𝓁ℯ𝓈 𝓂𝒶𝓎 𝒷ℯ 𝓈ℯ𝓋ℯ𝓇ℯ 🤎🥂🍂`,
        `الحياة روايةٌ جميلةٌ عليك قراءتها حتى النهاية، لا تتوقف أبداً عند سطرٍ حزينٍ، قد تكون النهاية جميلةً . . 🩷🍂🦋"
 𝐋𝐢𝐟𝐞 𝐢𝐬 𝐚 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 𝐧𝐨𝐯𝐞𝐥 𝐭𝐡𝐚𝐭 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐭𝐨 𝐫𝐞𝐚𝐝 𝐭𝐨 𝐭𝐡𝐞 𝐞𝐧𝐝, 𝐧𝐞𝐯𝐞𝐫 𝐬𝐭𝐨𝐩 𝐚𝐭 𝐚 𝐬𝐚𝐝 𝐥𝐢𝐧𝐞, 𝐭𝐡𝐞 𝐞𝐧𝐝 𝐦𝐚𝐲 𝐛𝐞 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 . . 🩷💙🍂`,
        `قدوتي ليس ممثلاً أو مغنيًا، قدوتي هو  محمد ﷺ ابن عبد الله بن عبد المطلب.🤍
𝓜𝔂 𝓻𝓸𝓵𝓮 𝓶𝓸𝓭𝓮𝓵 𝓲𝓼 𝓷𝓸𝓽 𝓪𝓷 𝓪𝓬𝓽𝓸𝓻 𝓸𝓻 𝓼𝓲𝓷𝓰𝓮𝓻, 𝓶𝔂 𝓻𝓸𝓵𝓮 𝓶𝓸𝓭𝓮𝓵 𝓲𝓼 𝓜𝓾𝓱𝓪𝓶𝓶𝓪𝓭 ﷺ 𝓫𝓲𝓷 𝓐𝓫𝓭𝓾𝓵𝓵𝓪𝓱 𝓫𝓲𝓷 𝓐𝓫𝓭𝓾𝓵 𝓜𝓾𝓽𝓽𝓪𝓵𝓲𝓫.🤍`,
        `لا يهمني ان كنت لا تحبني فطريق الجنة لا يمر بحديقتك.🍂
𝐼 𝑑𝑜𝑛'𝑡 𝑐𝑎𝑟𝑒 𝑖𝑓 𝑦𝑜𝑢 𝑑𝑜𝑛'𝑡 𝑙𝑜𝑣𝑒 𝑚𝑒, 𝑡ℎ𝑒 𝑝𝑎𝑡ℎ 𝑡𝑜 ℎ𝑒𝑎𝑣𝑒𝑛 𝑑𝑜𝑒𝑠 𝑛𝑜𝑡 𝑝𝑎𝑠𝑠 𝑡ℎ𝑟𝑜𝑢𝑔ℎ 𝑦𝑜𝑢𝑟 𝑔𝑎𝑟𝑑𝑒𝑛🍂`,
        `دع إبـتـسامتڪ تـغـيـر الـعـالم ولا تـدع الـعـالم يغـيـر إبـتـسامتڪ🐚🤎🎧🖤🎶
𝙇𝙚𝙩 𝙮𝙤𝙪𝙧 𝙨𝙢𝙞𝙡𝙚 𝙘𝙝𝙖𝙣𝙜𝙚 𝙩𝙝𝙚 𝙬𝙤𝙧𝙡𝙙 𝙖𝙣𝙙 𝙙𝙤𝙣'𝙩 𝙡𝙚𝙩 𝙩𝙝𝙚 𝙬𝙤𝙧𝙡𝙙🐚🤎🧸🏷`,
        `𝕰𝖛𝖊𝖗𝖞 𝖘𝖎𝖓𝖌𝖑𝖊 𝖕𝖊𝖗𝖘𝖔𝖓 𝖔𝖓 𝖙𝖍𝖊 𝖕𝖑𝖆𝖓𝖊𝖙 𝖍𝖆𝖘 𝖆 𝖘𝖙𝖔𝖗𝖞. 𝕯𝖔𝖓’𝖙 𝖏𝖚𝖉𝖌𝖊 𝖕𝖊𝖔𝖕𝖑𝖊 𝖇𝖊𝖋𝖔𝖗𝖊 𝖞𝖔𝖚 𝖙𝖗𝖚𝖑𝖞 𝖐𝖓𝖔𝖜 𝖙𝖍𝖊𝖒. 𝕿𝖍𝖊 𝖙𝖗𝖚𝖙𝖍 𝖒𝖎𝖌𝖍𝖙 𝖘𝖚𝖗𝖕𝖗𝖎𝖘𝖊 𝖞𝖔𝖚. 🧸🤎
- ڪل شخـص عـلى هـذا الڪوڪب لديـه قـصة. لا تحڪم عـلى الـناس قـبل أن تعرفهـم حـقًا، الحقــيقة قـد تفـاجئك. 🧸
🖋❤️`,
        `غباء منك أن تكون حزينا، بسبب شخص يعيش حياته بكل سعادة 🖤📜
𝐈𝐭'𝐬 𝐬𝐭𝐮𝐩𝐢𝐝 𝐨𝐟 𝐲𝐨𝐮 𝐭𝐨 𝐛𝐞 𝐬𝐚𝐝, 𝐛𝐞𝐜𝐚𝐮𝐬𝐞 𝐨𝐟 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐰𝐡𝐨 𝐥𝐢𝐯𝐞𝐬 𝐡𝐢𝐬 𝐥𝐢𝐟𝐞 𝐡𝐚𝐩𝐩𝐢𝐥𝐲`,
        `بَعٍض آلُِأصدِقٌآء نفُوُس رٍآقٌية وُأنيقٌة يجٍعٍلُِوُنڪ تڪتفُي بَهـم عٍن مئآت آلُِأصدِقٌآء .. 🖤🖇🥀" 
𝕾𝖔𝖒𝖊 𝖋𝖗𝖎𝖊𝖓𝖉𝖘 𝖆𝖗𝖊 𝖈𝖑𝖆𝖘𝖘𝖞 𝖆𝖓𝖉 𝖊𝖑𝖊𝖌𝖆𝖓𝖙 𝖘𝖔𝖚𝖑𝖘 𝖜𝖍𝖔 𝖒𝖆𝖐𝖊 𝖞𝖔𝖚 𝖘𝖆𝖙𝖎𝖘𝖋𝖎𝖊𝖉 𝖜𝖎𝖙𝖍 𝖙𝖍𝖊𝖒 𝖔𝖛𝖊𝖗 𝖍𝖚𝖓𝖉𝖗𝖊𝖉𝖘 𝖔𝖋 𝖋𝖗𝖎𝖊𝖓𝖉𝖘 .. 🖤🖇🥀"
🤍`,
        `لا خوف على فتاة حافضة للقـــــࢪان 📖💜

There is no fear for a girl who has memorized the Qur’an 💜📖`,
        `:أصـبـحـت أتـخـلى عـّن الـجــمــيـع مـّن أجـل سـلامـة مـزاجـي ولـسـت ب أســف✨💜

𝑰 𝒈𝒊𝒗𝒆 𝒖𝒑 𝒂𝒍𝒍 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒔𝒂𝒌𝒆 𝒐𝒇 𝒎𝒚 𝒎𝒐𝒐𝒅 𝒂𝒏𝒅 𝑰 𝒂𝒎 𝒏𝒐𝒕 𝒔𝒐𝒓𝒓𝒚.✨💜`,
        `•♡•
بمجرد أن تخطئ سينسى الناس أنڪ ڪنت رائعا يوما ما 🖤🥀...

𝗢𝗻𝗰𝗲 𝘆𝗼𝘂 𝗺𝗮𝗸𝗲 𝗮 𝗺𝗶𝘀𝘁𝗮𝗸𝗲, 𝗽𝗲𝗼𝗽𝗹𝗲 𝘄𝗶𝗹𝗹 𝗳𝗼𝗿𝗴𝗲𝘁 𝘁𝗵𝗮𝘁 𝘆𝗼𝘂 𝘄𝗲𝗿𝗲 𝗼𝗻𝗰𝗲 𝗴𝗿𝗲𝗮𝘁🥀🖤..`,
        `قَالَ رسُولُ اللَّهِ ﷺ: « الْبخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ، فَلَم يُصَلِّ علَيَّ » 🖤🫀

𝚕𝚎 𝙿𝚛𝚘𝚙𝚑è𝚝𝚎 𝚊 𝚍𝚒𝚝 : « 𝙻'𝚊𝚟𝚊𝚛𝚎 𝚎𝚜𝚝 𝚌𝚎𝚕𝚞𝚒 𝚚𝚞𝚒 𝚗𝚎 𝚙𝚛𝚒𝚎 𝚙𝚊𝚜 𝚙𝚘𝚞𝚛 𝚖𝚘𝚒 𝚕𝚘𝚛𝚜𝚚𝚞𝚎 𝚖𝚘𝚗 𝚗𝚘𝚖 𝚎𝚜𝚝 𝚖𝚎𝚗𝚝𝚒𝚘𝚗𝚗é 𝚎𝚗 𝚜𝚊 𝚙𝚛é𝚜𝚎𝚗𝚌𝚎. » 🖤🫀
ﺟﺎﺭٍ البحث عن محبي رسول الله 🙏🏻🦋😕🥺
 ██████▒▒75%`,
        `السعادة، هي أن ترى والديك فخورين بك.

𝒉𝒂𝒑𝒑𝒊𝒏𝒆𝒔𝒔 𝒊𝒔 𝒔𝒆𝒆𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒑𝒂𝒓𝒆𝒏𝒕𝒔 𝒃𝒆𝒊𝒏𝒈 𝒑𝒓𝒐𝒖𝒅 𝒐𝒇 𝒚𝒐u`,
        `‏لا ترهق نفسك بالتبرير فَمن يُحبك لا يرحل...🖤🖇️  𝑫𝒐 𝒏𝒐𝒕 𝒕𝒊𝒓𝒆 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒘𝒊𝒕𝒉 𝒋𝒖𝒔𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒘𝒉𝒐𝒆𝒗𝒆𝒓 𝒍𝒐𝒗𝒆𝒔 𝒚𝒐𝒖 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒍𝒆𝒂𝒗𝒆...🖤🍷‏❤️✨`,
        `عــجـــبـا لأمـــر بــعــض الــــنــاس إذا لـــم تــفـــعــل مـــا يـــريــدون اصــبـــحـــت لا تــعــــجـــبــهـم 📃💉☑️💎🤝✌`,
        `إشـــــتــقــت لــــــهــدوء الـــــقــبــور فــــضـجـيـج الــــحـــيـــاة اتـــــــــعـــبـنــي 👆🥀
I miss the quiet of the graves, but the noise of life makes me tired.👆🥀`,
        `🌠🖤صعـب جداً..أن تُـعطي إنساناً كُـل حُبـك🥺🫶، وتـفكيرك، وحيـاتك..✨🧸وهو لا يستطيـع حتى أن يُعطيـك بعضاً من وقتـه ليسأل عنـك.. 💞💔🖇️🥺

💔💙💞ᶦᵗ ᶦˢ ᵛᵉʳʸ ᵈᶦᶠᶠᶦᶜᵘˡᵗ..ᵗᵒ ᵍᶦᵛᵉ ᵃ ᵖᵉʳˢᵒⁿ ᵃˡˡ♡ ʸᵒᵘʳ ˡᵒᵛᵉ, ᵗʰᶦⁿᵏᶦⁿᵍ, ᵃⁿᵈ ˡᶦᶠᵉ.💗💥.ᵃⁿᵈ ʰᵉ ᶜᵃⁿ'ᵗ ᵉᵛᵉⁿ ᵍᶦᵛᵉ ʸᵒᵘ ˢᵒᵐᵉ 🥹ᵒᶠ ʰᶦˢ ᵗᶦᵐᵉ ᵗᵒ ᵃˢᵏ ᵃᵇᵒᵘᵗ ʸᵒᵘ.. 💔🖇️🥺`,
        `الحياة كالبيانو🎹 هناك أصابع بيضاء وهي السّعادة وهناك أصابع سوداء وهي الحزن ولكن تأكّد أنّك ستعزف بالاثنتين لكي تُعطي الحياة لحناً🎶`,
        `•تـجـاهل ماضـيڪ مـهـمـا ڪان ، لـتـتمـڪن مـن تـحـقـيـق أحـلامڪ.فـالـمـفـاتـيـح الـقـديـمـة لـن تـفـتـح أبـوابـا جـديـدة. ✨🖤
𝙄𝙜𝙣𝙤𝙧𝙚 𝙮𝙤𝙪𝙧 𝙥𝙖𝙨𝙩 , 𝙣𝙤 𝙢𝙖𝙩𝙩𝙚𝙧 𝙬𝙝𝙖𝙩. 𝙎𝙤 𝙮𝙤𝙪 𝙘𝙖𝙣 𝙖𝙘𝙝𝙞𝙚𝙫𝙚 𝙮𝙤𝙪𝙧 𝙙𝙧𝙚𝙖𝙢𝙨. 𝙊𝙡𝙙 𝙠𝙚𝙮𝙨 𝙬𝙤𝙣'𝙩 𝙤𝙥𝙚𝙣 𝙣𝙚𝙬 𝙙𝙤𝙤𝙧𝙨 ✨🖤
♫  0:00●━━━━━ 2:49 ◁ㅤㅤ❚❚ㅤㅤ▷`,
        `نظرات الناس لي صباحا تحسسني أنني من أيقظهم من النوم 🍋🙂
ᴘᴇᴏᴘʟᴇ's ʟᴏᴏᴋs ᴀᴛ ᴍᴇ ɪɴ ᴛʜᴇ ᴍᴏʀɴɪɴɢ ᴍᴀᴋᴇ ᴍᴇ ғᴇᴇʟ ᴛʜᴀᴛ ɪ ᴡᴏᴋᴇ ᴛʜᴇᴍ ғʀᴏᴍ sʟᴇᴇᴘ 🍋🙂`,
        `𝓓𝓸 𝓷𝓸𝓽 𝓬𝓪𝓻𝓻𝔂 𝓽𝓱𝓮 𝓽𝔀𝓸 𝓔𝓵𝓲𝓶𝓪𝓷𝓽𝓮𝓼 𝓽𝓱𝓮 𝓑𝓮𝓪𝓾𝓽𝔂 𝓞𝓕 𝔂𝓞𝓾𝓻 𝓢𝓶𝓲𝓛𝓛𝓮🖤🥺
لا تـــــــحـــمـــــل هــــمــا يـــــزيــــل جـــــمــــال ابـــتـــســــامــــتــــك 🖤🥺`,
        `انه لمن السهل السقوط في الحب ولكن من الصعب ايجاد من يستحق✨🖤🥂
it is so easy to fall in love but hard to find someone who deserves✨🖤🥂`,
        `‎‏╭───────╯•╰───────╮
أجدك في كل أغنية أستمع اليها "🎧💚
𝒊 𝒇𝒊𝒏𝒅 𝒚𝒐𝒖 𝒊𝒏 𝒆𝒗𝒆𝒓𝒚 𝒔𝒐𝒏𝒈 𝒊 𝒍𝒊𝒔𝒕𝒆𝒏 𝒕𝒐
‎‏╰───────╮•╭───────╯`,
        `🍷وكبداية لي معكم اتمنى عدم تجاهل🖤🥀🤍

🔮🎻 ولنا في الخيال حياة 🧸🎧
🎧🧸 we hve a life in imagination🎻🔮`,
        `♡
عـنـدمـا يـنـتـهـي الأهـتـمـام يـصـبـح الـوجـود مـثـل الـغـيـاب  🌊🎵🕯

𝒲𝒽ℯ𝓃  𝒶𝓉ℯ𝓃𝓉𝒾ℴ𝓃  ℯ𝓃𝒹𝓈, ℯ𝓍𝒾𝓈𝓉ℯ𝓃𝒸ℯ  𝒷ℯ𝒸ℴ𝓂𝓈 𝓁𝒾𝓀ℯ  𝒶𝒷𝓈𝒶𝓃𝒸ℯ " 💉🖤`,
        `"نتَجاهَل ليَبقى الوّدُ مُستَمراً، ليْس لأنّنا أغبِياء."🖤🖇🥂
“𝘞𝘦 𝘪𝘨𝘯𝘰𝘳𝘦 𝘵𝘰 𝘬𝘦𝘦𝘱 𝘵𝘩𝘦 𝘢𝘧𝘧𝘦𝘤𝘵𝘪𝘰𝘯 𝘨𝘰𝘪𝘯𝘨, 𝘯𝘰𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘸𝘦 𝘢𝘳𝘦 𝘴𝘵𝘶𝘱𝘪𝘥.”🥂🖤🖇`,
        `أجمل وأروع هندسة في العالم أن تبني جسراً من الأمل على نهر من اليأس 🖤🪄
𝑡ℎ𝑒 𝑚𝑜𝑠𝑡 𝑏𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 𝑎𝑛𝑑 𝑤𝑜𝑛𝑑𝑒𝑟𝑓𝑢𝑙 𝑒𝑛𝑔𝑖𝑛𝑒𝑟𝑖𝑛𝑔 𝑖𝑛  𝑡ℎ𝑒 𝑤𝑜𝑟𝑙𝑑 𝑖𝑠 𝑡𝑜 𝑏𝑢𝑖𝑙𝑑 𝑎 𝑏𝑟𝑖𝑑𝑔𝑒 𝑜𝑓 ℎ𝑜𝑝𝑒 𝑜𝑣𝑒𝑟 𝑎 𝑟𝑖𝑣𝑒𝑟 𝑜𝑓 𝑑𝑒𝑠𝑝𝑎𝑖𝑟🖤🪄`,
        `🌸🐾↫ • اࢪفـع مستوى ڪلماتڪ وليس صوتڪ،فالمطࢪ هو الذي يجعل الزهـوࢪ تنمو، وليس الࢪعد• ↬🕸🥀

🫀🐾↬ • 𝘙𝘢𝘪𝘴𝘦 𝘺𝘰𝘶𝘳 𝘸𝘰𝘳𝘥𝘴 𝘯𝘰𝘵 𝘺𝘰𝘶𝘳 𝘷𝘰𝘪𝘤𝘦,𝘪𝘵 𝘪𝘴 𝘳𝘢𝘪𝘯 𝘵𝘩𝘢𝘵 𝘨𝘰𝘸𝘴 𝘧𝘭𝘰𝘸𝘦𝘳𝘴 𝘯𝘰𝘵 𝘵𝘩𝘶𝘯𝘥𝘦𝘳 • ↫🕸🥀`,
        `- سأكون لك الأمان الذي لا يتخلى عنك يوماً 🫂❤
𝓘 𝔀𝓲𝓵𝓵 𝓫𝓮 𝔂𝓸𝓾𝓻 𝓼𝓪𝓯𝓮𝓽𝔂 𝓽𝓱𝓪𝓽 𝓷𝓮𝓿𝓮𝓻 𝓪𝓫𝓪𝓷𝓭𝓸𝓷𝓼 𝔂𝓸𝓾 🫂❤.`,
        `"قل لا لليأس، واستبدله بالتفاؤل والإيمان بالنجاح." 
"Say no to despair, and replace it with optimism and faith in success."
تصبحون على واقع أكثر تفاؤلا ونجاح أحبتي ❤💫💫`,
        `*تنتهي الايام السوداء لكن الذكريات الحزينة لاتغادر*🖤🎼
*The dark days end, but the sad memories do not leave*🖤🎼`,
        `وعنــــدما تحتاجون لنا ⏆ تذڪروا إننا سيــــئين ڪما أخــــبرتم الناس عنــــا <🖤🦋🥀
🌹✧════•❁❀❁•════✧🌹
🖤°•°•°•°•°•°•°•°∞°•°•°•°•°•°•°•°🖤
𝓐𝓷𝓭 𝔀𝓱𝓮𝓷 𝔂𝓸𝓾 𝓷𝓮𝓮𝓭 𝓾𝓼, 𝓻𝓮𝓶𝓮𝓶𝓫𝓮𝓻 𝓽𝓱𝓪𝓽 𝔀𝓮 𝓪𝓻𝓮 𝓪𝓼 𝓫𝓪𝓭 𝓪𝓼 𝔂𝓸𝓾 𝓽𝓸𝓵𝓭 𝓹𝓮𝓸𝓹𝓵𝓮 𝓪𝓫𝓸𝓾𝓽 𝓾𝓼🖤🖇🥀`,
        `لا شي يبقـــى للأبد حتى الشمس سـتگسر القانون يوماً وتشرق غارباً لتعلن النهاية🖤✨
𝑵𝑶𝑻𝑯𝑰𝑵𝑮 𝑹𝑬𝑴𝑨𝑰𝑵𝑺 𝑭𝑶𝑹𝑬𝑽𝑬𝑹, 𝑼𝑵𝑻𝑰𝑳 𝑻𝑯𝑬 𝑺𝑼𝑵 𝑾𝑰𝑳𝑳 𝑩𝑹𝑬𝑨𝑲 
◄◂⠀▮▮⠀▸► ♫ ♡ ▷ ◉──────── 00:00♪🎧 ♪
`,
        `
- تخسر عندما تتخلى وليس عندما تهزم.
- 𝒚𝒐𝒖 𝒍𝒐𝒔𝒆 𝒘𝒉𝒆𝒏 𝒚𝒐𝒖 𝒈𝒊𝒗𝒆 𝒖𝒑, 𝒏𝒐𝒕 𝒘𝒉𝒆𝒏 𝒚𝒐𝒖 𝒍𝒐𝒔𝒆.🖤
`,
 `
•♡
جميلة تلك الصداقة التي لا يغيرها وقت ولا شخص ولا حتى بعد 🥺🫂🩷

𝐼𝑡 𝑖𝑠 𝑎 𝑏𝑒𝑎𝑢𝑡𝑖𝑓𝑢𝑙 𝑓𝑟𝑖𝑒𝑛𝑑𝑠ℎ𝑖𝑝 𝑡ℎ𝑎𝑡 𝑐𝑎𝑛𝑛𝑜𝑡 𝑏𝑒 𝑐ℎ𝑎𝑛𝑔𝑒𝑑 𝑏𝑦 𝑡𝑖𝑚𝑒, 𝑝𝑒𝑟𝑠𝑜𝑛, 𝑜𝑟 𝑒𝑣𝑒𝑛 𝑎𝑓𝑡𝑒𝑟 🥺🫂🩷`,
        `•♡•
بمجرد أن تخطئ سينسى الناس أنڪ ڪنت رائعا يوما ما 🖤🥀...

𝗢𝗻𝗰𝗲 𝘆𝗼𝘂 𝗺𝗮𝗸𝗲 𝗮 𝗺𝗶𝘀𝘁𝗮𝗸𝗲, 𝗽𝗲𝗼𝗽𝗹𝗲 𝘄𝗶𝗹𝗹 𝗳𝗼𝗿𝗴𝗲𝘁 𝘁𝗵𝗮𝘁 𝘆𝗼𝘂 𝘄𝗲𝗿𝗲 𝗼𝗻𝗰𝗲 𝗴𝗿𝗲𝗮𝘁🥀🖤..`,
        `𝑫𝒐𝒏'𝒕 𝒕𝒆𝒍𝒍 𝒂𝒏𝒚𝒐𝒏𝒆 𝒘𝒉𝒂𝒕 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒐𝒖𝒕 𝒐𝒇 𝒍𝒊𝒇𝒆, 𝒑𝒆𝒐𝒑𝒍𝒆 𝒍𝒐𝒗𝒆 𝒔𝒑𝒐𝒊𝒍𝒊𝒏𝒈 𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝒕𝒉𝒊𝒏𝒈𝒔 💙🌱`,

        `♡_ ע تَحـڪم عـلى مستـقبلگ مِن الآن ، لِأنَ الأنـبياء رَعّـو الْغـنم وَ قـادوا الاُمـم 
៸៸🍡Ꮺ ១ 𓍢☁️ 𐪔ೃ  ָ࣪ °✩🎀‧₊
_ 𝒯𝒶𝓀ℯ 𝒸ℴ𝓃𝓉𝓇ℴ𝓁 ℴ𝒻 𝓎ℴ𝓊𝓇 𝒻𝓊𝓉𝓊𝓇ℯ 𝒻𝓇ℴ𝓂 𝓃ℴ𝓌, 𝒷ℯ𝒸𝒶𝓊𝓈ℯ 𝓉𝒽ℯ 𝓅𝓇ℴ𝓅𝒽ℯ𝓉𝓈 𝒽ℯ𝓇𝒹ℯ𝒹 𝓈𝒽ℯℯ𝓅 𝒶𝓃𝒹 𝓁ℯ𝒹 𝓉𝒽ℯ 𝓃𝒶𝓉𝒾ℴ𝓃𝓈. ✨👑`,
`كلناُ نرتكب الأخطاء.. فلا تتصرف وكأنك أفضل من غيرك.  ✨🥂
𝑾𝒆 𝒂𝒍𝒍 𝒎𝒂𝒌𝒆 𝒎𝒊𝒔𝒕𝒂𝒌𝒆𝒔, 𝒅𝒐𝒏’𝒕 𝒂𝒄𝒕 𝒍𝒊𝒌𝒆 𝒚𝒐𝒖’𝒓𝒆 𝒃𝒆𝒕𝒕𝒆𝒓 𝒕𝒉𝒂𝒏 𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒆𝒍𝒔𝒆.✨🖤🖇`,
        `بَعٍض آلُِأصدِقٌآء نفُوُس رٍآقٌية وُأنيقٌة يجٍعٍلُِوُنڪ تڪتفُي بَهـم عٍن مئآت آلُِأصدِقٌآء .. 🖤🖇🥀" 
𝕾𝖔𝖒𝖊 𝖋𝖗𝖎𝖊𝖓𝖉𝖘 𝖆𝖗𝖊 𝖈𝖑𝖆𝖘𝖘𝖞 𝖆𝖓𝖉 𝖊𝖑𝖊𝖌𝖆𝖓𝖙 𝖘𝖔𝖚𝖑𝖘 𝖜𝖍𝖔 𝖒𝖆𝖐𝖊 𝖞𝖔𝖚 𝖘𝖆𝖙𝖎𝖘𝖋𝖎𝖊𝖉 𝖜𝖎𝖙𝖍 𝖙𝖍𝖊𝖒 𝖔𝖛𝖊𝖗 𝖍𝖚𝖓𝖉𝖗𝖊𝖉𝖘 𝖔𝖋 𝖋𝖗𝖎𝖊𝖓𝖉𝖘 .. 🖤🖇🥀"
🤍`,
        `وان سألوني يوماً عن كل ماهو جميل في حياتي سأكتفي بذكر أمي 🥀
•𝓔𝓽 𝓼𝓲 𝓸𝓷 𝓶𝓮 𝓭𝓮𝓶𝓪𝓷𝓭𝓮 𝓾𝓷 𝓳𝓸𝓾𝓻 𝓽𝓸𝓾𝓽 𝓬𝓮 𝓺𝓾𝓲 𝓮𝓼𝓽 𝓫𝓮𝓪𝓾 𝓭𝓪𝓷𝓼 𝓶𝓪 𝓿𝓲𝓮 , 𝓳𝓮 𝓼𝓮𝓻𝓪𝓲 𝓼𝓪𝓽𝓲𝓼𝓯𝓪𝓲𝓽 𝓭𝓮 𝓶𝓮𝓷𝓽𝓲𝓸𝓷𝓷𝓮𝓻 𝓶𝓪 𝓶𝓮́𝓻𝓮🥀`,
        `گآنت هُنآگ أحلام ، فسقط  حرف الحاء.. 💔✨"
 𝕿𝖍𝖊𝖗𝖊 𝖜𝖊𝖗𝖊 𝖉𝖗𝖊𝖆𝖒𝖘, 𝖆𝖓𝖉 𝖙𝖍𝖊 𝖑𝖊𝖙𝖙𝖊𝖗 𝕳𝖆 𝖋𝖊𝖑𝖑 .. 💔✨"`,
        `إذا لـم تتمـكن من تـغييـر شـيء ما، قـم بـتغيـير نـظـرتـك لـه"..👀🖤 
𝐈𝐟 𝐲𝐨𝐮 𝐜𝐚𝐧'𝐭 𝐜𝐡𝐚𝐧𝐠𝐞 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠, 𝐜𝐡𝐚𝐧𝐠𝐞 𝐲𝐨𝐮𝐫 𝐨𝐮𝐭𝐥𝐨𝐨𝐤 𝐨𝐧 𝐢𝐭.”.. 🖤👀`,
        `وفـــــــــــــــي بـــــعض الـآووقــــ ـآت قـد یـجـعـلـــڪَ الخـیـآال تبـتسـمُ مـن آعـمـآاق قلـبــــگ..🖤🥺
𝒂𝒕 𝒕𝒊𝒎𝒆𝒔 𝒊𝒕 𝒎𝒂𝒚 𝒎𝒂𝒋𝒆 𝒖 𝒔𝒎𝒊𝒍𝒆 𝒊𝒎𝒂𝒈𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒇𝒓𝒐𝒎 𝒕𝒉𝒆 𝒉𝒆𝒂𝒓𝒕 🖤🥺`,
        `لا بــاس كــان مــجــرد حـــلـــم . والأحـــــلام هـــي مـــجــرد خـــيـال لــن تــحـقـق 🎗️🪔🧸

𝐼𝓉'𝓈 𝑜𝓀𝒶𝓎, 𝒾𝓉 𝓌𝒶𝓈 𝒿𝓊𝓈𝓉 𝒶 𝒹𝓇𝑒𝒶𝓂. 𝒟𝓇𝑒𝒶𝓂𝓈 𝒶𝓇𝑒 𝒿𝓊𝓈𝓉 𝒶 𝒻𝒶𝓃𝓉𝒶𝓈𝓎 𝓉𝒽𝒶𝓉 𝓌𝒾𝓁𝓁 𝓃𝑜𝓉 𝒸𝑜𝓂𝑒 𝓉𝓇𝓊𝑒🎗️🪔🧸

ً`,
              `"شكَاويْ السُجود بإذن اللهِ لا تُرَدّ .. 🌸؛ فاللهُّمَّ بلِغنا مَقاصِدنا
 ❤️🤲!".“𝕮𝖔𝖒𝖕𝖑𝖆𝖎𝖓𝖙𝖘 𝖔𝖋 𝖕𝖗𝖔𝖘𝖙𝖗𝖆𝖙𝖎𝖔𝖓, 𝕲𝖔𝖉 𝖜𝖎𝖑𝖑𝖎𝖓𝖌, 𝖜𝖎𝖑𝖑 𝖓𝖔𝖙 𝖇𝖊 𝖗𝖊𝖏𝖊𝖈𝖙𝖊𝖉... 𝕺 𝕲𝖔𝖉, 𝖑𝖊𝖙 𝖚𝖘 𝖆𝖈𝖍𝖎𝖊𝖛𝖊 𝖔𝖚𝖗 𝖌𝖔𝖆𝖑𝖘!”`,

        `وُڪيفــ͡ـ نخــ۫͜ـبـࢪ اݪبـحــ۫͜ـࢪ أننا فــ͡ـي اݪيابـسـٰٖـ๋͜ــة نغــِْــٰࢪقٰཻــ͒͜ـً ⚡️ֆ⎝
𝖍𝖔𝖜 𝖉𝖔 𝖜𝖊 𝖙𝖊𝖑𝖑 𝖙𝖍𝖊 𝖘𝖊𝖆 𝖙𝖍𝖆𝖙 𝖜𝖊 𝖆𝖗𝖊 𝖉𝖗𝖔𝖜𝖓𝖎𝖓𝖌 𝖔𝖓 𝖑𝖆𝖓𝖉 ? 𓅃 🌟`,
        `💚🌿❞الوحدة مؤلمة ، لڪنها أجمل بڪثير من الذين يذڪرونك بوقت فراغهم فقط.❝🖤🥀🌫
𝐿𝑜𝑛𝑒𝑙𝑖𝑛𝑒𝑠𝑠 𝑖𝑠 𝑝𝑎𝑖𝑛𝑓𝑢𝑙, 𝑏𝑢𝑡 𝑖𝑡 𝑖𝑠 𝑚𝑢𝑐ℎ 𝑛𝑖𝑐𝑒𝑟 𝑡ℎ𝑎𝑛 𝑡ℎ𝑜𝑠𝑒 𝑤ℎ𝑜 𝑜𝑛𝑙𝑦 𝑟𝑒𝑚𝑖𝑛𝑑 𝑦𝑜𝑢 𝑜𝑓 𝑡ℎ𝑒𝑖𝑟 𝑓𝑟𝑒𝑒 𝑡𝑖𝑚𝑒..🖇🥀`,
        `اصنع لنفسڪ تاريخاً واتــرڪه لغيرڪ درساً 🖤🐝🖤🖤🗝.
𝑰 𝒔𝒂𝒘 𝒂 𝒖𝒏𝒊𝒗𝒆𝒓𝒔𝒆 𝒊𝒏 𝒚𝒐𝒖𝒓 𝒆𝒚𝒆𝒔 💛🧸.•
0:00●━━━━`,
        `لَمْ يَخلقنا الله لنَحزَن ، هَو فقطْ يعلِّمُنا الرُّجوع إلَيه عِندمَا ننْكسِر ✨🧡🍂
𝒂𝒍𝒍𝒂𝒉 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒄𝒓𝒆𝒂𝒕𝒆 𝒖𝒔 𝒕𝒐 𝒈𝒓𝒊𝒆𝒗𝒆 𝒉𝒆 𝒐𝒏𝒍𝒚 𝒕𝒆𝒂𝒄𝒉𝒆𝒔 𝒖𝒔 𝒕𝒐 𝒓𝒆𝒕𝒖𝒓𝒏 𝒕𝒐 𝒉𝒊𝒎 𝒘𝒉𝒆𝒏 𝒘𝒆 𝒂𝒓𝒆 𝒃𝒓𝒐𝒌𝒆𝒏 🍁🧡✨`,
        `تـجـاهل ماضـيڪ مـهـمـا ڪان ، لـتـتمـڪن مـن تـحـقـيـق أحـلامڪ.فـالـمـفـاتـيـح الـقـديـمـة لـن تـفـتـح أبـوابـا جـديـدة. 💜🦋
𝙄𝙜𝙣𝙤𝙧𝙚 𝙮𝙤𝙪𝙧 𝙥𝙖𝙨𝙩 , 𝙣𝙤 𝙢𝙖𝙩𝙩𝙚𝙧 𝙬𝙝𝙖𝙩. 𝙎𝙤 𝙮𝙤𝙪 𝙘𝙖𝙣 𝙖𝙘𝙝𝙞𝙚𝙫𝙚 𝙮𝙤𝙪𝙧 𝙙𝙧𝙚𝙖𝙢𝙨. 𝙊𝙡𝙙 𝙠𝙚𝙮𝙨 🔑𝙬𝙤𝙣'𝙩 𝙤𝙥𝙚𝙣 𝙣𝙚𝙬 𝙙𝙤𝙤𝙧𝙨 🦋💜💙
  𝙔𝙏,🖤🥀`,
        ` ❣️✨كن عــزيزاً غائبا🙈🖤 ، ولاتكـن حاضــراً 😢بـلا كرامة😩 ☯🥀🎻

𝑩𝒆 𝒅𝒆𝒂𝒓 𝒂𝒃𝒔𝒆𝒏𝒕, 𝒂𝒏𝒅 𝒅𝒐 𝒏𝒐𝒕 𝒃𝒆 𝒑𝒓𝒆𝒔𝒆𝒏𝒕🥺🖤 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒅𝒊𝒈𝒏𝒊𝒕𝒚.☯🥀🎻`,
        `گـن سـعـيدآ بلآ سـبب و سـتجد نفسـگ سـعيدآ بگل شـيء🤍🦋🫂

𝑩𝒆 𝒉𝒂𝒑𝒑𝒚 𝒘𝒊𝒕𝒉 𝒏𝒐𝒕𝒉𝒊𝒏𝒈 𝑨𝒏𝒅 𝒚𝒐𝒖'𝒍𝒍 𝒃𝒆 𝒉𝒂𝒑𝒑𝒚 𝒘𝒊𝒕𝒉 𝒆𝒗𝒆𝒓𝒚𝒕𝒉𝒊𝒏𝒈🤍🦋🫂`,
        ` 🍓 الطيبون كلما أرادوا أن يصبحوا سيئين فشلوا .. لأن بداخلهم بذرة صغيرة تسمى الضمير 🧚‍♀️⭐
🍓 𝒯𝒽ℯ ℊℴℴ𝒹, 𝓌𝒽ℯ𝓃ℯ𝓋ℯ𝓇 𝓉𝒽ℯ𝓎 𝓌𝒶𝓃𝓉 𝓉ℴ 𝒷ℯ𝒸ℴ𝓂ℯ 𝒷𝒶𝒹, 𝓉𝒽ℯ𝓎 𝒻𝒶𝒾𝓁ℯ𝒹 .. 𝒷ℯ𝒸𝒶𝓊𝓈ℯ 𝒾𝓃𝓈𝒾𝒹ℯ 𝓉𝒽ℯ𝓂 𝒶 𝓈𝓂𝒶𝓁𝓁 𝓈ℯℯ𝒹 𝒸𝒶𝓁𝓁ℯ𝒹 𝒸ℴ𝓃𝓈𝒸𝒾ℯ𝓃𝒸ℯ🧚‍♀️⭐`,
        `(أنـت)‏لا تحــــــزن، فخلف كــل ليلة مظـلمة فجـر مضيء💦🤎
𝐷𝑜𝑛'𝑡 𝑏𝑒 𝑠𝑎𝑑, 𝑏𝑒𝒉𝑖𝑛𝑑 𝑒𝑣𝑒𝑟𝑦 𝑑𝑎𝑟𝑘 𝑛𝑖𝑔𝒉𝑡 𝑡𝒉𝑒𝑟𝑒 𝑖𝑠 𝑎 𝑏𝑟𝑖𝑔𝒉𝑡 𝑑𝑎𝑤𝑛 🌷🥰`,
        `‏“ 𝑃𝑒𝑜𝑝𝑙𝑒 𝑤𝑖𝑙𝑙 co𝑚𝑒 𝑎𝑛𝑑 𝑔𝑜 𝑖𝑛 𝑙𝑖𝑓𝑒, 𝑏𝑢𝑡 𝑡ℎ𝑒 𝑝𝑒𝑟𝑠𝑜𝑛 𝑖𝑛 𝑡ℎ𝑒 𝑚𝑖𝑟𝑟𝑜𝑟 𝑤𝑖𝑙𝑙 𝑏𝑒 𝑡ℎ𝑒𝑟𝑒 𝑓𝑜𝑟𝑒𝑣𝑒𝑟. 𝑆𝑜 𝑏𝑒 𝑔𝑜𝑜𝑑 𝑡𝑜 𝑦𝑜𝑢𝑟𝑠𝑒𝑙𝑓.”🤍✨
‏_" الناس سيأتون ويذهبون في الحياة، ولكن الشخص الموجود في المرآة سيظل موجوداً طوال العمر، لذلك أحسِن إلى نفس"🤍✨🤎✨`,
        `‏𝑩𝒆 𝒕𝒉𝒂𝒏𝒌𝒇𝒖𝒍 𝒇𝒐𝒓 𝒘𝒉𝒂𝒕 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒆𝒏𝒅 𝒖𝒑 𝒉𝒂𝒗𝒊𝒏𝒈 𝒎𝒐𝒓𝒆 ‏𝑰𝒇 𝒚𝒐𝒖 𝒄𝒐𝒏𝒄𝒆𝒏𝒕𝒓𝒂𝒕𝒆 𝒐𝒏 𝒘𝒉𝒂𝒕 𝒚𝒐𝒖 𝒅𝒐𝒏'𝒕’t 𝒉𝒂𝒗𝒆,𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒏𝒆𝒗𝒆𝒓,𝒆𝒗𝒆𝒓 𝒉𝒂𝒗𝒆 𝒆𝒏𝒐𝒖𝒈𝒉✨.
‏كُن شاكرًا لما تملك، وسوف تملك الكثير ..
‏أما إذا ركزت على مالا تملك فلن تكتفي أبدًا ✨ 🤎✨`,
        `لا ترهق نفسك بالتبرير فَمن يُحبك لا يرحل...🖤🖇️

𝑫𝒐 𝒏𝒐𝒕 𝒕𝒊𝒓𝒆 𝒚𝒐𝒖𝒓𝒔𝒆𝒍𝒇 𝒘𝒊𝒕𝒉 𝒋𝒖𝒔𝒕𝒊𝒇𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒘𝒉𝒐𝒆𝒗𝒆𝒓 𝒍𝒐𝒗𝒆𝒔 𝒚𝒐𝒖 𝒅𝒐𝒆𝒔 𝒏𝒐𝒕 𝒍𝒆𝒂𝒗𝒆...🖤🍷`,
        `مــآ أجــــٍمـــــلُ أن تــــبــــتــــســــم😁 حـــــــٍيَـــــن يَـــــظـــــًنّ آلُآخـرٍۆن أنـــّگــ ســــۆفَ تـــــــبــگـــــيَ 🖤🙂😇🥀🍷
🥂🧸🦋𝑯𝑶𝑾 𝑩𝑬𝑨𝑼𝑻𝑰𝑭𝑼𝑳 𝑰𝑻 𝑰𝑺 𝑻𝑶 𝑺𝑴𝑰𝑳𝑬 🖤🍷✌️𝑾𝑯𝑬𝑵 𝑶𝑻𝑯𝑬𝑹 𝑷𝑬𝑶𝑷𝑳𝑬 𝑻𝑯𝑰𝑵𝑲 𝒀𝑶𝑼 𝑾𝑰𝑳𝑳 𝑪𝑹𝒀🫶🏻❤️‍🔥✨`,
        `لا تيأس وأنت تعلم أن الله دوماً يخلق نوراً جديداً بعد كل ظلام🧚‍♀️💜🗞
𝑫𝒐𝒏'𝒕 𝒅𝒆𝒔𝒑𝒂𝒊𝒓 𝒘𝒉𝒊𝒍𝒆 𝒚𝒐𝒖 𝒌𝒏𝒐𝒘 𝒕𝒉𝒂𝒕 𝑨𝒍𝒍𝒂𝒉 𝒂𝒍𝒘𝒂𝒚𝒔 𝒄𝒓𝒆𝒂𝒕𝒆𝒔 𝒏𝒆𝒘 𝒍𝒊𝒈𝒉𝒕 𝒂𝒇𝒕𝒆𝒓 𝒆𝒗𝒆𝒓𝒚 𝒅𝒂𝒓𝒌𝒏𝒆𝒔𝒔🧚‍♀️💜🗞🧸`,
        `シ︎❦︎الزَمَنُ لا يُغَيرُ نَاس، الزَمَنُ يَكْشٍفُ الْوَجْه الْحَقٍيقٍي للٍنَّاسْシ︎❦︎🦋
シ︎❦︎𝒯𝒾𝓂ℯ 𝒹ℴℯ𝓈 𝓃ℴ𝓉 𝒸𝒽𝒶𝓃ℊℯ🧸 𝓅ℯℴ𝓅𝓁ℯ,𝓉𝒾𝓂ℯ 𝓇ℯ𝓋ℯ𝒶𝓁𝓈 𝓉𝒽ℯ 𝓇ℯ𝒶𝓁 𝒻𝒶𝒸ℯ ℴ❦︎🦋`,
        `💚🌿❞الوحدة مؤلمة ، لڪنها أجمل بڪثير من الذين يذڪرونك بوقت فراغهم فقط.❝🖤🥀🌫
𝐿𝑜𝑛𝑒𝑙𝑖𝑛𝑒𝑠𝑠 𝑖𝑠 𝑝𝑎𝑖𝑛𝑓𝑢𝑙, 𝑏𝑢𝑡 𝑖𝑡 𝑖𝑠 𝑚𝑢𝑐ℎ 𝑛𝑖𝑐𝑒𝑟 𝑡ℎ𝑎𝑛 𝑡ℎ𝑜𝑠𝑒 𝑤ℎ𝑜 𝑜𝑛𝑙𝑦 𝑟𝑒𝑚𝑖𝑛𝑑 𝑦𝑜𝑢 𝑜𝑓 𝑡ℎ𝑒𝑖𝑟 𝑓𝑟𝑒𝑒 𝑡𝑖𝑚𝑒..🖇🥀`,
        `استند على نفسك، وكأنك أكثر الأشياء ثباتا بهذا الكون  🍹
𝕷𝖊𝖆𝖓 𝖔𝖓 𝖞𝖔𝖚𝖗𝖘𝖊𝖑𝖋, 𝖆𝖘 𝖎𝖋 𝖞𝖔𝖚 𝖆𝖗𝖊 𝖙𝖍𝖊 𝖒𝖔𝖘𝖙 𝖘𝖙𝖆𝖇𝖑𝖊 𝖙𝖍𝖎𝖓𝖌 𝖎𝖓 𝖙𝖍𝖊 𝖚𝖓𝖎𝖛𝖊𝖗𝖘𝖊 🍹𝑾𝒉𝒆𝒏 𝒕𝒓𝒖𝒔𝒕 𝒊𝒔 𝒃𝒓𝒐𝒌𝒆𝒏 𝒔𝒐𝒓𝒓𝒚 𝒎𝒆𝒂𝒏𝒔 𝒏𝒐𝒕𝒉𝒊𝒏𝒈 🖤🔗`
      ];

      // اختيار رسالة عشوائية
      const randomMessageIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomMessageIndex];

      // جلب صورة عشوائية
      const searchQuery =[ "flowers","itashi","Nezko","joker","nature"]; // يمكنك إضافة استعلامات بحث إذا كنت ترغب
      const apiUrl = `https://pin-two.vercel.app/pin?search=${encodeURIComponent(searchQuery)}`;
      const response = await axios.get(apiUrl);
      const imageLinks = response.data.result;

      const randomImageIndex = Math.floor(Math.random() * imageLinks.length);
      const imageUrl = imageLinks[randomImageIndex];

      // تحميل الصورة وإرسالها مع الرسالة
      const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
      const imagePath = path.join(process.cwd(), "cache", `random_image.jpg`);
      await fs.writeFile(imagePath, imageResponse.data);

      const imageStream = fs.createReadStream(imagePath);
      
api.setMessageReaction("💖", event.messageID, (err) => {}, true);
const userMoney = (await Economy.getBalance(event.senderID)).data;
      const cost = 100;
      if (userMoney < cost) {
        await fs.unlink(imagePath); // حذف الصورة المؤقتة إذا لم يكن هناك رصيد كافٍ
        return api.sendMessage(`⚠️ | لا يوجد لديك رصيد كافٍ. يجب عليك الحصول على ${cost} دولار أولاً.`, event.threadID);
      }

      // الخصم من الرصيد
      await Economy.decrease(cost, event.senderID);

      await api.sendMessage({
        body: randomMessage,
        attachment: imageStream,
      }, event.threadID);

      // حذف الصورة المؤقتة بعد الإرسال
      await fs.unlink(imagePath);
    } catch (error) {
      console.error(error);
      return api.sendMessage(`حدث خطأ أثناء معالجة الطلب.`, event.threadID);
    }
  }
};
