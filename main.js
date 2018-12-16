const { app, BrowserWindow } = require('electron')
const os = require('os')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Prepare the browser window options
  let windowOptions = {
    width: 800,
    height: 475,
    backgroundColor: '#1d1d1d',
    show: false
  }

  // OS Specific browser options
  if (os.platform() === 'win32') {
    // On windows, hide the frame
    windowOptions.frame = false
  } else {
    // On other OS's, change the titlebar style
    windowOptions.titleBarStyle = 'hiddenInset'
  }

  // Show the window
  win = new BrowserWindow(windowOptions)

  // Hide the menu
  win.setMenu(null)

  // Load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools if the NODE_ENV is set to development
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools({ mode: 'undocked' })
  }

  // Wait until the window is fully loaded before showing
  win.once('ready-to-show', () => win.show())

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})
