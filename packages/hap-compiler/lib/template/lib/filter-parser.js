"use strict";const validDivisionCharRE=/[\w).+\-_$\]]/;function parseFilters(e){let i,r,s,t,a,c,l=!1,o=!1,n=!1,f=!1,h=0,d=0,u=0,b=0;for(s=0;s<e.length;s++)if(r=i,i=e.charCodeAt(s),l)39===i&&92!==r&&(l=!1);else if(o)34===i&&92!==r&&(o=!1);else if(n)96===i&&92!==r&&(n=!1);else if(f)47===i&&92!==r&&(f=!1);else if(124!==i||124===e.charCodeAt(s+1)||124===e.charCodeAt(s-1)||h||d||u){switch(i){case 34:o=!0;break;case 39:l=!0;break;case 96:n=!0;break;case 40:u++;break;case 41:u--;break;case 91:d++;break;case 93:d--;break;case 123:h++;break;case 125:h--}if(47===i){let i=s-1;for(;i>=0&&" "===(c=e.charAt(i));i--);c&&validDivisionCharRE.test(c)||(f=!0)}}else void 0===t?(b=s+1,t=e.slice(0,s).trim()):k();function k(){(a||(a=[])).push(e.slice(b,s).trim()),b=s+1}if(void 0===t?t=e.slice(0,s).trim():0!==b&&k(),a)for(s=0;s<a.length;s++)t=wrapFilter(t,a[s]);return t}function wrapFilter(e,i){const r=i.indexOf("(");if(r<0)return`this.${i}(${e})`;{const s=i.slice(0,r),t=i.slice(r+1);return`this.${s}(${e}${")"!==t?","+t:t}`}}module.exports=parseFilters;
//# sourceMappingURL=filter-parser.js.map
