'use strict';
var webpack = require('webpack'),

  HtmlWebpackPlugin=require('html-webpack-plugin'),
  path = require('path')
 

module.exports = {
  //context: PATHS.app,
  entry: {
    app: './app/index.js',
    //vendor: 'angular'
  },
  output: {
   // path: PATHS.app,
    filename: './app/dist/bundle.js'
  },
  
  module: {
  	loaders:[
   {
     test: /\.js$/,
     loader: 'babel?presets[]=es2015',
     exclude: /node_modules|bower_components/
   },
   {
    
      test: /\.scss$/,
      loader: 'style!css!sass',
      includePaths: [
           'node_modules', 'bower_components', 'src', '.'
         ]
   },
   {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
          ]
    }
   ]
  },

  imageWebpackLoader: {
    mozjpeg: {
      quality: 100
    },
    pngquant:{
      optimizationLevel: 0,
      quality: "100",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
  },

  devServer: {
     // hot: true,
      // enable HMR on the server

      contentBase:path.join(__dirname,"app"),
      // match the output path

     // publicPath: './app',
      // match the output `publicPath`

      //inline:true,
     // open:true
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
    	template:path.join(__dirname,"app/index.html")
    }),
    /*new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor', // Specify the common bundle's name.
                    minChunks: function (module) {
                                       // this assumes your vendor imports exist in the node_modules directory
                                       return module.context && module.context.indexOf('node_modules') !== -1;
                                    }
                })*/
  ]
};
