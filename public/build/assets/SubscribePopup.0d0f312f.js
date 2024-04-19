import{M as N}from"./Modal.4f44b591.js";import{r as a,j as t,F as S,a as r,g as v,L as w,d as y}from"./app.80d8e81d.js";import{S as m}from"./SecondaryButton.dee4fabd.js";import{_ as s}from"./Translate.dc83ae5b.js";import{c as o}from"./index.esm.e84694d3.js";import{Q as k}from"./react-toastify.esm.7b265dee.js";import{S as T}from"./Spinner.f3a189f1.js";import{n as _}from"./index.9703a9f9.js";import{a as M}from"./index.esm.d0968a32.js";import{c as j}from"./index.esm.f8f1cf9b.js";import"./transition.0d0861ac.js";import"./iconBase.455a4d09.js";function R({user:i,userIsSubscribed:p}){const[h,n]=a.exports.useState(!1),[l,u]=a.exports.useState([{}]),[b,x]=a.exports.useState(!0),f=()=>{y.get(route("streaming.getTiers",{user:i.id})).then(e=>{u(e.data),x(!1)}).catch(e=>{var d,c;return k.error((c=(d=e.response)==null?void 0:d.data)==null?void 0:c.message)})},g=e=>{e.preventDefault(),n(!0),f()};return t(S,{children:[p?t(m,{onClick:e=>v.Inertia.visit(route("mySubscriptions")),children:[r(o,{className:"mr-1"}),s("Subscriptions")]}):t(m,{onClick:e=>g(e),children:[r(o,{className:"mr-1"}),s("Subscribe")]}),r(N,{show:h,onClose:e=>n(!1),maxWidth:"xs",children:t("div",{className:"text-center bg-white",children:[t("div",{className:"relative",children:[r("img",{src:i.cover_picture,alt:"",className:"h-24 rounded-tr rounded-tl w-full"}),r("div",{className:"absolute top-5 left-0 bg-indigo-800 text-white font-bold text-sm uppercase rounded-tr rounded-br px-2 py-1",children:s("Select Tier")})]}),r("div",{className:"mx-auto border-2 border-white bg-white  shadow rounded-full mt-[-50px] w-20 h-20 z-10 relative",children:r("img",{src:i.profile_picture,alt:"",className:"w-full rounded-full"})}),r("center",{children:b&&r(T,{})}),t("div",{className:"py-3",children:[l.length===0&&s("Streamer did not set any membership options yet."),l.map(e=>t("div",{className:"mb-4",children:[r("h3",{className:"text-indigo-800 text-lg",children:e.tier_name}),t("span",{className:"text-indigo-800 text-sm px-1.5 py-1 rounded font-bold",children:[r(M,{className:"h-4 w-4 inline-flex mr-1 mb-1"}),s(":tierPrice Tokens / Month",{tierPrice:e.price})]}),r("div",{className:"text-gray-600 mt-1 px-2",children:_(e.perks)}),t(w,{href:route("subscribe",{channel:i.username,tier:e.id||123}),className:"py-1 text-sm px-3 mt-2 inline-flex border-2 rounded-md border-gray-700 text-gray-700 items-center hover:border-indigo-600 hover:text-indigo-600",children:[r(o,{className:"mr-2"}),r("span",{children:s("Subscribe")}),r(j,{className:"ml-1"})]})]},`tier-${e.id}`))]})]})})]})}export{R as default};
