import{r as l,W as f,j as e}from"./app-72c7a8f7.js";import{C as j,A as y}from"./container-ff20d3dc.js";import{I as w}from"./input-error-d9751bae.js";import{L as g}from"./label-75d6c5b5.js";import{I as D}from"./input-25202470.js";import{B as t}from"./button-6118e2ed.js";import{C,a as v,b,c as A,d as I}from"./card-71687476.js";import{D as N,a as E,b as F,c as S,d as U,e as k}from"./command-444c6842.js";import"./sheet-2aab3556.js";import"./react-icons.esm-823b1120.js";import"./icon-dfc3d485.js";import"./index-0c2cadc6.js";import"./Combination-a649eb29.js";import"./index-e9154084.js";import"./index-89ddeba4.js";import"./index-b66c8d7d.js";import"./index-655eb6d9.js";import"./use-toast-d3548382.js";import"./navigation-2f9a915e.js";import"./theme-toggle-86d2fbd1.js";import"./primary-link-40acf720.js";import"./separator-8bd9cdca.js";function B(){const[r,o]=l.useState(!1),a=l.useRef(),{data:d,setData:c,delete:m,processing:p,reset:n,errors:u}=f({password:""}),x=()=>{o(!0)},h=s=>{s.preventDefault(),m(route("danger.destroy"),{preserveScroll:!0,onSuccess:()=>i(),onError:()=>a.current.focus(),onFinish:()=>n()})},i=()=>{o(!1),n()};return e.jsx(j,{className:"lg:max-w-2xl",children:e.jsxs(C,{children:[e.jsxs(v,{children:[e.jsx(b,{children:"Delete Account"}),e.jsx(A,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsxs(I,{children:[e.jsx(t,{variant:"destructive",onClick:x,children:"Delete Account"}),e.jsx(N,{open:r,onOpenChange:o,children:e.jsxs(E,{children:[e.jsxs(F,{children:[e.jsx(S,{children:"Are you sure you want to delete your account?"}),e.jsx(U,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."})]}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(g,{htmlFor:"password",children:"Password"}),e.jsx(D,{id:"password",type:"password",name:"password",ref:a,value:d.password,onChange:s=>c("password",s.target.value),className:"mt-1",autoFocus:!0,placeholder:"Password"}),e.jsx(w,{message:u.password,className:"mt-2"})]}),e.jsxs(k,{className:"gap-x-2",children:[e.jsx(t,{type:"button",variant:"outline",onClick:i,children:"Cancel"}),e.jsx(t,{variant:"destructive",disabled:p,children:"Delete Account"})]})]})]})})]})]})})}B.layout=r=>e.jsx(y,{title:"Danger",children:r});export{B as default};