# polycord

A little discord bot to annoy your friends by repeating their messages back at them over Discord voice channels using AWS Polly to synthesise the voices in their head.


### Setup

Create a `config.json` file:

```
{
   "voiceChannelId": 123123
   "appsecret": "YourDiscordBotsSecretTokenGoesHere",
   "Voice": "Justin"
}
```

Then configure either `~/.aws/credentials` or your AWS environment variables.

### Running

```
npm install
node index.js
```

And then be patient - when it first connects, it sometimes takes a little bit of time for the messages to start being spoken (it seems like a bug in discord.io)


This is an example of speex.
