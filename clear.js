const { CommandInteraction, MessageEmbed } = require("discord.js");
const TargetVal = require("../../Structures/Validation/Target");

module.exports = {
    name: "clear",
    description: "Clear an amout of messages in this channel.",
    Perms: "BAN_MEMBERS",
    options: [
        {
            name: "amount",
            description: "Amount of messages.",
            type: "NUMBER",
            required: true
        },
        {
            name: "target",
            description: "Client of messages",
            type: "USER",
            required: false
        }
    ],
    validate: {
        superior: true,
        permcheck: true
    },
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { channel, options, member } = interaction;

        const Amount = options.getNumber("amount");
        const Target = options.getMember("target");

        const Messages = await channel.messages.fetch();

        const Response = new MessageEmbed()
            .setColor("RANDOM");

            const validate = TargetVal(this, Target, member);
            if(validate) {
                Response.setDescription(validate);
                return interaction.reply({embeds: [Response]})
            }

            if(Amount > 100 || Amount <= 0) {
                Response.setDescription(`Amount cannot exceed 100, and cannot be under 1.`)
                return interaction.reply({embeds: [Response]})
         }
         
        if (Target) {
            let i = 0;
            const filtered = [];
            (await Messages).filter((m) => {
                if (m.author.id === Target.id && Amount > 1) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`Deleted ${messages.size} from ${Target}.`);
                interaction.reply({ embeds: [Response] });
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messages => {
                Response.setDescription(`Deleted ${messages.size} messages`);
                interaction.reply({ embeds: [Response] });
            })
            
        }
    }
}