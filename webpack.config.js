const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const dist = path.resolve(__dirname, './dist')

const config = {
  mode: isProd ? 'production' : 'development',
  entry: './src/app.jsx',
  output: {
    path: dist,
    filename: 'app.[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.vue', '.sass', '.css', '.wasm', '.mjs', '.json'],
  },
  devServer: {
    contentBase: dist,
    port: 8080,
    hot: true,
    open: true,
    compress: true,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-0'],
              plugins: [
                [
                  'styled-jsx/babel',
                  { plugins: ['styled-jsx-plugin-sass'] },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}

if (isProd) {
  config.plugins.push(
    new CleanWebpackPlugin([dist]),
  )
}

module.exports = config
