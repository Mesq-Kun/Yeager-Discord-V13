const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');



module.exports = {
    name: "ajuda",
    description: '(ajuda) - Veja minha lista de Comandos',
    
run: async(client, message, args) => {
 

    const button21 = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("categoria_utilidades")
                .setStyle("PRIMARY")
                .setLabel("Moderação")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("categoria_diversão")
                .setStyle("PRIMARY")
                .setLabel("Diversão")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("categoria_moderação")
                .setStyle("PRIMARY")
                .setLabel("Utilidades")
                .setDisabled(false),
                new MessageButton()
                .setCustomId("fechar")
                .setStyle("DANGER")
                .setLabel("Fechar Painel")
                .setDisabled(false)
                )
               
    const Painel = new MessageEmbed()
        .setTitle(`Painel de Comandos | ${client.user.username}`)
        .setDescription(`:wave: Olá ${message.author} Veja alguns links importantes abaixo:\n\n> :diamonds:[Me adicione em seu servidor!](https://discord.com/api/oauth2/authorize?client_id=976328445619499040&permissions=0&scope=bot%20applications.commands)\n\n> :exclamation:[Acompanhe o GitHub do meu Developer!](https://github.com/Mesq-Kun)\n\n:gear:**Utilize os botões abaixo para visualizar meus comandos.**`)
        .setColor(`WHITE`)
        .setThumbnail(message.guild.iconURL())
        .setFooter({ text: "", iconURL: ""})
    const m = await message.channel.send({ embeds: [Painel], components: [button21]})

    const iFilter = i => i.user.id === message.author.id;
    
    const collector = m.createMessageComponentCollector({ filter: iFilter, time: 10 * 60000 });

        collector.on('collect', async(i) => {
            i.deferUpdate()
            switch (i.customId) {
                case `categoria_utilidades`:
                    m.edit({
                        embeds: [
                            
                            new MessageEmbed()
                                .setTitle(` Moderação | ${client.user.username}`)
                                .setDescription(
                                                `> Olá Aqui esta meus comandos da categoria \`Moderação\`.\n` +
                                                `**Lista De Comandos Abaixo:**\n\n` +
                                                `**y.lock** - Tranque um chat\n\n` +
                                                `**y.unlock** - Destranque um chat\n\n` +
                                                ``)
                                .setColor(`#00ff00`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                                .setFooter({ text: "", iconURL: ""})
                        ]
                    })
                  break;
                case `categoria_moderação`:
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(` Utilidades | ${client.user.username}`)
                                .setDescription(
                                                `> Olá Aqui esta meus comandos da categoria \`Utilidades\`.\n` +
                                                `**Lista De Comandos Abaixo:**\n\n` +
                                                `**y.dm** - faça-me enviar uma mensagem para dm de uma pessoa\n\n` +
                                                `**y.ping** - veja meu ping\n\n` +
                                                `**y.sugerir** - sugira algo\n\n` +
                                                
                                                 ``)
                                .setColor(`#00ff00`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                                .setFooter({ text: "", iconURL: ""})
                        ]
                    })
                    break;
                    case `categoria_diversão`:
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                                .setTitle(` Diversão | ${client.user.username}`)
                                .setDescription(
                                                `> Olá Aqui esta meus comandos da categoria \`Diversão\`.\n` +
                                                `**Lista De Comandos Abaixo:**\n\n` +
                                                `Nenhum comando Disponivel` +
                                                 ``)
                                .setColor(`#00ff00`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                                .setFooter({ text: "", iconURL: ""})
                        ]
                    })
                  break;
                case `fechar`:
                   setTimeout(() => m.delete(), 100)
                
            }
        })

    }
}
