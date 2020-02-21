const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {

    return {
        entry: {
            index: path.resolve(__dirname, 'src', 'index.jsx')
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js'
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                minify: {collapseWhitespace: true}
            })
        ],
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            open: true,
            historyApiFallback: true,
            watchContentBase: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },{
                    test: /\.(sass)$/,
                    exclude: /\.(module)\.(sass)$/,
                    use: [
                        'style-loader', 'css-loader', {
                            loader: 'postcss-loader',
                            options: {plugins: [require('autoprefixer')]}
                        }, 'sass-loader', {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    (path.resolve(__dirname, 'src', 'styles', 'resources', '*'))
                                ]
                            }
                        }
                    ]
                },{
                    test: /\.(module)\.(sass)$/,
                    use: [
                        'style-loader', {
                            loader: 'css-loader',
                            options: {modules: true}
                        },{
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')]
                            }
                        }, 'sass-loader', {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    (path.resolve(__dirname, 'src', 'styles', 'resources', '*'))
                                ]
                            }
                        }
                    ]
                },{
                    test: /\.(html)$/,
                    loader: 'html-loader'
                },{
                    test: /\.(mp3)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'resources/sounds'
                    }
                }
            ]
        }
    }
}