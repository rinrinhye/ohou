const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['mozjpeg', { quality: 90, progressive: true }],
            ['pngquant', { quality: [0.6, 0.8] }],
            [
              'svgo',
              {
                plugins: [
                  {
                    name: 'preset-default',
                    attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            ],
          ],
        },
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './site.webmanifest'),
          to: path.resolve(__dirname, 'docs/site.webmanifest'),
        },
        {
          from: '*.png',
          to: path.resolve(__dirname, 'docs'),
          context: __dirname,
        },
        {
          from: '*.svg',
          to: path.resolve(__dirname, 'docs'),
          context: __dirname,
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'docs'),
    },
    port: 8080,
  },
};
