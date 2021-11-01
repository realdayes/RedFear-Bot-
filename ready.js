const { Client } = require('discord.js');
const mongoose = require("mongoose");
const { Database } = require("../../Structures/config.json");
module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    execute(client) {
        console.log("The RedFear Bot is now ready!")
        client.user.setActivity("Developing", {type: "WATCHING"});

        if(!Database) return
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("The RedFear bot is now connected to Mongoose Database!")
        }).catch((err) => {
            console.log(err)
        })
    }
}