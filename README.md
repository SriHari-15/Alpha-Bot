# Alpha Bot
* Description: General purpose discord bot for my server
* Project started on: 14th August, 2021
* Author: Sri Hari

-------

### How to Use?
1. Download the code
2. Extract it to a seperate folder
3. Run `npm i` to install all the necessary dependencies
4. Create a new file called `.env`
5. Open it using your code editor and fill in the following (Replace it with your bot's token ofc):

**NOTE:** You are not supposed to add any `"` or spaces to the env file!
```env
#REQUIRED
BOT_TOKEN=ODc0Nz****************Yy.Y****g.l************************g #Replace it with your bot token

#OPTIONAL
BOT_LOG_CHANNEL=8****************3 #Replace it with your bot log channel in the server
ANNOUNCEMENT_CHANNEL=8****************4 #Replace it with your announcement channel in the server
```
6. Now open your CMD or any other terminal you use and navigate to the root folder location (i.e., inside the folder that has `package.json`) and run **`npm start`**

### Highlights:
- Easy to use command handler
- Easy to use event handler
- Well organized
- Comments and descriptions in all necessary areas

### Commands & Syntax:
- Announce
  - You need to have specified your announcement channel ID in the `.env` file!
  - `.announce <Message>`
- Avatar
  - `.avatar (or) .avatar <@User/User ID>`
- Ping
  - `.ping`
- Purge
  - `.purge <Count>`
- User Info
  - `.userinfo (or) .userinfo <@User/User ID>`

### Latest Changlog:
> The older changelogs can be found [here](https://github.com/SriHari-15/Alpha-Bot/blob/master/Changelog.md)!

**v1.0.4.2:**
- Added comments for every file in `src`!

-----

## ©️ Copyright
This project is licensed under GNU General Public License 3.0!

You can read the license [here](https://github.com/SriHari-15/Alpha-Bot/blob/master/LICENSE.md).
