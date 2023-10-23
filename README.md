# ProtoNeko - Discord Bot 🐱
### A basic bot for Raphael Neko's Discord server

This is a very simple bot that doesn't have a lot of features.

#### Features:
- **Hello reactions 👋** <br>Whenever the bots sees a "Hello message", it reacts with an emote.
- **Yuki reactions 🦫** <br>Whenever the bots sees a message that mentions Yuki, it reacts to it with an emote and a response in the user's language depending on their language role.
- **Slash commands:**
  - **Suggestions 💭** <br>There is a suggestion system. Users can upvote or downvote the suggestions too.
  - **Links 🌐** <br>The user can select through a list the link they want to receive. The response is only visible to the one who used the command.
  - **Meow 🐈** <br>This just make the bot replying with a "Meow, hey hey!" message.

---

**Feel free to copy and use freely my code as you want!**

Just make sure to add a `.env` to **the root of the folder** that contains **your bot token**, **your bot user ID**, and **your database uri**.

### ".env" template
```env
TOKEN = [Your Token here]
CLIENT_ID = [Your bot User ID here]
DB_URI = [Your database here]
```

---

### Third-party
- [**discord.js**](https://discord.js.org)
- [**CommandKit**](https://commandkit.js.org) - by [Under Ctrl](https://github.com/underctrl-io)
