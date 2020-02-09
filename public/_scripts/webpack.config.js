const path = require('path')

module.exports = {
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.js'
    },
    // mode: 'production',
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx', 'json']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
}