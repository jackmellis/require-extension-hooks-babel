let babel;
const defaultConfig = {
  exclude : [/node_modules|coverage/],
  presets : [
    ['@babel/env', {
      targets : {
        node : 'current'
      }
    }]
  ],
  sourceMaps : true
};
let globalConfig = Object.assign({}, defaultConfig);

module.exports = function({content, filename}){
  for (let x = 0, l = globalConfig.exclude.length; x < l; x++){
    if (filename.match(globalConfig.exclude[x])){
      return;
    }
  }

  let config = Object.assign({ filename, sourceFileName : filename }, globalConfig);
  delete config.exclude;

  if (!babel){
    babel = require('@babel/core');
  }
  let result = babel.transform(content, config);

  return { content : result.code, sourceMap : result.map };
};
module.exports.configure = function (options) {
  globalConfig = Object.assign({}, defaultConfig, options);
};
