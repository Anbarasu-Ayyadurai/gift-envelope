module.exports = {
    webpack: {
        configure: (config) => {

            config.entry = './src/widget.js';

            config.output = {
                ...config.output,
                filename: 'widget.js'
            };

            config.optimization.splitChunks = {
                cacheGroups: {
                    default: false
                }
            };

            config.optimization.runtimeChunk = false;

            return config;
        }
    }
};