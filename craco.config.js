module.exports = {
    webpack: {
        configure: (config) => {

            config.entry = './src/widget.js';

            config.output = {
                ...config.output,
                filename: 'widget.js'
            };

            // ❗ Disable code splitting
            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            };

            config.optimization.runtimeChunk = false;

            // ✅ IMPORTANT: Inline CSS into JS
            config.plugins = config.plugins.map(plugin => {
                if (plugin.constructor.name === "MiniCssExtractPlugin") {
                    return null; // remove CSS extraction
                }
                return plugin;
            }).filter(Boolean);

            return config;
        }
    }
};