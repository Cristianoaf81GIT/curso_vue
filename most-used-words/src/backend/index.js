const { ipcMain } = require("electron");
const pathsToRows = require("./pathsToRows");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => console.log(rows, " imprimindo"))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "you", amount: 900 },
        { name: "he", amount: 853 },
        { name: "i", amount: 1234 },
        { name: "she", amount: 900 },
        { name: "our", amount: 133 },
        { name: "house", amount: 23 },
      ]);
    })
    .catch(console.error);
});
