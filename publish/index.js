"use strict";var e=require("react"),t=require("react/jsx-runtime");let n,r;const s=new Map;(e=>{r||(n={...n,...e},r=new Proxy(n,{get(e,t){if("string"==typeof t&&t in e)return e[t]},set(e,t,n){if("string"==typeof t){const r=e[t];if(JSON.stringify(r)!==JSON.stringify(n)){e[t]=n;const r=s.get(t);r&&r.forEach((e=>e(n)))}return!0}return!1}}))})({styleData:null});const o=(e,t)=>(s.has(e)||s.set(e,new Set),s.get(e)?.add(t),()=>s.get(e)?.delete(t)),a=t=>{const n=()=>(r?{...r}:{})[t];return[e.useSyncExternalStore((e=>o(t,e)),n,n),e.useCallback((e=>{const s=n(),o="function"==typeof e?e(s):e;var a,l;Object.is(s,o)||(a=t,l=o,r&&(r[a]=l))}),[t])]},l=({id:e,fileNames:t})=>{if(t&&t.forEach((e=>{const t=document.head.querySelector(`style[name="${e}"]`);t&&t.remove()})),e&&!t){document.head.querySelectorAll(`style[atom="${e}"]`).forEach((e=>{e.remove()}))}},c=async(e,t,n,r)=>{const s=Object.keys(e)[0],{fileNames:o,encap:a,loaded:l}=e[s];if(!o||0===o.length)return;const c=o.map((async e=>{const t=((e,t)=>{let n=document.head.querySelector(`style[name="${t}"]`);return n||(n=document.createElement("style"),n.setAttribute("atom",e),n.setAttribute("name",t),document.head.appendChild(n)),n})(s,e);try{const{default:r}=await n(e);t.textContent=a?`.${e}{${r}}`:r}catch(n){console.error(`Loading failed for "${e}" style`,"\n","✦styledAtom✦","\n",n),t.textContent="⛔︎"}}));var i,u;await Promise.all(c),t&&(u=o||[],(i=t?.fileNames||[]).length===u.length&&i.every(((e,t)=>e===u[t])))&&l||r((e=>({...e,[s]:{...e?.[s],loaded:!0}})))},i=t=>{const[n,r]=a("styleData"),s=e.useRef({});e.useEffect((()=>{const e=Object.keys(s.current??{}),o=n?Object.keys(n):[];e.filter((e=>!o.includes(e))).forEach((e=>l({id:e}))),n&&(e=>{Object.entries(e??{}).forEach((([e,n])=>{const o=s.current?.[e];let a=[];if(o){const e=o.fileNames||[],t=n.fileNames||[];a=e.filter((e=>!t.includes(e)))}c({[e]:n},o||{},t,r),o&&a.length>0&&l({id:e,fileNames:a})}))})(n),s.current={...n}}),[n])},u="✦styledAtom✦",f="empty",d=(e,t)=>{"undefined"!=typeof window&&("set"===e?sessionStorage.setItem(u,JSON.stringify(t)):sessionStorage.removeItem(u))};exports.StyleCore=({path:t,watch:s})=>{i(t);const a=r?{...r}:{};return e.useEffect((()=>{const e=sessionStorage.getItem(u);if(!s)return void(e&&d("remove"));if(!e){if(!a.styleData)return void d("set",f);d("set",a.styleData)}const t=(e=>{const t=[];for(const s in n)t.push(o(s,(()=>{e({...r})})));return()=>{t.forEach((e=>e()))}})((e=>{e.styleData?d("set",e.styleData):d("set",f)}));return()=>{t(),e&&d("remove")}}),[a]),null},exports.StyledAtom=({fileNames:n=[],encap:r,fallback:s,onLoad:o,children:l})=>{if(0===n.length)return console.error("Some StyledAtom was rendered with empty fileNames","\n","✦styledAtom✦","\n"),s||l||null;const[c,i]=a("styleData"),u=e.useRef(!1),f=`✦${e.useId()}`,d=c?.[f]?.loaded??!1,m=r?t.jsx("div",{"atom-shell":f,className:`${n.join(" ")}${"string"==typeof r?` ${r}`:""}`,children:l}):l;return e.useEffect((()=>(i((e=>({...e,[f]:{...e?.[f],encap:r,fileNames:n}}))),()=>{i((e=>{if(!e)return null;const{[f]:t,...n}=e;return Object.keys(n).length?n:null})),o&&o(!1),u.current=!1})),[n,f,i]),e.useEffect((()=>{o&&d&&!u.current?(o(d),u.current=!0):d||(u.current=!1)}),[d,o]),l?d?m:s||null:null};
