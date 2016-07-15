var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/cruddy_reads.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  resolve: {
    alias: {
      'react$': path.join(__dirname, 'node_modules', 'react','dist',
        (IS_PRODUCTION ? 'react.min.js' : 'react.js')),
      'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist',
        (IS_PRODUCTION ? 'react-dom.min.js' : 'react-dom.js')),
      'redux$': path.join(__dirname, 'node_modules', 'redux','dist',
        (IS_PRODUCTION ? 'redux.min.js' : 'redux.js')),
      'react-redux$': path.join(__dirname, 'node_modules', 'react-redux','dist',
        (IS_PRODUCTION ? 'react-redux.min.js' : 'react-redux.js'))
    }
  }
};
