const path = require('path');

const { rspack } = require('@rspack/core');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  externals: {
    react: 'react',
  },
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'commonjs2',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: false,
                  refresh: false,
                },
              },
            },
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};
