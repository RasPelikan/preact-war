module.exports = {
	entry : "./bootstrap.tsx",
	output : {
		filename : "../../../target/preact-war-0.0.1-SNAPSHOT/public/bundle.js",
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool : 'inline-source-map',
	resolve : {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions : [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js" ]
	},
	module : {
		loaders : [ {
			test : /\.css$/,
			use : [ {
				loader : "style-loader",
			}, {
				loader : "css-loader", //"typings-for-css-modules-loader",
				options : {
					camelcase : true,
					namedexport : true,
					modules : true,
					importLoaders : 2
				}
			}]
		},
		// Handle .ts and .tsx file via ts-loader.
		{
			test : /\.tsx?$/,
			loader : "ts-loader",
			exclude : /node_modules/,
			options : {
				configFile : "./tsconfig.json"
			}
		} ],
	}
};
