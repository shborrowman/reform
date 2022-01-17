const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './app/index.js',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../build'),
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env', { targets: "defaults" }]
							]
						}
					},
					'webpack-import-glob-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: path.resolve(__dirname, '../build'),
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								config: path.resolve(__dirname, 'postcss.config.js')
							}
						}
					},
					{
						loader: 'resolve-url-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							implementation: require('sass'),
						}
					},
				]
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader',
					}
				]
			},
		]
	}
}