import webpack from 'webpack';
import path from 'path';

export default {

  entry: {
    'slides': './src/slides/index.js',
    'code-example': './src/code-example/index.js'
  },

  output: {
    path: path.resolve('./public'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js'
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
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      }
    ]
  },

  devtool: 'source-map'

};
