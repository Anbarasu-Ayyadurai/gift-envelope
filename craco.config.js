module.exports = {
    webpack: {
        configure: (config) => {
            config.entry = './src/widget.js';

            config.output = {
                ...config.output,
                filename: 'widget.js',
                library: 'MyReactWidget',
                libraryTarget: 'umd',
                globalObject: 'this'
            };

            return config;
        }
    }
};