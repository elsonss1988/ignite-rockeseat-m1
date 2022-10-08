const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV != 'production';

module.exports = {
    // optimization: {
    //     runtimeChunk: 'single'
    // },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output:{
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',

            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            // sourceMapFilename: '[name].[hash:8].map',
            // chunkFilename: '[id].[hash:8].js'
    },
    // read extisions , ler além do JS, o JSX
    resolve:{
        extensions: ['.js','.jsx'],
    },
    //hotreload
    devServer:{
        static: path.resolve(__dirname, 'public'),
        hot:true,
    },
    // behavour about each file

    plugins:[
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'public', 'index.html')
        })
    ].filter(Boolean),
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                } 
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader']
            },
        ],
    }
}