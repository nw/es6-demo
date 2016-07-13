var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    frontend: './lib/main.js'
  },
  output: {
      path: path.join(__dirname, "./public/js/")
    , filename: "[name].js"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx|\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ],
    noParse: /\.min\.js/
  }
}
