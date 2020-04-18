let path = require("path");
const MiniExtractPlugin = require("mini-css-extract-plugin");
const globAll = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');

let config = {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "./bundle"),
    filename: "index.js",
    publicPath: "bundle/"
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniExtractPlugin({ filename: "styles.css" }),
    new PurifyCSSPlugin({
      minimize: true,
      paths: globAll.sync([
        path.join(__dirname, '../*.html'),
      ])
    })
  ]
};

module.exports = (environment, options) => {
  let production = options.mode === "production";

  config.devtool = production ? false : "eval-sourcemap";

  return config;
};