const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    output: {
        path: path.join(__dirname, '/docs'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
    devServer: {
        port: 3030
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: "babel-loader",
            },
        },
        {
            test: /\.(sa|sc|c)ss$/, 
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
            loader: "url-loader",
            options: { limit: false },
        },
        ]
    }
}