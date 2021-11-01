const {
    ContextMenuInteraction,
    MessageEmbed
} = require("discord.js");

module.exports = {
    name: "userinfo",
    type: "USER",
    context: true,
    /**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
    async execute(interaction) {
        const target = await interaction.guild.members.fetch(interaction.targetId);
        const target2 = await target.user.fetch()
        const color = target2.accentColor

        const Response = new MessageEmbed()
            .setColor(color)
            .setAuthor(target.user.tag, target.user.avatarURL({
                dynamic: true,
                size: 512
            }))
            .setThumbnail(target.user.avatarURL({
                dynamic: true,
                size: 512
            }))
            .addField("ID", `${target.user.id}`)
            .addField("Member Since", `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, true)
            .addField("Discord User Since", `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`, true)
            .addField("Roles", `${target.roles.cache.map(r => r).join(" ").replace("@everyone", "") || "none"}`)

            if(!color) {
                Response.addField("Accent Color:", "None")
            } else {
                Response.addField("Accent color:", `#${color.toString(16)}`)
            }

            if(target2.bannerURL() === null) {
                Response.addField("Banner:", "None")
            } else {
                Response.addField("**Banner:**", "** **")
                Response.setImage(target2.bannerURL({dynamic: true, size: 512}))
            }
        
        interaction.reply({
            embeds: [Response],
            ephemeral: true
        })
    }
}