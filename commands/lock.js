const Discord = require("discord.js")

module.exports = {
    name: "lock", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply(`Você não possui a permissão \`Genrenciar Canais\` para poder uttilizar este comando.`)
        } else {
            
            message.reply(`:lock: | **Chat Trancado!**\n> __*Info: Agora o @everyone não poderá conversar neste chat!;*__\n:exclamation: **Use y.unlock para destrancar!**`).then(msg => { 
            message.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false }).catch(e => {
                console.log(e)
                msg.edit(`❌ Ops, algo deu errado ao tentar trancar este chat.`)
            })
        })

            }
        }        
}
