<div align="center">

# Online Member Counter Bot

[Installation](#Installation) • [How to Use](#How-to-Use)

---

## Installation

</div>

##### Prerequisite

- To use this bot, Node.js 12.0.0 or newer must be [installed](https://nodejs.org/en/download/).

##### Downloading and installing steps

1.  **[Download](https://github.com/jay1934/Online-Member-Counter/archive/main.zip)** the `zip` file.

2.  Configure the Bot:

    - Run `npm i`
    - You will need to [create a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) in the **[developers space](https://discordapp.com/developers/applications/me)**
    - Replace the placeholders in [`config.json`](/config.json) with your preffered settings.

3.  Invite the Bot to your Server:

    - In your bot's application page, navigate to [OAUTH2](https://discord.com/developers/applications/771430839250059274/oauth2)
    - In the "scopes" section, select `bot`
    - In the "bot permission" section, select:

      - `ADMINISTRATOR`

      This will account for permissions needed on all three features.

    - Copy and paste the generated invite link!

4.  Get the Bot Online
    - Run `node index.js`
    - **The bot is now operational ! 🎉**

<br>

---

<div align="center">

## How to Use

</div>

This bot will rename the channel specified in [`config.json`](/config.json) every five minutes. If the channel names aren't changing, you can change the interval setting in [`config.json`](/config.json) to five minutes (600000 ms)
