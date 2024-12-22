import{r as g,j as e,a as b,d as a}from"./app-7a42c9b1.js";import{C as p,a as v,b as w,d as y,e as C}from"./card-b22bd3f0.js";import{u as S,S as k,a as T,b as N,c as P,d as r,T as I,e as E,f as c,g as d,h,i as _,j as l}from"./sort-indicator-37950836.js";import{I as F}from"./input-98a44f4b.js";import{S as H}from"./simple-pagination-a489b2fc.js";import{A}from"./app-layout-5f0d493d.js";import"./icon-068d9c95.js";import"./react-icons.esm-1a0fb13d.js";import"./index-e66a43d7.js";import"./Combination-ef88fa00.js";import"./index-9d4ec614.js";import"./index-db73089c.js";import"./index-5550100f.js";import"./button-6dd32236.js";import"./transition-7142f509.js";function D(n){const{data:x,meta:m,links:j}=n.permissions,[s,o]=g.useState(n.state);S({route:route("permissions.index"),values:s});const u=i=>{let t=(s==null?void 0:s.direction)??"asc";const f=(s==null?void 0:s.field)??"created_at";i===f&&(t=t==="asc"?"desc":"asc"),o({...s,field:i,direction:t})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Permissions"}),e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(w,{children:"Permissions"})}),e.jsxs(y,{children:[e.jsx("div",{className:"mb-6",children:e.jsx(a,{href:route("permissions.create"),class:"mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 ",children:"Create"})}),e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(k,{value:s==null?void 0:s.limit,onValueChange:i=>o({...s,limit:i}),children:[e.jsx(T,{className:"w-[180px]",children:e.jsx(N,{placeholder:(s==null?void 0:s.limit)??10})}),e.jsxs(P,{children:[e.jsx(r,{value:"10",children:"10"}),e.jsx(r,{value:"25",children:"25"}),e.jsx(r,{value:"50",children:"50"}),e.jsx(r,{value:"75",children:"75"}),e.jsx(r,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(F,{type:"text",value:s==null?void 0:s.search,onChange:i=>o(t=>({...t,search:i.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(I,{children:[e.jsx(E,{children:e.jsxs(c,{children:[e.jsx(d,{className:"w-[50px] text-center",children:"#"}),e.jsx(d,{onClick:()=>u("name"),children:e.jsx(h,{label:"name",column:"name",field:s==null?void 0:s.field,direction:s==null?void 0:s.direction})}),e.jsx(d,{onClick:()=>u("guard_name"),children:e.jsx(h,{label:"guard name",column:"guard_name",field:s==null?void 0:s.field,direction:s==null?void 0:s.direction})}),e.jsx(d,{})]})}),e.jsx(_,{children:x.length>0?e.jsx(e.Fragment,{children:x.map((i,t)=>e.jsxs(c,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:m.from+t}),e.jsx(l,{children:i.name}),e.jsx(l,{children:i.guard_name}),e.jsxs(l,{children:[e.jsx(a,{href:route("permissions.edit",[i.id]),class:"focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900",children:"Edit"}),e.jsx(a,{as:"button",method:"delete",href:route("permissions.destroy",[i.id]),class:"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",children:"Delete"})]})]},t))}):e.jsx(c,{children:e.jsx(l,{colSpan:3,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"Empty Permissions"})})})]})]}),e.jsx(C,{className:"flex items-center justify-between pt-6",children:e.jsx(H,{links:j,meta:m})})]})]})}D.layout=n=>e.jsx(A,{title:"Permissions",children:n});export{D as default};