const { dialog } = require('electron').remote;
const { fs } = require('fs').remote;

window.electron = {};
window.electron.dialog = dialog;
window.electron.fs = fs;