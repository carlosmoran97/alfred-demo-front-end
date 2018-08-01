const path = require('path');

const publicDir = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: publicDir,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: publicDir
    },
    mode: 'development'
}