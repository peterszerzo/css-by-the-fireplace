import webpack from 'webpack';
import path from 'path';

export default {

  entry: './code-example/src/index.js',

  output: {
    path: path.resolve('./code-example/build'),
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },

  devtool: 'source-map'

};
