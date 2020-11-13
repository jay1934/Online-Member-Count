const { Client } = require('discord.js');
const { channelID, updateInterval, token } = require('./config.json');

const client = new Client();

client.on('ready', () =>
  setInterval(() => {
    require('node-fetch')(
      'http://arkdedicated.com/xbox/cache/unofficialserverlist.json'
    )
      .then((res) => res.json())
      .then((json) =>
        client.channels.cache
          .get(channelID)
          .setName(
            `Online In-Game: ${json
              .filter(({ Name }) => Name.includes('Destiny Duos'))
              .reduce((acc, { NumPlayers }) => acc + NumPlayers, 0)}`
          )
      );
  }, updateInterval)
);

client.login(token);
