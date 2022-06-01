const Discord = require("discord.js")

module.exports = {
    name: "link",

    run: async(client, message, args) => {

        let cor_da_embed = "WHITE";

        let ping_do_bot = client.ws.ping;

        let embed_1 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**Buscando link, aguarde.**`);
        
        let embed_2 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`:wave: Olá ${message.author} Veja o perfil do github do meu criador abaixo:\n\n> :desktop: [GitHub do meu Developer](https://github.com/Mesq-Kun)`);

        let comando = await message.reply({ content: `${message.author}`, embeds: [embed_1] }).then(msg => {
            setTimeout( () => {
                msg.edit({ content: `${message.author}`, embeds: [embed_2] })
            }, 2000)
        })
    }
}