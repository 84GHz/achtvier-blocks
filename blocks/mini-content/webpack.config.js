var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractNormalCSS = new ExtractTextPlugin("style.css");
const ExtractEditorCSS = new ExtractTextPlugin("editor.css");

var config = {
  entry: ['./src/index.js','./src/style.scss','./src/editor.scss'],
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'achtvier-blocks',
    libraryTarget: 'umd'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
            {
                test: /.style\.scss$/i,
                use: ExtractNormalCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
              {
                test: /.editor\.scss$/i,
                use: ExtractEditorCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }

    ]

  },

  plugins: [
    ExtractNormalCSS,
    ExtractEditorCSS
  ]
};

if (process.env.REACT_CALENDAR_WEBPACK === 'umd_min') {

  config.output.path = __dirname;
  config.output.filename = config.output.filename.replace(/\.js$/, '.min.js');
}


module.exports = config;
