require('dotenv').config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is ready!`);
})

client.on('messageCreate', (message) => {
  //check if message was sent by another bot and return if so
  if(message.author.bot) {
    return;
  }
  //check if message contains a .jpg
  const attachments = message.attachments;
  attachments.each(attachment => {
    attachmentName = attachment.name.toString();
    if(attachment.name.includes(".jpg")) {
      message.react('☑️');
      message.react('🇽');
    }
  });
})

client.login(process.env.TOKEN);