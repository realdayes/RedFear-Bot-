const { CommandInteraction, MessageEmbed} = require("discord.js");

module.exports = {
    name: "say",
    description: "Say a command",
    Perms: "BAN_MEMBERS",
    options: [
        {
            name: "type",
            description: "Send a messages.",
            required: true,
            type: "STRING",
            },
        
        ], 
        /** 
        * 
        * @param {CommandInteraction} interaction
        */
        async execute(interaction) {
            const { options } = interaction;

            const type = options.getString("type");
        
            const Response = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${type}`)
            .setTimestamp()
            const message = await interaction.reply({embeds: [Response], fetchReply: true})
            message.react("🟢")
            message.react("🔴")
        }
}