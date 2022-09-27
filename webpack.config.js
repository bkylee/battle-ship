const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = { 
    mode: 'development',
    entry: './src/gameboard.js',
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Battle Ship',
        }),
    ],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-laoder', 'css-loader'],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
};