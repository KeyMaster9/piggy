const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = [
    {
        entry: './src/server/bin/www',
        mode: NODE_ENV,
        target: 'node',
        output: {
            path: path.resolve(__dirname, 'build/server'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.js', '.twig',],
        },
        externals: [nodeExternals()],
        plugins: [
            new WebpackShellPlugin({
                onBuildEnd: {
                    scripts: ['npm run start:dev'],
                    blocking: false,
                    parallel: true,
                }
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/server/views", to: "views" },
                ],
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/server/images", to: "images" },
                ],
            }),
        ],
    },
    {
        entry: [
            './src/client/js/app.js',
            './src/client/sass/screen.scss',
        ],
        output: {
            path: path.resolve(__dirname, 'build/client'),
            filename: 'js/app.js'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/screen.css',
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/client/images", to: "images" },
                ],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        }
    }
];