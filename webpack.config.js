var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
      extensions: ['.js', '.ts'],
  },

  module: {
      rules: [
          { test: /\.ts$/, use: 'ts-loader' },
          { test: /\.css/, use: ['style-loader', 'css-loader'] },
          {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader',
          },
      ],
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },
  devtool: '#cheap-eval-source-map'
}


if (process.env.NODE_ENV === 'production') {
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
