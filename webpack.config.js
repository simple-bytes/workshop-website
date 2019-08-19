const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'css/[contenthash].[name].bundle.css'
  }),
  new CopyPlugin([
    { from: 'src/images', to: 'images' },
    { from: 'src/images/favicons', to: '' },
    {
      from: 'build-11ty',
      to: '',
      ignore: 'index.html'
    },
  ])
];

const basePath = __dirname;
console.log('basePath', basePath);
const templateBasePath = path.join(basePath, '/build-11ty');
console.log('templateBasePath', templateBasePath);

glob.sync(`${basePath}/build-11ty/**/*.html`).forEach(function(item) {
  const relativePath = path.relative(templateBasePath, item);
  console.log('relativePath', relativePath);
  plugins.push(
    new HtmlWebpackPlugin({
      filename: relativePath,
      template: item
    })
  );
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'web'),
    publicPath: '/',
    filename: 'js/[contenthash].[name].bundle.js'
  },
  module: {
    rules: [{
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
    },{
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
    },{
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }]
  },
  plugins: plugins,
  devServer: {
    contentBase: 'web',
    watchContentBase: true,
    disableHostCheck: true
  },
};
