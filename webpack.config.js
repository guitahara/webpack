const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    entry: './ex/index.js',
    output: {
        path: __dirname+'/public',
        filename: './bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "app.css"
        })
      ],
    module:{
        rules:[{
            test:/\.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-env", "@babel/preset-react"]
                }
            }]
        },
        {
            test: /\.css$/,
            use: [
              {
                loader:  process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
              },
              "css-loader"
            ]
          }]
    }
}