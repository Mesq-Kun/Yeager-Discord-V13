const Discord = require('discord.js')

module.exports = {
  name: "sugerir",
  aliases:[""], 
  run: async (client, message, args) => {

let user = client.users.cache.get("966978191220686870")

  const KKKPL = new Discord.MessageEmbed()
  .setDescription("`y.sugerir [sugestão de comando]`")
  .setColor("WHITE")
  const reporte = args.join(" ")
  if(!reporte) return message.channel.send({embeds: [KKKPL]}) 

const embed = new Discord.MessageEmbed()

  .setFooter({ text: "", iconURL: ""})
  .setTimestamp()
  .setColor("WHITE")
  .setTitle(``)
  .addFields(
  {
  name: "Sugestão enviada:", 
  value: `\n\`\`\` ${reporte}\`\`\``,
  inline: true
  }, 
{
  name: "⠀",
  value: `\`${message.author.tag}\` \n 
  \`${message.author.id}\``,
  inline: false
})
  const embed30 = new Discord.MessageEmbed()
  .setDescription(` ${message.author} Sua sugestão foi enviado com sucesso`)
  .setColor("WHITE")
  message.channel.send({embeds: [embed30]})

  user.send({embeds: [embed]})
  }
}