"use strict";var _loaderUtils=_interopRequireDefault(require("loader-utils")),_compiler=require("@hap-toolkit/compiler"),_utils=require("../common/utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=function(e){this.cacheable&&this.cacheable();const t=this,r=_loaderUtils.default.parseQuery(this.query),i=!!(0,_utils.getWebpackOptions)(this).suppresslogs,{parsed:s,depList:l,log:o,depFiles:u}=(0,_compiler.parseStyle)({filePath:this.resourcePath,code:e,query:r});return o&&o.length&&(0,_utils.logWarn)(this,o,i),l.forEach(function(e){t.addDependency(e)}),u.forEach(e=>{t.addDependency((0,_utils.convertPath)(e))}),s};
//# sourceMappingURL=style-loader.js.map
