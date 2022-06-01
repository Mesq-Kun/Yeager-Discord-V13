const Discord = require("discord.js")

module.exports = {
    name: "unlock", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`Você não possui a permissão \`Genrenciar Canais\` para poder uttilizar este comando.`)
        } else {
            
            message.reply(`:unlock: | **Chat Destrancado!**\n> __*Info: Agora o @everyone poderá conversar neste chat!;*__\n:exclamation: **Use y.lock para trancar!**`).then(msg => { 
            message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: true }).catch(e => {
                console.log(e)
                msg.edit(`❌ Ops, algo deu errado ao tentar destrancar este chat.`)
            })
        })

            }
        }        
}
