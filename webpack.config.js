const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { webpack } = require('webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        }),
    ],
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
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        hot: true,
        contentBase: './docs',
        port: 3030,
        historyApiFallback: true
    },
}