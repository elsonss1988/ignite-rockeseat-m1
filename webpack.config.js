const path = require('path')

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname,'src','index.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // read extisions , ler além do JS, o JSX
    resolve:{
        extensions: ['.js','.jsx'],
    },
    // behavour about each file
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
}