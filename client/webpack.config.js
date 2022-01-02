const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const ENTRY_FILE = 'index.jsx'
const BUNDLE_FILE = 'index.js'

const SOURCE = path.resolve(__dirname, 'src')
const OUTPUT = path.resolve(__dirname, 'dist')

module.exports = (env, argv) => {

    const IS_DEVELOPMENT = argv.mode === 'development'

    return {
        entry: {
            index: path.resolve(SOURCE, ENTRY_FILE)
        },
        output: {
            path: path.resolve(OUTPUT),
            filename: BUNDLE_FILE
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            alias: {'@': path.resolve(SOURCE)}
        },
        devServer: {
            open: true,
            static: {
                directory: path.resolve(OUTPUT),
                watch: true,
            },
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
                options: {
                    postcssOptions: {
                        plugins: [require('autoprefixer')]
                    }
                }
            }, 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(SOURCE, 'styles', 'resources', '*.sass')
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
                    postcssOptions: {
                        plugins: [require('autoprefixer')]
                    }
                }
            }, 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(SOURCE, 'styles', 'resources', '*.sass')
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