require("dotenv").config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);

const challenges = [
  "Camicia",
  "Maglietta buffa",
  "Casual",
  "Colori accesi",
  "Penitenza: Niente schiscetta",
  "Scarpe Eleganti",
  "Poke day",
  "Maglione di natale day",
  "Offre il caffe Federico",
  "Offre il caffe Nespoli",
];

// "/Start"
bot.start((context) => {
  console.log("Servizio avviato...");
});

bot.on("text", (context) => {
  text = context.update.message.text;
  console.log(context.update.message.from);
  if (text == "/test") context.reply("Funziono");
});

setInterval(() => {
  var date = new Date();
  var todayChallenge =
    challenges[Math.floor(Math.random() * challenges.length)];

  if (date.getHours() === 20 && date.getMinutes() === 20) {
    bot.telegram.sendMessage(123, todayChallenge);
    bot.telegram.sendMessage(321, todayChallenge);
  }
}, 60000);

bot.launch();
