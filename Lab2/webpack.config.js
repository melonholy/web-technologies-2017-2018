const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: "./index.js",
    plugins: [
        new UglifyJsPlugin()
    ],
    output: {
        filename: "bundle.js"
    },
    watch: true
};
