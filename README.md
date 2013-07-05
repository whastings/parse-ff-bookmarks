parse-ff-bookmarks
=========================

This is a Node.js CLI script for turning a Firefox bookmarks json file into a nicely-formatted, shareable HTML file. Firefox's bookmarks manager allows you to export your bookmarks to HTML already, but I wanted something that could create friendlier HTML output so I could share my bookmarks in an easy-to-read format.

![HTML bookmarks output](https://raw.github.com/whastings/parse-ff-bookmarks/master/media/example.png)

## Installation
```javascript
npm install parse-ff-bookmarks -g
```
You may need to prefix the command with sudo.

## How to Use
1. Open the bookmarks manager via the menu in Firefox: Bookmarks -> Show All Bookmarks
2. Click "Import and Backup" and select "Backup...", saving the json backup file in your desired location.
3. Run:
```
parse-ff-bookmarks /path/to/bookmarks.json my-bookmarks.html
```
replacing the example values with the location of your json file and the desired name of the HTML file to output.

NOTE: You can also add a third argument specifying which folder in your bookmarks you want to start in.
e.g.
```bash
parse-ff-bookmarks /path/to/bookmarks.json my-bookmarks.html "Bookmarks Menu/Web Dev"
```
The above would limit the output to only bookmarks within the Web Dev folder.

## Example
I've posted my collection of [web dev bookmarks](http://whastings.github.io/dev-reference/web-dev-bookmarks.html), which I generated using this tool.
