require("./styles/content.css");
var data = require("json!./data.json");

module.exports = "It works from content.js." + " + " + data.name;