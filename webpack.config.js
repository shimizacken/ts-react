var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/main.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
     module: {
         rules: [
             {
                 test: /\.tsx?$/,
                 loader: "awesome-typescript-loader"
             },
             {
                 test: /\.js$/,
                 enforce: "pre",
                 loader: "source-map-loader"
             }
         ]
     },
     devServer: {
         inline: true,
         port: 8989
     },
    watch: true
};