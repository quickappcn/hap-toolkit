"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compressDescSelector=compressDescSelector,exports.compressCssAttr=compressCssAttr;const cssDescSelectorList=[{newN:"t",oldN:"type",newV:["d","a","t","u","p","pe"],oldV:["descendant","attribute","tag","universal","pseudo","pseudo-element"]},{newN:"n",oldN:"name"},{newN:"i",oldN:"ignoreCase"},{newN:"a",oldN:"action"},{newN:"v",oldN:"value"}],cssAttrMap={width:"w",height:"h",paddingLeft:"pL",paddingRight:"pR",paddingTop:"pT",paddingBottom:"pB",marginLeft:"mL",marginRight:"mR",marginTop:"mT",marginBottom:"mB",borderLeftWidth:"bLW",borderTopWidth:"bTW",borderRightWidth:"bRW",borderBottomWidth:"bBW",borderLeftColor:"bLC",borderTopColor:"bTC",borderRightColor:"bRC",borderBottomColor:"bBC",borderStyle:"bS",borderRadius:"bR",borderBottomLeftRadius:"bBLR",borderBottomRightRadius:"bBRR",borderTopLeftRadius:"bTLR",borderTopRightRadius:"bTRR",indicatorSize:"iS",flex:"f",flexGrow:"fG",flexShrink:"fS",flexBasis:"fB",flexDirection:"fD",flexWrap:"fW",justifyContent:"jC",alignItems:"aI",alignContent:"aC",alignSelf:"aS",position:"p",top:"t",bottom:"b",left:"l",right:"r",zIndex:"zI",opacity:"o",background:"bg",backgroundColor:"bgC",backgroundImage:"bgI",backgroundSize:"bgS",backgroundRepeat:"bgR",backgroundPosition:"bgP",display:"d",visibility:"v",lines:"ls",color:"c",fontSize:"foS",fontStyle:"fSt",fontWeight:"foW",textDecoration:"tD",textAlign:"tA",lineHeight:"lH",textOverflow:"tO",transform:"ts",transformOrigin:"tsO",animationName:"aN",animationDuration:"aD",animationTimingFunction:"aTF",animationDelay:"aDe",animationIterationCount:"aIC",animationFillMode:"aFM",placeholderColor:"pC",selectedColor:"sC",textColor:"tC",timeColor:"tiC",textHighlightColor:"tHC",strokeWidth:"sW",progressColor:"prC",indicatorColor:"iC",indicatorSelectedColor:"iSC",slideWidth:"slW",slideMargin:"sM",resizeMode:"rM",columns:"col",columnSpan:"cS",maskColor:"mC",starBackground:"sB",starForeground:"sF",starSecondary:"sS"};function compressDescSelector(o){o=o[0]||[];for(let t=0;t<o.length;t++){const e=o[t]||{};cssDescSelectorList.forEach(function(o){e.hasOwnProperty(o.oldN)&&(e[o.newN]=e[o.oldN],delete e[o.oldN],o.oldV&&o.oldV.indexOf(e[o.newN])>-1&&(e[o.newN]=o.newV[o.oldV.indexOf(e[o.newN])]))})}return o}function compressCssAttr(o){for(const t in o){const e=o[t];if("@KEYFRAMES"!==t&&"object"==typeof e)for(const o in e)if(cssAttrMap[o]){e[cssAttrMap[o]]=e[o],delete e[o]}}}
//# sourceMappingURL=compress.js.map
