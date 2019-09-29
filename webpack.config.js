const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new webpack.DefinePlugin({
      REACT_APP_FIREBASE_APIKEY: JSON.stringify(
        process.env.REACT_APP_FIREBASE_APIKEY
      )
    })
  ]
};
