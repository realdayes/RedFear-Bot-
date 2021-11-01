const { MessageEmbed, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {
        
        const { user, guild } = member;

        member.roles.add("633341516059901975");
        
        const Welcomer = new WebhookClient({
            id: "894601914526892092",
            token: "1FLKuSyD4Bd7u8wTz4rSFVW_-UOGQd6t5ft5cQV7XiKtFwJT6gTB-_TpY9gO1Ff3NIGQ"
        });

        const Welcome = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Welcome ${member} to the **${guild.name}**!\n
        Account Created: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`)
        .setFooter(`ID User: ${user.id}`)

        Welcomer.send({embeds: [Welcome]})
    }
}