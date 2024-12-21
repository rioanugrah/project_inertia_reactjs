import{r as u,j as e,d as v}from"./app-b625d7c5.js";import{C as b,A as C}from"./container-65406788.js";import{C as _,a as g,b as p,c as N,d as S,e as y}from"./card-4f45c18c.js";import{u as T,S as k,a as w,b as A,c as I,d as c,T as E,e as F,f as x,g as n,h as r,i as H,j as l}from"./sort-indicator-7fb34964.js";import{A as P,f as U,g as D}from"./command-2f7a1f7d.js";import{UserListOptions as L}from"./user-list-options-d67fa3e0.js";import{S as R}from"./simple-pagination-a3ee48b9.js";import{I as V}from"./input-96a4a7e9.js";import"./button-da43fccd.js";import"./icon-9b477ef0.js";import"./sheet-e216aeac.js";import"./react-icons.esm-0c7924d5.js";import"./index-fb8a9360.js";import"./Combination-7b688e4a.js";import"./index-02274f9b.js";import"./index-2decf471.js";import"./index-a854fb84.js";import"./index-fb3762eb.js";import"./use-toast-1b072b84.js";import"./navigation-465ad867.js";import"./theme-toggle-2c3f4c18.js";import"./primary-link-c3e55527.js";import"./separator-76d800b1.js";import"./index-9fd4d607.js";function B(o){const{data:j,meta:h,links:m}=o.users,[i,a]=u.useState(o.state);T({route:route("users.index"),values:i,only:["users"]});const d=t=>{let s=(i==null?void 0:i.direction)??"asc";const f=(i==null?void 0:i.field)??"created_at";t===f&&(s=s==="asc"?"desc":"asc"),a({...i,field:t,direction:s})};return e.jsx(b,{className:"lg:mx-auto lg:max-w-5xl",children:e.jsxs(_,{children:[e.jsxs(g,{children:[e.jsx(p,{children:"Users"}),e.jsx(N,{children:"The list of the registered users."})]}),e.jsxs(S,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("div",{children:e.jsxs(k,{value:i==null?void 0:i.limit,onValueChange:t=>a({...i,limit:t}),children:[e.jsx(w,{className:"w-[180px]",children:e.jsx(A,{placeholder:(i==null?void 0:i.limit)??10})}),e.jsxs(I,{children:[e.jsx(c,{value:"10",children:"10"}),e.jsx(c,{value:"25",children:"25"}),e.jsx(c,{value:"50",children:"50"}),e.jsx(c,{value:"75",children:"75"}),e.jsx(c,{value:"100",children:"100"})]})]})}),e.jsx("div",{className:"w-72",children:e.jsx(V,{type:"text",value:i==null?void 0:i.search,onChange:t=>a(s=>({...s,search:t.target.value})),placeholder:"Pencarian..."})})]}),e.jsxs(E,{children:[e.jsx(F,{children:e.jsxs(x,{children:[e.jsx(n,{className:"w-[50px] text-center",children:"#"}),e.jsx(n,{onClick:()=>d("name"),children:e.jsx(r,{label:"name",column:"name",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("username"),children:e.jsx(r,{label:"username",column:"username",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("email_verified_at"),children:e.jsx(r,{label:"verified",column:"email_verified_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("created_at"),children:e.jsx(r,{label:"joined",column:"created_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("updated_at"),children:e.jsx(r,{label:"updated",column:"updated_at",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{onClick:()=>d("posts_count"),children:e.jsx(r,{label:"posts",column:"posts_count",field:i==null?void 0:i.field,direction:i==null?void 0:i.direction})}),e.jsx(n,{})]})}),e.jsx(H,{children:j.length>0?e.jsx(e.Fragment,{children:j.map((t,s)=>e.jsxs(x,{children:[e.jsx(l,{className:"w-0 py-7 text-center",children:h.from+s}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center font-normal",children:[e.jsx("div",{className:"mr-3 shrink-0",children:e.jsxs(P,{children:[e.jsx(U,{src:t.avatar}),e.jsx(D,{children:t.acronym})]})}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(v,{href:route("users.show",t),children:t.name})}),e.jsx("div",{className:"text-muted-foreground",children:t.email})]})]})}),e.jsx(l,{children:t.username}),e.jsx(l,{className:t.email_verified_at=="Email not verified"?"font-medium text-destructive":"",children:t.email_verified_at}),e.jsx(l,{children:t.created_at}),e.jsx(l,{children:t.updated_at}),e.jsx(l,{children:t.posts_count}),e.jsx(l,{children:e.jsx("div",{className:"flex justify-end",children:e.jsx(L,{user:t})})})]},s))}):e.jsx(x,{children:e.jsx(l,{colSpan:7,className:"animate-pulse py-5 text-center text-base font-semibold text-destructive",children:"No users."})})})]})]}),e.jsx(y,{className:"flex items-center justify-between pt-6",children:e.jsx(R,{links:m,meta:h})})]})})}B.layout=o=>e.jsx(C,{title:"Users",children:o});export{B as default};