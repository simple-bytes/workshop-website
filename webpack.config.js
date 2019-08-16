const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        // MiniCssExtractPlugin.loader,
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }
      ]
    },{
      test: /\.css$/,
      use: [
        // MiniCssExtractPlugin.loader,
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },{
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].bundle.css'
    // }),
    new CopyPlugin([
      { from: 'src/images', to: 'images' },
    ])
  ],
  devServer: {
    contentBase: 'web',
    watchContentBase: true,
    disableHostCheck: true
  },
};
