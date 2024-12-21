import{r as f,j as e,a as g,d as x}from"./app-da3c31da.js";import{A as w}from"./app-layout-d1ec0bd6.js";import{C as v,a as k,b as C,d as p}from"./card-f958e454.js";import{u as y,S,a as N,b as T,c as _,d as r,T as I,e as W,f as u,g as n,h as c,i as E,j as l}from"./sort-indicator-a90a335c.js";import{I as L}from"./input-8ee7f5e6.js";import{a as b}from"./icon-034eb62a.js";import"./separator-d3f1cf91.js";import"./index-c3487323.js";import"./menu-a6dadbc1.js";import"./transition-ea1bdf9f.js";import"./react-icons.esm-936fc70e.js";import"./index-4588f659.js";import"./Combination-3a2261df.js";import"./index-a18ce352.js";import"./index-862db04d.js";function H(o){const{data:h,meta:m,links:A}=o.websites,[i,a]=f.useState(o.state);y({route:route("websites.index"),values:i});const d=t=>{let s=(i==null?void 0:i.direction)??"asc";const j=(i==null?void 0:i.field)??"created_at";t===j&&(s=s==="asc"?"desc":"asc"),a({...i,field:t,direction:s})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Websites"}),e.jsxs(v,{children:[e.jsx(k,{children:e.jsx(C,{children:"Website"})}),e.jsxs(p,{children:[e.jsx("div",{className:"mb-6",children:e.jsx(x,{href:route("websites.create"),class:"mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800 ",children:"Create"})}),e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsxs(S,{value:i==null?void 0:i.limit,onValueChange:t=>a({...i,limit:t}),children:[e.jsx(N,{className:"w-[180px]",children:e.jsx(T,{placeholder:(i==null?void 0:i.limit)??10})}),e.jsxs(_,{children:[e.jsx(r,{value:"10",children:"10"}),e.jsx(r,{value:"25",children:"25"}),e.jsx(r,{value:"50",children:"50"}),e.jsx(r,{value:"75",children:"75"}),e.jsx(r,{value:"100",children:"100"})]})]}),e.jsx("div",{className:"w-72",children:e.jsx(L,{type:"text",value:i==null?void 0:i.search,onChange:t=>a(s=>({...s,search:t.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(I,{children:[e.jsx(W,{children:e.jsxs(u,{children:[e.jsx(n,{className:"w-[50px] text-center",children:"#"}),e.jsx(n,{onClick:()=>d("website_name"),children:e.jsx(c,{label:"Website Name",column:"website_name",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("website_link"),children:e.jsx(c,{label:"Website Link",column:"website_link",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("user_id"),children:e.jsx(c,{label:"User",column:"user_id",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("status"),children:e.jsx(c,{label:"Status",column:"status",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{})]})}),e.jsx(E,{children:h.length>0?e.jsx(e.Fragment,{children:h.map((t,s)=>e.jsxs(u,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:m.from+s}),e.jsx(l,{children:t.website_name}),e.jsx(l,{children:t.website_link}),e.jsx(l,{children:t.user.name}),e.jsx(l,{children:t.status}),e.jsxs(l,{children:[e.jsxs(x,{className:"inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:[e.jsx(b,{icon:"IconLogin2"})," Go Website"]}),e.jsxs(x,{className:"text-gray-900 inline-flex items-center bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",children:[e.jsx(b,{icon:"IconLogin2"})," Edit"]})]})]},s))}):e.jsx(u,{children:e.jsx(l,{colSpan:4,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"Empty Websites"})})})]})]})]})]})}H.layout=o=>e.jsx(w,{title:"Websites",children:o});export{H as default};