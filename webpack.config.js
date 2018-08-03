const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const publicDir = path.join(__dirname, 'public');

module.exports = (env) => {

    const isProd = env === 'production';
    const CSSExtract = new ExtractTextPlugin('style.css');
    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                'sourceMap': true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                'sourceMap': true
                            }
                        }
                    ]
                })
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
        plugins: [
            CSSExtract
        ],
        devtool: isProd? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: publicDir
        }
    }
};