var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

const ON_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: ON_PROD ? '/dogfood/dist/' : '/dist/',
    filename: 'build.js'
  },
  resolve: {
      extensions: ['.js', '.ts'],
  },

  module: {
      rules: [
          { test: /\.ts$/, use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: !ON_PROD,
              compilerOptions: {
                target: ON_PROD ? 'es5' : 'es6',
                lib: ['es5', 'dom', 'es6']
              }
            }
          } },
          { test: /\.css$/, loader: ExtractTextPlugin.extract({
              fallbackLoader: "style-loader",
              loader: "css-loader"
          }) },
          {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader',
          },
      ],
  },
  performance: {
    hints: false
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#cheap-eval-source-map',
  plugins: [ new ExtractTextPlugin('style.css') ]
}


if (ON_PROD) {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
    }),
  ])
}
