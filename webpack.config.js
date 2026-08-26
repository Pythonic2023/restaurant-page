import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader",
                        options: {modules: true},
                    }
                ]

            },
            {
                test: /\.(jpg)$/i,
                type: "asset/resource",
            },
        ],
    },
};