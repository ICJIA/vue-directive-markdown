var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './vue-directive-markdown.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/example',
    libraryTarget: "umd",
    filename: 'vue-directive-markdown.min.js'
  },
  module: {
    rules: [

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }

    ]
  },
  resolve: {
    alias: {

    }
  },
}

  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
