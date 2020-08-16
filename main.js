const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({resizable: false, width: 1000, height: 900})

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/gui/index.html'),
    protocol: 'file:',
    slashes: true
  }))


  mainWindow.on('closed', function () {

    mainWindow = null
  })
}


app.on('ready', createWindow)


app.on('window-all-closed', function () {

    app.quit()
})

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow()
  }
})

