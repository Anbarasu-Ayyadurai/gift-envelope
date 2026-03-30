const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    webpack: {
        configure: (config) => {

            // ✅ Entry for widget
            config.entry = './src/widget.js';

            config.output = {
                ...config.output,
                filename: 'widget.js'
            };

            // ✅ Disable splitting
            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            };
            config.optimization.runtimeChunk = false;

            // ✅ Remove MiniCssExtractPlugin safely
            config.plugins = config.plugins.filter(
                plugin => !(plugin instanceof MiniCssExtractPlugin)
            );

            // ✅ Replace CSS loader
            config.module.rules.forEach(rule => {
                if (Array.isArray(rule.oneOf)) {
                    rule.oneOf.forEach(one => {
                        if (one.use) {
                            one.use.forEach(loader => {
                                if (
                                    loader.loader &&
                                    loader.loader.includes("mini-css-extract-plugin")
                                ) {
                                    loader.loader = require.resolve("style-loader");
                                }
                            });
                        }
                    });
                }
            });

            return config;
        }
    }
};