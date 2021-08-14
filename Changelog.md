# Alpha Bot Changelog

> Sorted from newest to old

### v1.0.2.2
- Any successful command will now be logged to the console in this format:
```
[DATE | TIME] User tag | Channel name | Command ran
```
- Removed the logging method immediately due to disk size consumption conerns. Will add back as soon as a way is found to mitigate this

### v1.0.2.1
- Added commands logging to `./log.txt` (Any successful command will be logged)

### v1.0.2
- Added Events listener
- Completely moved all the remaining events to the new event handler

### v1.0.1
- Fixed small bugs
- Moved some functions from `src/index.js` to `src/Structures/Client.js`

### v1.0.0
- Initial release
