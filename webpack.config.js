const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const PropertiesReader = require('properties-reader');
const appProperties = PropertiesReader('./src/assets/app.properties')._properties;

const polyfills = [
  {
    from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
    to: 'vendor',
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
    to: 'vendor/bundles',
    flatten: true
  },
  {
    from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true
  }
];

const assets = [
  {
    from: 'src/assets',
    to: 'assets/'
  },
  {
    from: 'src/*.html',
    to: '/'
  }
];

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    chunks: ['app'],
    filename: 'index.html',
    template: './src/index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }
  }),
  new CopyWebpackPlugin([...polyfills, ...assets], {
    ignore: ['.DS_Store']
  })

];


module.exports = ({ mode, presets }) => {
  return webpackMerge(
    {
    
		  entry: {
		    app: './src/index.js'
		  },
		 	externals: {
		   'appProperties': JSON.stringify(appProperties)
			},
      mode,
      output: {
        filename: '[name].[chunkhash:8].js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              plugins: ['@babel/plugin-syntax-dynamic-import'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    targets: '>1%, not dead, not ie 11'
                  }
                ]
              ]
            }
          }
        ]
      },
      plugins
    } 
  ); //webpackMerge
};


