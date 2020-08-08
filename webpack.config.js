const Path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
    const Development = argv.mode === 'development';

    return {
        entry: {
            index: Path.resolve(__dirname, 'src', 'index.jsx')
        },
        output: {
            path: Path.resolve(__dirname, 'dist'),
            filename: 'index.js'
        },
        devtool: Development ? 'source-map' : 'none',
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: [
                Path.resolve(__dirname, 'node_modules')
            ],
            alias: {'@': Path.resolve(__dirname, 'src')}
        },
        devServer: {
            open: true,
            contentBase: Path.resolve(__dirname, 'dist'),
            watchContentBase: true,
            historyApiFallback: true,
        },
        module: {
            rules: rules
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: Path.resolve(__dirname, 'src', 'index.html'),
                minify: {
                    collapseWhitespace: Development ? false : true
                }
            }),
            new CopyWebpackPlugin([
                {
                    from: '*',
                    to: 'resources/favicons',
                }],
                {context: 'src/resources/favicons'}
            )
        ],
    }
}

const rules = [
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
                        Path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*.sass')
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
                        Path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*.sass')
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