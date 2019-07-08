const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].bundle.css'
    // }),
  ],
  devServer: {
    contentBase: 'web',
    watchContentBase: true
  },
};
