module.exports = {
  webpack: {
    configure: (config) => {

      config.entry = './src/widget.js';

      config.output = {
        ...config.output,
        filename: 'widget.js',
        library: 'MyReactWidget',
        libraryTarget: 'window' // ensures global access
      };

      // ✅ IMPORTANT: Add CSS handling
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      });

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