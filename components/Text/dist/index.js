"use strict";var h=Object.defineProperty,M=Object.defineProperties,N=Object.getOwnPropertyDescriptor,O=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var v=(t,e,o)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,n=(t,e)=>{for(var o in e||(e={}))p.call(e,o)&&v(t,o,e[o]);if(a)for(var o of a(e))z.call(e,o)&&v(t,o,e[o]);return t},f=(t,e)=>M(t,O(e));var L=(t,e)=>{var o={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&a)for(var r of a(t))e.indexOf(r)<0&&z.call(t,r)&&(o[r]=t[r]);return o};var X=(t,e)=>{for(var o in e)h(t,o,{get:e[o],enumerable:!0})},Y=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Q(e))!p.call(t,l)&&l!==o&&h(t,l,{get:()=>e[l],enumerable:!(r=N(e,l))||r.enumerable});return t};var Z=t=>Y(h({},"__esModule",{value:!0}),t);var $={};X($,{withTextStyleProps:()=>_});module.exports=Z($);var w=require("styled-components"),i=require("@shallot-ui/core");var B=require("react/jsx-runtime"),_=t=>e=>{var W,F;let D=e,{textColor:o,backgroundColor:r,unitsAround:l,unitsAbove:x,unitsBelow:d,unitsLeft:T,unitsRight:S,unitHeight:b,unitWidth:c,maxUnitHeight:y,maxUnitWidth:H,minUnitHeight:P,minUnitWidth:C,fontFamily:A,font:j,lineHeight:U,letterSpacing:k,fontSize:m,leftText:R,centerText:V,rightText:q,underline:u,uppercase:E,shallot:G,variant:I="default"}=D,J=L(D,["textColor","backgroundColor","unitsAround","unitsAbove","unitsBelow","unitsLeft","unitsRight","unitHeight","unitWidth","maxUnitHeight","maxUnitWidth","minUnitHeight","minUnitWidth","fontFamily","font","lineHeight","letterSpacing","fontSize","leftText","centerText","rightText","underline","uppercase","shallot","variant"]),s=(0,w.useTheme)(),K=(F=(W=s==null?void 0:s.variants)==null?void 0:W.Text)==null?void 0:F[I],g=n(f(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n(n({display:"flex"},A&&{fontFamily:(0,i.getFontFamily)(A)}),E&&{textTransform:"uppercase"}),o&&{color:(0,i.getColorShade)(o)}),l&&{margin:(0,i.getUnits)(l)}),x&&{marginTop:(0,i.getUnits)(x)}),d&&{marginBottom:(0,i.getUnits)(d)}),T&&{marginLeft:(0,i.getUnits)(T)}),S&&{marginRight:(0,i.getUnits)(S)}),b&&{height:(0,i.getUnits)(b)}),c&&{width:(0,i.getUnits)(c)}),y&&{maxHeight:(0,i.getUnits)(y)}),H&&{maxWidth:(0,i.getUnits)(H)}),P&&{minHeight:(0,i.getUnits)(P)}),C&&{minWidth:(0,i.getUnits)(C)}),m&&{fontSize:(0,i.getFontSize)(m)}),k&&{letterSpacing:(0,i.getLetterSpacing)(k)}),U&&{lineHeight:(0,i.getLineHeight)(U)}),R&&{textAlign:"left"}),V&&{textAlign:"center"}),q&&{textAlign:"right"}),u===!0&&{textDecoration:"underline"}),u===!1&&{textDecoration:"none"}),u==="under"&&{textDecoration:"underline",textUnderlinePosition:"under"}),K),{breakpoints:(0,i.getBreakpoints)({fontSize:m})}),r&&{backgroundColor:(0,i.getColorShade)(r)});return g=(0,i.applyStyles)(g,G),(0,B.jsx)(t,f(n({},J),{shallot:g}))};0&&(module.exports={withTextStyleProps});