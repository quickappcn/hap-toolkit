"use strict";var _loaderUtils=_interopRequireDefault(require("loader-utils")),_compiler=require("@hap-toolkit/compiler"),_utils=require("../common/utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=function(e){this.cacheable&&this.cacheable();const t=_loaderUtils.default.parseQuery(this.resourceQuery);t.filePath=this.resourcePath;const{parsed:r,log:i,depFiles:l}=(0,_compiler.parseTemplate)(e,t);return i&&i.length&&(0,_utils.logWarn)(this,i),l.forEach(e=>{this.addDependency((0,_utils.convertPath)(e))}),r};
//# sourceMappingURL=template-loader.js.map
