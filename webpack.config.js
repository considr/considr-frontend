'use strict';
var webpack = require('webpack'),

  HtmlWebpackPlugin=require('html-webpack-plugin'),
  path = require('path'),
  BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  //context: PATHS.app,
  entry: {
    vendor: './app/core/vendor.js',
    app: './app/index.js'
   
  },
  output: {
   // path: PATHS.app,
   // filename: './app/dist/bundle.js'
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
           
  },
  
  module: {
  	loaders:[
   {
     test: /\.js$/,
     loader: 'babel-loader?presets[]=es2015',
     exclude: /node_modules|bower_components/
   },
   {
    
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      
   },
   {
          test: /\.(gif|png|jpe?g)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
          ]
    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'file-loader'
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              {removeTitle: true},
              {convertColors: {shorthex: false}},
              {convertPathData: false}
            ]
          }
        }
      ]
    },
    {
      test: /\.woff(2)?(\?[a-z0-9]+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot)(\?[a-z0-9]+)?$/,
      loader: "file-loader"
    }
   ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    	template:path.join(__dirname,"app/index.html")
    }),
    new BundleAnalyzerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
                  name: 'vendor',
                  minChunks: function (module) {
                     // this assumes your vendor imports exist in the node_modules directory
                     return module.context && module.context.indexOf('node_modules') !== -1;
                  }
              })
  ]
};
