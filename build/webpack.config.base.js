const path = require("path");
const webpack = require("webpack");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modifyVars = require("./webpack.config.theme.js");

const filePublicPath = "assets/[name].[ext]";
module.exports = {
	context: path.resolve(__dirname, ".."),
	resolve: {
		// mainFiles: ["index","index.web"],
		modules: [
			path.resolve(__dirname, "../src"),
			path.resolve(__dirname, "../node_modules"),
			"node_modules"
		],
		alias: {
			src: path.resolve(__dirname, "../src"),
			CONTAINERS: "src/containers",
			MODULES: "src/modules",
			COMPONENT: "src/components",
			STYLES: "src/styles",
			UTILS: "src/utils",
			ASSETS: "src/assets",
			ROUTER: "src/router"
		},
		extensions: [
			".web.js",
			".js",
			".jsx",
			".less",
			".css",
			".json",
			".scss"
		] //自动解析的扩展
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				include: path.resolve(__dirname, "../src"),
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "eslint-loader"
					}
				]
			},
			{
				test: /\.eot$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.woff$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.ttf$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							name: filePublicPath,
							limit: 100
						}
					}
				]
			},
			{
				test: /\.ico$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							name: filePublicPath
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
                    {
						loader: "postcss-loader", // translates CSS into CommonJS
                        options: {
                            plugins: [require('autoprefixer')]
                        }
					},
					{
						loader: "less-loader", // compiles Less to CSS
						options: {
							modifyVars: modifyVars,
							javascriptEnabled: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "views/index.tpl.ejs",
			filename: "index.html",
			minify: true,
			inject: true
		})
	],
	externals: [
		require("webpack-require-http") //支持require 线上地址资源
	]
};
