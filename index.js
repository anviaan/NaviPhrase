const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()

///////////////////////BOT

const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const config = require("./config.json");
const mySecret = process.env['token']

client.on("ready", () => {
    console.log("Estoy listo!");
 });


//public phrase
client.on("message", message => {
  if(message.content.startsWith(config.prefix + "public")){

    //delete  the command
    let texto = message.content.slice(8);

    //if have an space delete it 
    if(texto.startsWith(" ")){
      texto = texto.slice(1);
    }

    //embed
    let embed = new MessageEmbed()
    .setTitle('Frase Publica:')
    .setColor(config.embedColor)
    .setDescription(texto)
    .setAuthor(message.author.username,message.author.avatarURL())
    .setTimestamp()
    //send the message in a channel
    //client.channels.resolve("channelID").send(texto)

    //send the message with embed
    message.channel.bulkDelete(1);
    message.channel.send(embed);
    
  }
});

//privade phrase
client.on("message", message => {
  if(message.content.startsWith(config.prefix + "privade")){

    //delete  the command
    let texto = message.content.slice(9);

    //if have an space delete it 
    if(texto.startsWith(" ")){
      texto = texto.slice(1);
    }

    //embed
    let embed = new MessageEmbed()
    .setTitle('Frase Privada:')
    .setColor(config.embedColor)
    .setDescription(texto)
    .setTimestamp()

    //send the message in a channel
    //client.channels.resolve("channelID").send(texto)
    
    //send the message with embed
    message.channel.bulkDelete(1);
    message.channel.send(embed);
    console.log(message.author.username + ": " + texto)
    
  }
});
 client.login(config.token);