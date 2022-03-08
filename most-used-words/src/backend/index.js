const { ipcMain } = require("electron");

ipcMain.on("process-subtitle", (event, paths) => {
  console.log(paths);
  event.reply("process-subtitle", [
    { name: "you", amount: 900 },
    { name: "he", amount: 853 },
    { name: "i", amount: 1234 },
    { name: "she", amount: 900 },
    { name: "our", amount: 133 },
    { name: "house", amount: 23 },
  ]);
});
