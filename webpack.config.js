const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.js"),
    inspiration: path.join(__dirname, "src/inspiration/inspiration.js"),
    contact: path.join(__dirname, "src/contact/contact.js"),
    produits: path.join(__dirname, "src/produits/produits.js"),
    panier: path.join(__dirname, "src/panier/panier.js"),
    panierVide: path.join(__dirname, "src/panier-vide/panier-vide.js"),
    services: path.join(__dirname, "src/serv/services.js"),
    chargement: path.join(__dirname, "src/chargement/chargement.js"),
    topbar: path.join(__dirname, "src/assets/javascripts/topbar.js"),
    topbarStyles: path.join(__dirname, "src/assets/styles/styles.scss"),
    mainStyles: path.join(__dirname, "src/index.scss"),
    inspirationStyles: path.join(__dirname, "src/inspiration/inspiration.scss"),
    contactStyles: path.join(__dirname, "src/contact/contact.scss"),
    produitsStyles: path.join(__dirname, "src/produits/produits.scss"),
    panierStyles: path.join(__dirname, "src/panier/panier.scss"),
    panierVideStyles: path.join(__dirname, "src/panier-vide/panier-vide.scss"),
    servicesStyles: path.join(__dirname, "src/serv/services.scss"),
    chargementStyles: path.join(__dirname, "src/chargement/chargement.scss"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "assets/images/[name][ext]",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./src/index.html"),
      chunks: ["main", "topbar", "mainStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "inspiration.html",
      template: path.join(__dirname, "./src/inspiration/inspiration.html"),
      chunks: ["inspiration", "topbar", "inspirationStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: path.join(__dirname, "./src/contact/contact.html"),
      chunks: ["contact", "topbar", "contactStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "produits.html",
      template: path.join(__dirname, "./src/produits/produits.html"),
      chunks: ["produits", "topbar", "produitsStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "panier.html",
      template: path.join(__dirname, "./src/panier/panier.html"),
      chunks: ["panier", "topbar", "panierStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "panier-vide.html",
      template: path.join(__dirname, "./src/panier-vide/panier-vide.html"),
      chunks: ["panierVide", "topbar", "panierVideStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "services.html",
      template: path.join(__dirname, "./src/serv/services.html"),
      chunks: ["services", "topbar", "servicesStyles"],
    }),
    new HtmlWebpackPlugin({
      filename: "chargement.html",
      template: path.join(__dirname, "./src/chargement/chargement.html"),
      chunks: ["chargement", "topbar", "chargementStyles"],
    }),
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    static: path.resolve(__dirname, "./dist"),
    watchFiles: ["./src/**"],
    port: 4000,
    hot: true,
  },
};
