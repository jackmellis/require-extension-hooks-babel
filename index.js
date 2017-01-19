const babel = require('babel-core');
let globalConfig = {};
const defaultConfig = {
  exclude : [/node_modules|coverage/],
  presets : [
    ['env', {
      targets : {
        node : ['current']
      }
    }]
  ],
  sourceMaps : true
};

module.exports = function({content, filename}){
  for (let x = 0, l = config.exclude.length; x < l; x++){
    if (filename.match(config.exclude[x])){
      return;
    }
  }

  let config = Object.assign({ filename, sourceFileName : filename }, globalConfig);
  let result = babel.transform(content, config);

  return { content : result.code, sourceMap : result.map };
};
module.exports.configure = function (options) {
  globalConfig = Object.assign({}, defaultConfig options);
}
