import{j as e,d as m,r as l,a as u}from"./app-b625d7c5.js";import{B as p}from"./button-da43fccd.js";import{T as h,a as j,b as g,c as f,d as N,e as S,S as v,f as b}from"./sheet-e216aeac.js";import{u as C}from"./use-toast-1b072b84.js";import{b as y,a,c as T}from"./icon-9b477ef0.js";import{A as k,R as I,N as w}from"./navigation-465ad867.js";import{P as n}from"./primary-link-c3e55527.js";import{S as d}from"./separator-76d800b1.js";function L(){const{toasts:r}=C();return e.jsxs(h,{children:[r.map(function({id:s,title:o,description:t,action:i,...c}){return e.jsxs(j,{...c,children:[e.jsxs("div",{className:"flex items-start gap-x-2",children:[e.jsx(y,{className:"h-6 w-6 stroke-[1.2] text-green-500"}),e.jsxs("div",{className:"grid gap-x-2",children:[o&&e.jsx(g,{children:o}),t&&e.jsx(f,{children:t})]})]}),i,e.jsx(N,{})]},s)}),e.jsx(S,{})]})}function x({setOpen:r}){const s=()=>{r(!1)};return e.jsxs("ul",{className:"space-y-3 px-2 py-5 lg:px-4",children:[e.jsx("li",{children:e.jsxs(n,{onSuccess:s,href:route("dashboard"),active:route().current("dashboard"),className:"flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]",children:[e.jsx(a,{icon:"IconChartPie3"}),"Dashboard"]})}),e.jsx("li",{children:e.jsxs(n,{onSuccess:s,href:route("users.index"),active:route().current("users.*"),className:"flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]",children:[e.jsx(a,{icon:"IconUsersGroup"}),"Users"]})}),e.jsx(d,{className:"!my-4"}),e.jsx("li",{children:e.jsxs(n,{onSuccess:s,href:route("profile.index"),active:route().current("profile.*"),className:"flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]",children:[e.jsx(a,{icon:"IconSettings"}),"Settings"]})}),e.jsx("li",{children:e.jsxs(n,{onSuccess:s,href:route("security.index"),active:route().current("security.*"),className:"flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem]",children:[e.jsx(a,{icon:"IconShieldLock"}),"Security"]})}),e.jsx("li",{children:e.jsxs(n,{onSuccess:s,href:route("danger.index"),isDanger:!0,active:route().current("danger.*"),className:"flex items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem] normal-case hover:text-destructive",children:[e.jsx(a,{icon:"IconAlertTriangle"}),"Danger zone"]})}),e.jsx(d,{className:"!my-4"}),e.jsx("li",{children:e.jsxs(n,{onSuccess:s,as:"button",method:"post",href:route("logout"),className:"flex w-full items-center gap-x-3.5 rounded-lg p-2 text-[0.920rem]/[1.35rem] normal-case",children:[e.jsx(a,{icon:"IconLogout"}),"Log out"]})})]})}function P({open:r,setOpen:s}){return e.jsx(v,{open:r,onOpenChange:s,children:e.jsxs(b,{className:"w-[90%]",side:"left",children:[e.jsx(m,{className:"mb-8 block",href:"/",children:e.jsx(k,{className:"mr-4 h-8 w-auto fill-foreground"})}),e.jsx(x,{setOpen:s})]})})}function A(){return e.jsx("aside",{className:"w-full px-3 pt-[6.5rem]",children:e.jsx(x,{})})}function z({title:r,children:s}){const[o,t]=l.useState(!1),[i,c]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:r}),e.jsxs("main",{children:[e.jsx(I,{setOpenCommandPalette:t}),e.jsx(w,{openCommandPalette:o,setOpenCommandPalette:t}),e.jsx(P,{open:i,setOpen:c}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4",children:[e.jsx("div",{className:"col-span-1 hidden min-h-screen lg:block",children:e.jsx(A,{})}),e.jsxs("div",{className:"col-span-full lg:col-span-3",children:[e.jsx("div",{className:"block px-2 pt-24 lg:hidden",children:e.jsxs(p,{variant:"secondary",className:"gap-x-1 border border-border",onClick:()=>c(!0),children:[e.jsx(a,{icon:"IconAlignBoxLeftMiddleFilled",className:"h-5 w-5 stroke-[1.2]"}),"Side Menu"]})}),s]})]})]}),e.jsx(L,{})]})}function G({className:r,children:s}){return e.jsx("div",{className:T("space-y-6 px-2 pb-6 pt-[1rem] lg:px-0 lg:pr-5 lg:pt-[7.5rem]",r),children:s})}export{z as A,G as C};
