"use strict";var decoder,Hex={};Hex.decode=function(e){var r;if(void 0===decoder){var o="0123456789ABCDEF",t=" \f\n\r\t \u2028\u2029";for(decoder=[],r=0;r<16;++r)decoder[o.charAt(r)]=r;for(o=o.toLowerCase(),r=10;r<16;++r)decoder[o.charAt(r)]=r;for(r=0;r<t.length;++r)decoder[t.charAt(r)]=-1}var d=[],c=0,a=0;for(r=0;r<e.length;++r){var i=e.charAt(r);if("="==i)break;if(-1!=(i=decoder[i])){if(void 0===i)throw"Illegal character at offset "+r;c|=i,++a>=2?(d[d.length]=c,c=0,a=0):c<<=4}}if(a)throw"Hex encoding incomplete: 4 bits missing";return d},module.exports=Hex;
//# sourceMappingURL=hex.js.map
