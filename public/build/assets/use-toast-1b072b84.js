import{r as c}from"./app-b625d7c5.js";const S=1,f=1e6;let i=0;function p(){return i=(i+1)%Number.MAX_VALUE,i.toString()}const T=new Map,d=t=>{if(T.has(t))return;const s=setTimeout(()=>{T.delete(t),n({type:"REMOVE_TOAST",toastId:t})},f);T.set(t,s)},A=(t,s)=>{switch(s.type){case"ADD_TOAST":return{...t,toasts:[s.toast,...t.toasts].slice(0,S)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(e=>e.id===s.toast.id?{...e,...s.toast}:e)};case"DISMISS_TOAST":{const{toastId:e}=s;return e?d(e):t.toasts.forEach(o=>{d(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===e||e===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return s.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(e=>e.id!==s.toastId)}}},r=[];let u={toasts:[]};function n(t){u=A(u,t),r.forEach(s=>{s(u)})}function O({...t}){const s=p(),e=a=>n({type:"UPDATE_TOAST",toast:{...a,id:s}}),o=()=>n({type:"DISMISS_TOAST",toastId:s});return n({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:a=>{a||o()}}}),{id:s,dismiss:o,update:e}}function m(){const[t,s]=c.useState(u);return c.useEffect(()=>(r.push(s),()=>{const e=r.indexOf(s);e>-1&&r.splice(e,1)}),[t]),{...t,toast:O,dismiss:e=>n({type:"DISMISS_TOAST",toastId:e})}}export{O as t,m as u};
