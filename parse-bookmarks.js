
// Dependencies:
var fs = require('fs'),
    path = require('path');

// Data variables:
var bookmarksJsonFile = process.argv[2],
    outputFile = process.argv[3],
    startFolder = process.argv[4],
    bookmarks = null;

// Utility functions:
function findFolder(startFolder) {

}

// Control flow functions:
function checkFileExists(exists) {
  if (!exists) {
    console.error('Unable to find bookmarks JSON file.');
    process.exit(1);
  }
  loadJson();
}
function loadJson() {
  fs.readFile(bookmarksJsonFile, function(error, data) {
    if (error) {
      throw error;
    }
    bookmarks = JSON.parse(data);
    parseBookmarks();
  });
}
function parseBookmarks() {
  debug;
}

// Initialization logic:
if (bookmarksJsonFile.charAt(0) != '/') {
  bookmarksJsonFile = path.resolve(__dirname, bookmarksJsonFile);
}
fs.exists(bookmarksJsonFile, checkFileExists);
