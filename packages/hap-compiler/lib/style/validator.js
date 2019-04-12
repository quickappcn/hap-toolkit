"use strict";var _utils=require("../utils");const colorNames={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},cssPseudoClasses=["disabled","checked","focus","active","visited","autoplay"],cssPseudoElements=["before","after","first-line","first-letter"],cssLengthUnits=["px","%"],cssAngleUnits=["deg"],cssTimeUnits=["ms"],logTypes=["NOTE","WARNING","ERROR"],cssUseLocalResource=["mylocation","mylocationIconPath","backgroundImage","starForeground","starSecondary","starBackground","fontSrc"],REGEXP_LENGTH=/^[-+]?[0-9]*\.?[0-9]+(.*)$/,REGEXP_COLOR_LONG=/^#[0-9a-fA-F]{6}$/,REGEXP_COLOR_SHORT=/^#[0-9a-fA-F]{3}$/,REGEXP_COLOR_RGB=/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,REGEXP_COLOR_RGBA=/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/,REGEXP_COLOR_HSL=/^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/,REGEXP_COLOR_HSLA=/^hsla\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d*\.?\d+)\s*\)$/,REGEXP_ARRAYCOLORSTOP=/(rgba|rgb)\([0-9,.\spx%]+\)\s?[0-9-+px%]*|[#]?\w+\s?[0-9+-\spx%]*/gi,REGEXP_ARRAYCOLOR=/(?:.+?\s(?=[#a-zA-Z]))|.+/g,REGEXP_INT=/^[-+]?[0-9]+$/,REGEXP_URL=/^url\(\s*(['"]?)\s*([^'"()]+?)\s*\1\s*\)$/,REGEXP_LOCAL=/^local\(\s*(['"]?)\s*([^'"()]+?)\s*\1\s*\)$/,REGEXP_NAME=/^[a-zA-Z_]+[a-zA-Z0-9]*$/,REGEXP_TIME=/^[-+]?[0-9]*\.?[0-9]+(.*)$/,REGEXP_TRANSFORM_ITEM=/^([0-9a-zA-Z]+)\((.*)\)$/,REGEXP_GRADIENT_DIRECTION=/^\s*(to|bottom|right|left|top)|[-+]?[0-9]*\.?[0-9]+(.*)/,REGEXP_ANGLE=/^[-+]?[0-9]*\.?[0-9]+(.*)/,REGEXP_NUMBER=/^[-+]?[0-9]*\.?[0-9]+$/,REGEXP_POSITION=/^(center|left|right|top|bottom)$/,REGEXP_FONT_WEIGHT=/^(normal|bold|lighter|bolder)$/,REGEXP_INT_ABS=/^[1-9]\d*$/,validator={length:function(e,t){const a=(e=(e||"").toString().trim()).match(REGEXP_LENGTH);if(t||(t=cssLengthUnits),a){const n=a[1];return 0!=+e||n?n?t.indexOf(n.toLowerCase())>=0?{value:e}:{value:parseFloat(e)+t[0],reason:function(e){return"ERROR: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 不支持单位 `"+n+"`, 目前仅支持 `"+JSON.stringify(t)+"`"}}:{value:parseFloat(e)+t[0],reason:function(e){return"WARNING: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 没有指定单位，默认为 `"+t[0]+"`"}}:{value:+e+t[0]}}return{value:null,reason:function(e,t){return"ERROR: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 不正确(仅支持数值)"}}},color:function(e){if((e=(e||"").toString().trim()).match(REGEXP_COLOR_LONG))return{value:e};if(e.match(REGEXP_COLOR_SHORT))return{value:"#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]};if(colorNames[e])return{value:colorNames[e]};let t,a,n,l,r,o,i,s;return REGEXP_COLOR_RGB.exec(e)&&(t=REGEXP_COLOR_RGB.exec(e),a=parseInt(t[1]),n=parseInt(t[2]),l=parseInt(t[3]),a>=0&&a<=255&&n>=0&&n<=255&&l>=0&&l<=255)?{value:"rgb("+[a,n,l].join(",")+")"}:REGEXP_COLOR_RGBA.exec(e)&&(t=REGEXP_COLOR_RGBA.exec(e),a=parseInt(t[1]),n=parseInt(t[2]),l=parseInt(t[3]),r=parseFloat(t[4]),a>=0&&a<=255&&n>=0&&n<=255&&l>=0&&l<=255&&r>=0&&r<=1)?{value:"rgba("+[a,n,l,r].join(",")+")"}:(t=REGEXP_COLOR_HSL.exec(e)||REGEXP_COLOR_HSLA.exec(e))&&(o=parseInt(t[1]),i=parseInt(t[2]),s=parseInt(t[3]),r=parseFloat(t[4]),o>=0&&o<=360&&i>=0&&i<=100&&s>=0&&s<=100)?r>=0&&r<=1?{value:`hsla(${o},${i}%,${s}%,${r})`}:{value:`hsl(${o},${i}%,${s}%)`}:"transparent"===e?{value:"rgba(0,0,0,0)"}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的颜色值 `"+t+"` 无效`"}}},number:function(e){const t=(e=(e||"").toString().trim()).match(REGEXP_NUMBER);return t&&!t[1]?{value:parseFloat(e)}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 无效 ` (仅支持数值)"}}},arraynumber:function(e,t){const a=(t=(t||"").toString().trim()).split(/[,\s]+/);if(a&&a.length<=e.length){const t=[];let n;const l=[];let r=0;return a.forEach((e,a)=>{if(n=validator.number(e),(0,_utils.isValidValue)(n.value)&&t.push(n.value),n.reason){let t=n.reason(a.toString(),e,n.value);const o=t.match(/^([A-Z]+):/);if(o){const e=logTypes.indexOf(o[1]);r<logTypes.indexOf(o[1])&&(r=e),t=t.replace(o[0],"").trim()}l.push(t)}}),{value:r<2?(0,_utils.splitAttr)(e,t):null,reason:l.length>0?function(e,t){return logTypes[r]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+l.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},integer:function(e){return(e=(e||"").toString()).match(REGEXP_INT)?{value:parseInt(e,10)}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 无效 ` (仅支持整数)"}}},iterationcount:function(e){return(e=(e||"").toString().trim()).match(REGEXP_INT)?{value:parseInt(e,10)}:/^infinite$/.test(e)?{value:-1}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 无效 ` (仅支持整数)"}}},url:function(e,t){if((e=(e||"").toString().trim()).match(/^none$/i))return{value:"none"};const a=REGEXP_URL.exec(e);if(a&&a[2].trim()){let e=a[2];return/^data:/.test(e)||/^http(s)?:/.test(e)||(e=(0,_utils.resolvePath)(e,t.filePath)),{value:e}}return{value:null,reason:function(e,t){return"WARNING: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 必须是 none 或者 url(...)"}}},fontSrc:function(e,t){const a=(e=(e||"").toString().trim()).split(",");if(a&&a.length>0){const e=[],n=[];let l=0;return a.forEach(function(a,r){a=a.trim();let o={};if(/^local/.test(a)){const e=REGEXP_LOCAL.exec(a);let t;e&&e[2].trim()&&(t=e[2]),o={value:t,reason:t?null:function(e,t){return"WARNING: @font-face中属性src`"+(0,_utils.camelCaseToHyphened)(e)+"`的值`"+t+"` 存在问题"}}}else o=validator.url(a,t);if((0,_utils.isValidValue)(o.value)&&e.push(o.value),o.reason){let e=o.reason(r.toString(),a,o.value);const t=e.match(/^([A-Z]+):/);if(t){const a=logTypes.indexOf(t[1]);l<logTypes.indexOf(t[1])&&(l=a),e=e.replace(t[0],"").trim()}n.push(e)}}),{value:l<2?e:null,reason:n.length>0?function(e,t){return logTypes[l]+": @font-face中属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+n.join("\n   ")}:null}}return{value:null,reason:function(e,t){return"ERROR: @font-face中属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题"}}},fontFamily:function(e){return(e=(e||"").toString())?{value:e}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题"}}},position:function(e,t){e=(e||"").toString(),t||(t=cssLengthUnits);const a=e.split(/\s+|,/);if(a&&a.length>1){const e=[];let n;const l=[];let r=0;return a.length>3&&(r=1,l.push("属性数目最多为3个, 忽略多余属性")),a.forEach((a,o)=>{if(n=validator.length(a,t),(0,_utils.isValidValue)(n.value)&&e.push(n.value),n.reason){let e=n.reason(o.toString(),a,n.value);const t=e.match(/^([A-Z]+):/);if(t){const a=logTypes.indexOf(t[1]);r<logTypes.indexOf(t[1])&&(r=a),e=e.replace(t[0],"").trim()}l.push(e)}}),{value:r<2?e.join(" "):null,reason:l.length>0?function(e,t){return logTypes[r]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+l.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},name:function(e){return(e=(e||"").toString()).match(REGEXP_NAME)?{value:e}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},transform:function(e){const t=(e=(e||"").toString().trim()).replace(/\)\s+/g,")|").split("|");if(t&&t.length){const e={};let a;const n=[];let l=0;return t.forEach((t,r)=>{const o=t.match(REGEXP_TRANSFORM_ITEM);if(o){let t=o[2];const r=o[1],i=transformValidatorMap[r];if("function"==typeof i){if("translate"!==r||/[,\s]+/.test(t.trim())||(t+=",0px"),(a=i(t)).value instanceof Array?a.value.forEach(t=>{(0,_utils.isValidValue)(t.v)&&(e[t.n]=t.v)}):(0,_utils.isValidValue)(a.value)&&(e[r]=a.value),a.reason){let e=a.reason(r,t,a.value);const o=e.match(/^([A-Z]+):/);if(o){const t=logTypes.indexOf(o[1]);l<logTypes.indexOf(o[1])&&(l=t),e=e.replace(o[0],"").trim()}n.push(e)}}else n.push("属性 `"+r+"` 不支持")}else l=2,n.push("属性 `"+r+"` 的值格式不正确")}),{value:(0,_utils.isEmptyObject)(e)?null:JSON.stringify(e),reason:n.length>0?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+n.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},background:function(e){let t=(e=(e||"").toString().trim()).split();if(e.indexOf("-gradient")>0){const a=/(repeating-linear|linear)[\s\S]*?(?=\s*(repeating|linear)|$)/g;t=e.match(a)}const a={values:[]};if(t&&t.length){const e=[];let n=0;return t.forEach(t=>{let l,r;if(t.indexOf("-gradient")>=0&&(l=t.indexOf("repeating")>=0?"repeatingLinearGradient":"linearGradient",r=backgroundValidatorMap[l]),"function"==typeof r){const o=r(t);if((0,_utils.isValidValue)(o.value)){const e=JSON.parse(o.value);a.values.push(e)}if(o.reason){let a=o.reason(l,t,o.value);const r=a.match(/^([A-Z]+):/);if(r){const e=logTypes.indexOf(r[1]);n<logTypes.indexOf(r[1])&&(n=e),a=a.replace(r[0],"").trim()}e.push(a)}}else n=2,e.push("背景类型 `"+t+"`暂不支持")}),{value:n<2?JSON.stringify(a):null,reason:e.length>0?function(t,a){return logTypes[n]+": 属性`"+(0,_utils.camelCaseToHyphened)(t)+"` 的值 `"+a+"` 存在问题: \n  "+e.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},backgroundSize:function(e,t){let a,n;e=(e||"").toString().trim(),t||(t=cssLengthUnits);let l=0;const r=e.split(/\s+/);if(1===r.length){if(["cover","contain","auto"].indexOf(r[0])>-1)return{value:r[0]};if((n=validator.length(r[0],t)).reason){const e=(a=n.reason("0",r[0],n.value)).match(/^([A-Z]+):/);e&&(l=logTypes.indexOf(e[1]),a=a.replace(e[0],"").trim())}return{value:(0,_utils.isValidValue)(n.value)?n.value:null,reason:a?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+a}:null}}if(2===r.length){const e=[],o=[];return r.forEach((r,i)=>{if("auto"!==r){if(n=validator.length(r,t),(0,_utils.isValidValue)(n.value)&&e.push(n.value),n.reason){const e=(a=n.reason(i.toString(),r,n.value)).match(/^([A-Z]+):/);if(e){const t=logTypes.indexOf(e[1]);l<t&&(l=t),a=a.replace(e[0],"").trim()}o.push(a)}}else e.push(r)}),{value:l<2?e.join(" "):null,reason:o.length>0?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+o.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},backgroundPosition:function(e,t){let a,n;e=(e||"").toString().trim(),t||(t=cssLengthUnits);let l=0,r=[];const o=[],i=e.split(/\s+/);if(1===i.length){if(REGEXP_POSITION.test(i[0]))return{value:i[0]};if((n=validator.length(i[0],t)).reason){const e=(a=n.reason("0",i[0],n.value)).match(/^([A-Z]+):/);e&&(l=logTypes.indexOf(e[1]),a=a.replace(e[0],"").trim())}return{value:(0,_utils.isValidValue)(n.value)?n.value:null,reason:a?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+a}:null}}if(2===i.length){const e=i[0],s=i[1];if("center"===e){if(REGEXP_POSITION.test(s))r=i;else if(n=validator.length(s,t),(0,_utils.isValidValue)(n.value)&&(r=i),n.reason){const e=(a=n.reason("1",s,n.value)).match(/^([A-Z]+):/);if(e){const t=logTypes.indexOf(e[1]);l<t&&(l=t),a=a.replace(e[0],"").trim()}o.push(a)}}else if(["top","bottom"].indexOf(e)>-1&&["left","right","center"].indexOf(s)>-1)r=i;else if(n=validator.length(e,t),["left","right"].indexOf(e)>-1||(0,_utils.isValidValue)(n.value))if(["top","bottom","center"].indexOf(s)>-1)r=i;else if(n=validator.length(s,t),(0,_utils.isValidValue)(n.value)&&(r=i),n.reason){const e=(a=n.reason("1",s,n.value)).match(/^([A-Z]+):/);if(e){const t=logTypes.indexOf(e[1]);l<t&&(l=t),a=a.replace(e[0],"").trim()}o.push(a)}return r.length||(l=2,o.length||o.push("属性值格式不正确")),{value:l<2?r.join(" "):null,reason:o.length>0?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+o.join("\n  ")}:null}}if(3===i.length){const e=i[0],a=i[1],n=i[2];return REGEXP_POSITION.test(e)&&(REGEXP_POSITION.test(a)&&(0,_utils.isValidValue)(validator.length(n,t).value)||REGEXP_POSITION.test(n)&&(0,_utils.isValidValue)(validator.length(a,t).value))&&(r=i),r.length||(l=2,o.length||o.push("属性值格式不正确")),{value:l<2?r.join(" "):null,reason:o.length>0?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+o.join("\n  ")}:null}}if(4===i.length){const e=i[0],a=i[1],n=i[2],s=i[3];return REGEXP_POSITION.test(e)&&REGEXP_POSITION.test(n)&&(0,_utils.isValidValue)(validator.length(a,t).value)&&(0,_utils.isValidValue)(validator.length(s,t).value)&&(r=i),r.length||(l=2,o.length||o.push("属性值格式不正确")),{value:l<2?r.join(" "):null,reason:o.length>0?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+o.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},fontWeight:function(e,t){return e=(e||"").toString().trim(),REGEXP_FONT_WEIGHT.test(e)||REGEXP_INT_ABS.test(e)?{value:e}:{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确，仅支持normal,bold,lighter,bolder或正整数"}}},linearGradient:function(e){e=(e||"").toString().trim();const t={type:"",directions:["to","bottom"],values:[]};let a={},n={};const l=[];let r=0;const o=e.match(/^([0-9a-zA-Z-]+)\(([\s\S]*)\)/);if(o){const i=(0,_utils.hyphenedToCamelCase)(o[1]);t.type=i;const s=o[2].split(/,/);if(REGEXP_GRADIENT_DIRECTION.test(s[0])){let e;if(/(to|bottom|right|left|top)/.test(s[0])?e=backgroundValidatorMap.linearGradientDirection:s[0].match(REGEXP_ANGLE)&&(e=backgroundValidatorMap.linearGradientAngle),"function"==typeof e&&(n=e(s[0]),s.splice(0,1),(0,_utils.isValidValue)(n.value)&&(t.directions=n.value.split(/\s+/)),n.reason)){let e=n.reason(i,s[0],n.value);if(e){const t=e.match(/^([A-Z]+):/);if(t){const a=logTypes.indexOf(t[1]);r<logTypes.indexOf(t[1])&&(r=a),e=e.replace(t[0],"").trim()}l.push(e)}}}if(s.length>0){if(a=(0,backgroundValidatorMap.linearGradientColor)(s),(0,_utils.isValidValue)(a.value)&&(t.values=JSON.parse(a.value)),a.reason){let e=a.reason(i,s,a.value);if(e){const t=e.match(/^([A-Z]+):/);if(t){const a=logTypes.indexOf(t[1]);r<logTypes.indexOf(t[1])&&(r=a),e=e.replace(t[0],"").trim()}l.push(e)}}}else r=2,l.push("参数 `"+e+"`缺少过渡颜色");return{value:r<2?JSON.stringify(t):null,reason:l.length>0?function(e,t){return logTypes[r]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+l.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},time:function(e){const t=(e=(e||"").toString()).match(REGEXP_TIME);if(t){const a=t[1];if(a){if(cssTimeUnits.indexOf(a.toLowerCase())>=0)return{value:e};{let t=parseFloat(e);return"s"===a.toLowerCase()?{value:(t=Math.round(1e3*t))+cssTimeUnits[0],reason:function(e){return"WARNING: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 不支持单位 `"+a+"`, 自动转换为 `"+cssTimeUnits[0]+"`"}}:{value:t+cssTimeUnits[0],reason:function(e){return"ERROR: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 不支持单位 `"+a+"`, 目前仅支持 `"+JSON.stringify(cssTimeUnits)+"`"}}}}return{value:parseFloat(e)+cssTimeUnits[0],reason:function(e){return"WARNING: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 没有指定单位，默认为 `"+cssTimeUnits[0]+"`"}}}return{value:null,reason:function(e,t){return"ERROR: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 的值不正确 `"+t+"` (仅支持数值)"}}},angle:function(e){const t=(e=(e||"").toString().trim()).match(REGEXP_ANGLE);if(t){const a=t[1];if(a){if(cssAngleUnits.indexOf(a.toLowerCase())>=0)return{value:e};{let t=parseFloat(e);return"rad"===a.toLowerCase()?{value:(t=Math.round(180*t/Math.PI))+cssAngleUnits[0],reason:function(e){return"WARNING: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 不支持单位 `"+a+"`, 自动转换为 `"+cssAngleUnits[0]+"`"}}:{value:t+cssAngleUnits[0],reason:function(e){return"ERROR: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 不支持单位 `"+a+"`, 目前仅支持 `"+JSON.stringify(cssAngleUnits)+"`"}}}}return{value:parseFloat(e)+cssAngleUnits[0],reason:function(e){return"WARNING: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 没有指定单位，默认为 `"+cssAngleUnits[0]+"`"}}}return{value:null,reason:function(e,t){return"ERROR: 属性 `"+(0,_utils.camelCaseToHyphened)(e)+"` 的值不正确 `"+t+"` (仅支持数值)"}}},enum:function(e,t){const a=e.indexOf(t);return a>0?{value:t}:0===a?{value:t,reason:!1}:{value:null,reason:function(t,a){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(t)+"` 的值 `"+a+"` 无效 ` (有效枚举值为: `"+e.join("`|`")+"`)"}}},gradientdirection:function(e){const t=(e=(e||"").toString().trim()).split(/\s+/);let a=[];const n=[];return t.forEach(e=>{"to"===e?n.push(0):"top"===e|"bottom"===e?n.push(1):"left"===e|"right"===e?n.push(2):a.push(e)}),0===a.length&&n.length>1&&n.length<4&&0===n[0]&&0!==n[1]?n[2]&&n[1]+n[2]!==3&&(a=t):a=t,{value:a.length>0?null:t.join(" "),reason:a.length>0?function(e){return"ERROR:  属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的属性值 `"+a.join(" ")+"` 格式不正确 `)"}:null}},multipleLength:function(e,t){return"auto"===(e=(e||"").toString().trim())?{value:e}:/^[-+]?[0-9]+.*/.test(e)?validator.length(e,t):{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 的值不正确"}}},arraylength:function(e,t,a){const n=(t=(t||"").toString().trim()).split(/[,\s]+/);if(n&&n.length<=e.length){const l=[];let r;const o=[];let i=0;const s=/^margin.*/.test(e[0]);return n.forEach((e,t)=>{if(r=s?validator.multipleLength(e,a):validator.length(e,a),(0,_utils.isValidValue)(r.value)&&l.push(r.value),r.reason){let a=r.reason(t.toString(),e,r.value);const n=a.match(/^([A-Z]+):/);if(n){const e=logTypes.indexOf(n[1]);i<logTypes.indexOf(n[1])&&(i=e),a=a.replace(n[0],"").trim()}o.push(a)}}),{value:i<2?(0,_utils.splitAttr)(e,l):null,reason:o.length>0?function(e){return logTypes[i]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+o.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},arraycolor:function(e,t){const a=(t=(t||"").toString()).match(REGEXP_ARRAYCOLOR);if(a&&a.length<=4){const t=[];let n;const l=[];let r=0;return a.forEach((e,a)=>{if(n=validator.color(e),(0,_utils.isValidValue)(n.value)&&t.push(n.value),n.reason){let t=n.reason(a.toString(),e,n.value);const o=t.match(/^([A-Z]+):/);if(o){const e=logTypes.indexOf(o[1]);r<logTypes.indexOf(o[1])&&(r=e),t=t.replace(o[0],"").trim()}l.push(t)}}),{value:r<2?(0,_utils.splitAttr)(e,t):null,reason:l.length>0?function(e,t){return logTypes[r]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+l.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},arraycolorstop:function(e){const t=(e=(e||"").toString().trim()).match(REGEXP_ARRAYCOLORSTOP);if(t&&t.length>1){const a=[],n=[];let l=0;return t.forEach((t,r)=>{const o=t.match(/[\s]+[-+0-9]+(px|%)?$/),i=[];if(o){const e=validator.length(o[0]),a=t.indexOf(o[0]);if(t=t.substring(0,a),(0,_utils.isValidValue)(e.value)&&i.push(e.value),e.reason){let t=e.reason(r.toString(),o[0],e.value);const a=t.match(/^([A-Z]+):/);if(a){const e=logTypes.indexOf(a[1]);l<logTypes.indexOf(a[1])&&(l=e),t=t.replace(a[0],"").trim()}n.push(t)}}if(t){const e=validator.color(t);if((0,_utils.isValidValue)(e.value)&&i.unshift(e.value),a.push(i.join(" ")),e.reason){let a=e.reason(r.toString(),t,e.value);const o=a.match(/^([A-Z]+):/);if(o){const e=logTypes.indexOf(o[1]);l<logTypes.indexOf(o[1])&&(l=e),a=a.replace(o[0],"").trim()}n.push(a)}}else l=2,n.push("参数 `"+e+"` 格式不正确")}),{value:l<2?JSON.stringify(a):null,reason:n.length>0?function(e,t){return logTypes[l]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+n.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确，至少指定两种颜色"}}},mylocation:function(e,t){const a=(e=(e||"").toString()).split(/\s+/);if(a&&a.length<=3){const e=[];let n;const l=[];let r=0;const o=[];let i=-1;return a.forEach((a,i)=>{if((0,_utils.isValidValue)(validator.color(a).value)?(o.push(i),0===i?(n=validatorMap.mylocationFillColor(a),e.push({n:"mylocationFillColor",v:n.value})):1===i&&(n=validatorMap.mylocationStrokeColor(a),e.push({n:"mylocationStrokeColor",v:n.value}))):(0,_utils.isValidValue)(validator.url(a,t).value)?(o.push(2),n=validatorMap.mylocationIconPath(a,t),e.push({n:"mylocationIconPath",v:n.value})):(n={},r=2,l.push("属性`"+i+"` 的值 `"+a+"` 存在问题: \n  不满足fillColor、strokeColor和iconPath的检验标准")),n&&n.reason){let e=n.reason(i.toString(),a,n.value);const t=e.match(/^([A-Z]+):/);if(t){const a=logTypes.indexOf(t[1]);r<logTypes.indexOf(t[1])&&(r=a),e=e.replace(t[0],"").trim()}l.push(e)}}),o.forEach(e=>{e>i?i=e:(r=2,l.push("必须按顺序设置属性fillColor、strokeColor和iconPath"))}),{value:r<2?e:null,reason:l.length>0?function(e,t){return logTypes[r]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+l.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},border:function(e,t,a){e=(e=(e||"").toString()).replace(/\s*,\s*/g,","),a=(a||"").toString();const n=e.split(/\s+/);if(n&&n.length<=3){let e,l=[];const r=[];let o=0;const i=[];let s=-1;return n.forEach((n,s)=>{if((0,_utils.isValidValue)(validator.length(n,t).value)){i.push(0);const t="border"+a+"Width";(e=validatorMap[t](n)).value instanceof Array?l=l.concat(e.value):a&&(0,_utils.isValidValue)(e.value)&&l.push({n:t,v:e.value})}else if((0,_utils.isValidValue)(validatorMap.borderStyle(n).value))i.push(1),e=validatorMap.borderStyle(n),l.push({n:"border"+a+"Style",v:n});else if((0,_utils.isValidValue)(validator.color(n).value)){i.push(2);const t="border"+a+"Color";(e=validatorMap[t](n)).value instanceof Array?l=l.concat(e.value):a&&(0,_utils.isValidValue)(e.value)&&l.push({n:t,v:e.value})}else e={},o=2,r.push("属性`"+s+"` 的值 `"+n+"` 存在问题: \n  不满足width、style和color的检验标准");if(e&&e.reason){let t=e.reason(s.toString(),n,e.value);const a=t.match(/^([A-Z]+):/);if(a){const e=logTypes.indexOf(a[1]);o<logTypes.indexOf(a[1])&&(o=e),t=t.replace(a[0],"").trim()}r.push(t)}}),i.forEach(e=>{e>s?s=e:(o=2,r.push("必须按顺序设置属性width style color"))}),{value:o<2?l:null,reason:r.length>0?function(e,t){return logTypes[o]+": 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 存在问题: \n  "+r.join("\n  ")}:null}}return{value:null,reason:function(e,t){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+t+"` 格式不正确"}}},borderLeft:function(e,t){return validator.border(e,t,"Left")},borderRight:function(e,t){return validator.border(e,t,"Right")},borderTop:function(e,t){return validator.border(e,t,"Top")},borderBottom:function(e,t){return validator.border(e,t,"Bottom")},display:function(e){e=(e||"").toString();const t=["flex","none"],a=t.indexOf(e);return a>0?{value:e}:"block"===e?{value:"flex",reason:function(e,a){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+a+"` 需修改为flex ` (有效枚举值为: `"+t.join("`|`")+"`)"}}:0===a?{value:e,reason:!1}:{value:null,reason:function(e,a){return"ERROR: 属性`"+(0,_utils.camelCaseToHyphened)(e)+"` 的值 `"+a+"` 无效 ` (有效枚举值为: `"+t.join("`|`")+"`)"}}}};function _lengthValidator(e,t){return validator.length(t,e)}function makeLengthValidator(e){return _lengthValidator.bind(null,e)}function makeEnumValidator(e){return validator.enum.bind(null,e)}function makeAbbrAttrValidator(e,t){return validator[e].bind(null,t)}const backgroundValidatorMap={linearGradient:validator.linearGradient,repeatingLinearGradient:validator.linearGradient,linearGradientColor:validator.arraycolorstop,linearGradientAngle:validator.angle,linearGradientDirection:validator.gradientdirection},transformValidatorMap={translate:makeAbbrAttrValidator("arraylength",["translateX","translateY"]),translateX:makeLengthValidator(["px","%"]),translateY:makeLengthValidator(["px","%"]),scale:makeAbbrAttrValidator("arraynumber",["scaleX","scaleY"]),scaleX:validator.number,scaleY:validator.number,rotate:validator.angle,rotateX:validator.angle,rotateY:validator.angle},validatorMap={width:validator.length,height:validator.length,padding:makeAbbrAttrValidator("arraylength",["paddingTop","paddingRight","paddingBottom","paddingLeft"]),paddingLeft:validator.length,paddingRight:validator.length,paddingTop:validator.length,paddingBottom:validator.length,margin:makeAbbrAttrValidator("arraylength",["marginTop","marginRight","marginBottom","marginLeft"]),marginLeft:validator.multipleLength,marginRight:validator.multipleLength,marginTop:validator.multipleLength,marginBottom:validator.multipleLength,border:validator.border,borderLeft:validator.borderLeft,borderRight:validator.borderRight,borderTop:validator.borderTop,borderBottom:validator.borderBottom,borderWidth:makeAbbrAttrValidator("arraylength",["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"]),borderLeftWidth:validator.length,borderTopWidth:validator.length,borderRightWidth:validator.length,borderBottomWidth:validator.length,borderColor:makeAbbrAttrValidator("arraycolor",["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),borderLeftColor:validator.color,borderTopColor:validator.color,borderRightColor:validator.color,borderBottomColor:validator.color,borderStyle:makeEnumValidator(["solid","dotted","dashed"]),borderRadius:validator.length,borderBottomLeftRadius:validator.length,borderBottomRightRadius:validator.length,borderTopLeftRadius:validator.length,borderTopRightRadius:validator.length,indicatorSize:validator.length,indicatorTop:validator.length,indicatorRight:validator.length,indicatorBottom:validator.length,indicatorLeft:validator.length,flex:validator.number,flexGrow:validator.number,flexShrink:validator.number,flexBasis:validator.length,flexDirection:makeEnumValidator(["row","column","row-reverse","column-reverse"]),flexWrap:makeEnumValidator(["nowrap","wrap","wrap-reverse"]),justifyContent:makeEnumValidator(["flex-start","flex-end","center","space-between","space-around"]),alignItems:makeEnumValidator(["stretch","flex-start","flex-end","center"]),alignContent:makeEnumValidator(["stretch","flex-start","flex-end","center","space-between","space-around"]),alignSelf:makeEnumValidator(["auto","flex-start","flex-end","center","baseline","stretch"]),position:makeEnumValidator(["static","fixed","relative","absolute"]),top:validator.length,bottom:validator.length,left:validator.length,right:validator.length,zIndex:validator.integer,opacity:validator.number,background:validator.background,backgroundColor:validator.color,backgroundImage:validator.url,backgroundSize:validator.backgroundSize,backgroundRepeat:makeEnumValidator(["no-repeat","repeat","repeat-x","repeat-y"]),backgroundPosition:validator.backgroundPosition,display:validator.display,visibility:makeEnumValidator(["visible","hidden"]),objectFit:makeEnumValidator(["fill","contain","cover","none","scale-down"]),lines:validator.integer,color:validator.color,fontSize:validator.length,fontStyle:makeEnumValidator(["normal","italic"]),fontWeight:validator.fontWeight,textDecoration:makeEnumValidator(["none","underline","line-through"]),textAlign:makeEnumValidator(["left","center","right"]),lineHeight:validator.length,textOverflow:makeEnumValidator(["clip","ellipsis"]),textIndent:makeLengthValidator(["px","cm","%","em"]),transform:validator.transform,transformOrigin:validator.position,animationName:validator.name,animationDuration:validator.time,animationTimingFunction:makeEnumValidator(["linear","ease","ease-in","ease-out","ease-in-out"]),animationDelay:validator.time,animationIterationCount:validator.iterationcount,animationFillMode:makeEnumValidator(["none","forwards"]),placeholderColor:validator.color,selectedColor:validator.color,textColor:validator.color,timeColor:validator.color,textHighlightColor:validator.color,strokeWidth:validator.length,progressColor:validator.color,indicatorColor:validator.color,indicatorSelectedColor:validator.color,slideWidth:validator.length,slideMargin:validator.length,resizeMode:makeEnumValidator(["cover","contain","stretch","center"]),columns:validator.number,columnSpan:validator.number,maskColor:validator.color,mylocation:validator.mylocation,mylocationFillColor:validator.color,mylocationStrokeColor:validator.color,mylocationIconPath:validator.url,starBackground:validator.url,starForeground:validator.url,starSecondary:validator.url,fontSrc:validator.fontSrc,fontFamily:validator.fontFamily};function validate(e,t,a){let n,l;const r=validatorMap[e];return"function"==typeof r?(n="function"!=typeof t?mightReferlocalResource(e)?r(t,a):r(t):{value:t}).reason&&(l={reason:n.reason(e,t,n.value)}):(n={value:t},l={reason:"ERROR: 样式名`"+(0,_utils.camelCaseToHyphened)(e)+"`不支持"}),{value:n.value instanceof Array?n.value:[{n:e,v:n.value}],log:l}}function mightReferlocalResource(e){return cssUseLocalResource.indexOf(e)>-1}function validatePseudoClass(e){return e=e.replace(/^(:)/,""),cssPseudoClasses.indexOf(e.toLowerCase())>=0}function validatePseudoElement(e){return e=e.replace(/^(:)/,""),cssPseudoElements.indexOf(e.toLowerCase())>=0}module.exports={colorNames:colorNames,validatorMap:validatorMap,validator:validator,validate:validate,validatePseudoClass:validatePseudoClass,validatePseudoElement:validatePseudoElement,enumValidatorFactory:makeEnumValidator,mightReferlocalResource:mightReferlocalResource};
//# sourceMappingURL=validator.js.map
