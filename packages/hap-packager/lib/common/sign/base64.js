"use strict";var decoder,Base64={};Base64.decode=function(e){var r;if(void 0===decoder){var a="= \f\n\r\t \u2028\u2029";for(decoder=[],r=0;r<64;++r)decoder["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r)]=r;for(r=0;r<a.length;++r)decoder[a.charAt(r)]=-1}var t=[],o=0,s=0;for(r=0;r<e.length;++r){var c=e.charAt(r);if("="==c)break;if(-1!=(c=decoder[c])){if(void 0===c)throw"Illegal character at offset "+r;o|=c,++s>=4?(t[t.length]=o>>16,t[t.length]=o>>8&255,t[t.length]=255&o,o=0,s=0):o<<=6}}switch(s){case 1:throw"Base64 encoding incomplete: at least 2 bits missing";case 2:t[t.length]=o>>10;break;case 3:t[t.length]=o>>16,t[t.length]=o>>8&255}return t},Base64.re=/-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,Base64.unarmor=function(e){var r=Base64.re.exec(e);if(r)if(r[1])e=r[1];else{if(!r[2])throw"RegExp out of sync";e=r[2]}return Base64.decode(e)},module.exports=Base64;
//# sourceMappingURL=base64.js.map