const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, '/docs'),
        filename: 'index.js'
    },
    devServer: {
        port: 3030
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
        {
            test: /\.css$/i, 
            use: ["style-loader", "css-loader"],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
    ],
}