require("dotenv").config();

const { Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.commands = new Collection();
client.afkUsers = new Map();

// ======================
// LOAD SYSTEM
// ======================

require("./handlers/commandHandler")(client);
require("./handlers/eventHandler")(client);

// ======================
// LOGIN
// ======================

client.login(process.env.TOKEN)
  .then(() => console.log("🔑 Bot logged in"))
  .catch(console.error);
