const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),

  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader?cacheDirectory=true"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8181,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    host: "127.0.0.1"
  }
};
