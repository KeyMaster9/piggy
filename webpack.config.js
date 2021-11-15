const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = [
    {
        entry: './bin/www',
        mode: NODE_ENV,
        target: 'node',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.js',
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
                },
            }),

        ],
    }
]