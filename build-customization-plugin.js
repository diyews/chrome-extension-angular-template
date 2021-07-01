const { mergeWithCustomize, customizeObject } = require('webpack-merge');

exports.default = {
  config: function (cfg) {
    const strategy = mergeWithCustomize({
      customizeObject: customizeObject({
        devtool: 'replace',
      })
    });

    return strategy(cfg, {
      devtool: 'inline-source-map'
    });
  }
}
