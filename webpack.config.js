import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
const prod = process.env.NODE_ENV === "production";
const __dirname = path.resolve();

const config = {
  mode: prod ? "production" : "development",

  devtool: prod ? "hidden-source-map" : "eval",
  devServer: {
    historyApiFallback: true, // react router
    port: 5555,
  },
  entry: "./client/client.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@hooks": path.resolve(`${__dirname}/client`, "hooks"),
      "@pages": path.resolve(`${__dirname}/client`, "pages"),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./client/index.html",
    }),
  ],
};

export default config;
