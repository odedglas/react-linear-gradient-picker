const path = require('path'),
	TerserPlugin = require('terser-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	devtool: 'source-map',
	externals: {
		'react': 'react',
	},
	target: 'node',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		library: 'linearGradientPicker',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.svg/,
				loaders: [ 'svg-url-loader' ]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|jp(e*)g)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					}
				}]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [ new TerserPlugin() ],
	}
};
