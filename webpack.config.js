const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {

    const ENTRY_FILE = 'index.jsx'
    const BUNDLE_FILE = 'index.js'

    const SOURCE = path.resolve(__dirname, 'src')
    const OUTPUT = path.resolve(__dirname, 'dist')

    const IS_DEVELOPMENT = argv.mode === 'development'

    return {
        entry: {
            index: path.resolve(SOURCE, ENTRY_FILE)
        },
        output: {
            path: path.resolve(OUTPUT),
            filename: BUNDLE_FILE
        },
        devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            alias: {'@': path.resolve(SOURCE)}
        },
        devServer: {
            open: true,
            contentBase: path.resolve(OUTPUT),
            watchContentBase: true,
            historyApiFallback: true,
        },
        module: {
            rules: rules
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.resolve(SOURCE, 'index.html'),
                minify: {
                    collapseWhitespace: IS_DEVELOPMENT ? false : true
                }
            }),
            new copyWebpackPlugin([
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
                        path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*.sass')
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
                        path.resolve(__dirname, 'src', 'app', 'styles', 'resources', '*.sass')
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