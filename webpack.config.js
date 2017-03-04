var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
     //plugins: [
        //new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" }),
        //new HappyPack({ loaders: ['babel-loader?presets[]=es2015']}),
    //],
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
         /*
         loaders: [
             {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                }
             }
         ]*/
     },
     devServer: {
         inline: true,
         port: 8989
     },
    watch: true
};