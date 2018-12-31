const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`Best Server | Wings Community`);
}, 30)
})

client.login("NTI5MjIwMTY1MjgwMzMzODM0.DwtrRg.GisZ3-uPmqGTksQIoi7fPPugkiQ");
