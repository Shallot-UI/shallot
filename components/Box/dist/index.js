"use strict";var s=Object.defineProperty,T=Object.defineProperties,B=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(o,t,e)=>t in o?s(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,a=(o,t)=>{for(var e in t||(t={}))h.call(t,e)&&y(o,e,t[e]);if(x)for(var e of x(t))C.call(t,e)&&y(o,e,t[e]);return o},P=(o,t)=>T(o,u(t));var b=(o,t)=>{for(var e in t)s(o,e,{get:t[e],enumerable:!0})},R=(o,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of K(t))!h.call(o,i)&&i!==e&&s(o,i,{get:()=>t[i],enumerable:!(n=B(t,i))||n.enumerable});return o};var F=o=>R(s({},"__esModule",{value:!0}),o);var k={};b(k,{withBoxStyleProps:()=>D});module.exports=F(k);var g=require("react");var l=require("@shallot-ui/core"),v=o=>{let t={},e=[...l.alignmentPropKeys,...l.borderPropKeys,...l.backgroundColorPropKeys,...l.borderColorPropKeys,...l.textColorPropKeys,...l.flexPropKeys,...l.marginPropKeys,...l.radiusPropKeys,...l.sizingPropKeys];return Object.keys(o).forEach(n=>{e.includes(n)||(t[n]=o[n])}),t},S=v;var r=require("@shallot-ui/core"),c=require("styled-components");var w=o=>{var m,f;let t=(0,r.applyStyles)(a({display:"flex",flexDirection:"column"},o.shallot)),e=(0,c.useTheme)(),{variant:n="default"}=o,i=(f=(m=e==null?void 0:e.variants)==null?void 0:m.Box)==null?void 0:f[n];return(0,r.applyStyles)(t,a(a(a(a(a(a(a(a(a(a({},(0,r.getAlignmentShallot)(t.flexDirection,o)),(0,r.getBorderShallot)(o)),(0,r.getBackgroundColorShallot)(o)),(0,r.getBorderColorShallot)(o)),(0,r.getTextColorShallot)(o)),(0,r.getFlexShallot)(o)),(0,r.getMarginShallot)(o)),(0,r.getRadiusShallot)(o)),(0,r.getSizingShallot)(o)),i))},d=w;var p=require("react/jsx-runtime"),D=o=>(0,g.forwardRef)((t,e)=>(0,p.jsx)(o,P(a({},S(t)),{ref:e,shallot:d(t)})));0&&(module.exports={withBoxStyleProps});
