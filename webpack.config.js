const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const glob = require('glob');

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'css/[contenthash].[name].bundle.css'
  }),
  new CopyPlugin([
    { from: 'src/images', to: 'images' },
  ])
];

// add one instance of HtmlWebpackPlugin for each html file generated by 11ty
const basePath = __dirname;
const templateBasePath = path.join(basePath, '/build-11ty');
glob.sync(`${basePath}/build-11ty/**/*.html`).forEach(function(item) {
  const relativePath = path.relative(templateBasePath, item);
  plugins.push(
    new HtmlWebpackPlugin({
      filename: relativePath,
      template: item
    })
  );
});

plugins.push(
  new FaviconsWebpackPlugin({
    logo: './src/images/logo-image-bg-white.svg',
    prefix: '',
    inject: true
  })
);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'web'),
    publicPath: '/',
    filename: 'js/[contenthash].[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // enables importing of fonts in css and scss files
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: 'web',
    watchContentBase: true,
    disableHostCheck: true
  },
};
