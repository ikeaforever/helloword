const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const webpack = require("webpack")

const isDev = process.env.NODE_ENV === "development";

config = {
    target: "web",
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: isDev ? '"development"': '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HTMLPlugin()
    ]
};

if (isDev) {
    config.devServer = {
        port: 8000,
        host:'0.0.0.0',
        overlay: {
            errors:true,
        }
    }
}

module.exports = config;
