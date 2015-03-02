var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "./dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};