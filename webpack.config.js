const path = require('path');

module.exports = {
  // mode: "production",
  mode: "development",
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
