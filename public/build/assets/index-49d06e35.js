import{j as e}from"./app-11c02be1.js";import{A as n}from"./appnew-layout-0b51d62a.js";import"./button-2a95df86.js";import"./sheet-cc99365f.js";import"./index-afca1c36.js";import"./command-bb37f6fe.js";import"./separator-95e7eb02.js";import"./card-88589e03.js";import"./icon-7eab802c.js";import"./menu-6641ed4c.js";import"./transition-48cd07fa.js";import"./react-icons.esm-24414aaa.js";import"./index-5769adf9.js";import"./Combination-60f5c960.js";import"./index-750711b7.js";import"./index-ae75c7b6.js";import"./index-9d57b780.js";function o({auth:t}){const s=[{name:"Balance",initials:"BA",href:"#",members:"Rp. 10.000",bgColor:"bg-blue-600"}];function i(...r){return r.filter(Boolean).join(" ")}return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-sm font-medium text-gray-500",children:"Dashboard"}),e.jsx("ul",{role:"list",className:"mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4",children:s.map(r=>e.jsxs("li",{className:"col-span-1 flex rounded-md shadow-sm",children:[e.jsx("div",{className:i(r.bgColor,"flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"),children:r.initials}),e.jsxs("div",{className:"flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white",children:[e.jsxs("div",{className:"flex-1 truncate px-4 py-2 text-sm",children:[e.jsx("a",{href:r.href,className:"font-medium text-gray-900 hover:text-gray-600",children:r.name}),e.jsx("p",{className:"text-gray-500",children:r.members})]}),e.jsx("div",{className:"flex-shrink-0 pr-2",children:e.jsx("button",{type:"button",className:"inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:e.jsx("span",{className:"sr-only",children:"Open options"})})})]})]},r.name))})]})}o.layout=t=>e.jsx(n,{title:"Dashboard",children:t});export{o as default};