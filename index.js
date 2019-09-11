const Discord = require('discord.js');
const Client = new Discord.Client();
require('dotenv').config()

// console.log(process.env.token);


const token = process.env.token;

const PREFIX = '.';

Client.on('ready', ()=> {
  console.log('bot is online!');
})

Client.on('message', message=>{

  // basic chatbot command ZONDER prefix
  // if(msg.content === "hi"){
  //   msg.reply('yo');
  // }

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'ping':
      message.channel.send('you typed ping!')
      break;
      case 'badmeme':
      message.channel.send('oke!')
      break;
    case 'website':
      message.channel.send('check out "hakan.life"')
      break;
    case 'info':
      if(args[1] === 'version'){
        message.channel.send('version 1.0.1')
      }
      else{
        message.channel.send('invalid arguments')      
      }
      break;
    case 'clear':
      if(!args[1]) return message.reply('Error, no second argument')
      message.channel.bulkDelete(args[1]);
      break;
    case 'embed':
      const embed = new Discord.RichEmbed()
      .addField('Player name', message.author.username);
      message.channel.sendEmbed(embed);
      break;
    case 'explain':
      if(args[1] == 'server'){
        const embed = new Discord.RichEmbed()
        .setTitle('information')
        .addField('Name', message.author.username, true)
        .addField('Version', '1.0', true)
        .addField('Current server', message.guild.name, true)
        .setThumbnail(message.author.avatarURL)
        .setFooter('visit my portfolio: Hakan.life')
        message.channel.sendEmbed(embed);
      }
  }
})

Client.login(token);