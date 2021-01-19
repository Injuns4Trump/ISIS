# ISIS
Inhun's Shitty Image Searcher


# Setup Guide:

- Install Nodejs on your platform of choice. It runs on just about every modern operating system out there, even on Android phones via Termux.

- Install the "discord.js", "cheerio", and "request" dependencies by opening your Terminal/Command Prompt in the ISIS folder and typing "npm install discord.js", "npm install cheerio", and "npm install request". // I was too lazy to make a "package.json" so a single "npm install" doesn't work yet, sorry.

- Then go to the [Discord Development Portal](https://discord.com/developers/applications) (https://discord.com/developers/applications) and create a bot. Set up the name and profile picture how you want, then copy the bot token.

- Paste your bot token into the "index.js" file over the part that says "BOT_TOKEN_REPLACE_THIS_TEXT".
// The bot token needs to be inside of the quotes so keep the quotes.

- Open your Terminal/Command Prompt in the ISIS folder and type "node index.js" to launch it.
// "node ." also works and is just a shortcut built into nodejs to save time.

- Go back to the General Information tab in the Discord Development Portal and make an invite link by copying your bot's Client ID tab and pasting it in the "client_id=" section of a link like this: https://discord.com/oauth2/authorize?client_id=xxxxxxxxxxxxxxxxxxxxx&scope=bot&permissions=52224

- ISIS requires the "View Channels", "Send Messages", "Read Messages", "Embed Links", and "Attach Files"  permissions to function properly.
// You can add "&permissions=52224" to your invite link to automatically grant those permissions upon joining. If you do not include it in your invite link then you can also manually grant ISIS those permissions from your server settings in Discord.

- Alternatively, instead of granting those permissions as server-wide permissions you can grant them as channel permissions in specific channels that you want ISIS to have the ability to post in.

- If all is well and the bot shows online, run ".img" and a search term to start posting images. Repeat the command to get additional results from the same search term.
// You can edit the "index.js" file to change the command prefix to anything that you want.




# Common Problems and Fixes:

- Image results are posted randomly instead of in sequential order.
// I intend to change this eventually once I stop being too lazy.




# If you encounter any more problems or want to leave feedback, please file an issue on [My Github](https://github.com/Injuns4Trump/ISIS/) at https://github.com/Injuns4Trump/ISIS/

# If you have the ability to fix any of these issues please feel free to make a pull request.
