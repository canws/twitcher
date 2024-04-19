import{_ as a}from"./Translate.dc83ae5b.js";import{b as n,j as r,a as e,H as c,L as l}from"./app.80d8e81d.js";import{A as h}from"./AuthenticatedLayout.133a6372.js";import{F as x}from"./index.esm.6b590e46.js";import{b as f}from"./index.esm.e84694d3.js";import p from"./AccountNavi.65a2c074.js";import"./Front.ea22bede.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./react-toastify.esm.7b265dee.js";import"./TextInput.506a6cb6.js";function $({followers:s}){const{auth:i}=n().props,o="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",m="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return r(h,{children:[e(c,{title:a("My Followers")}),r("div",{className:"lg:flex lg:space-x-10",children:[e(p,{active:"followers"}),r("div",{className:"w-full",children:[e(l,{href:route("channel.followers",{user:i.user.username}),className:o,children:a("Followers")}),e(l,{href:route("profile.followings"),className:m,children:a("Following")}),r("div",{className:"mt-5 p-4 sm:p-8 bg-white w-full dark:bg-zinc-900 shadow sm:rounded-lg",children:[e("header",{children:r("div",{className:"flex items-start space-x-3",children:[e("div",{children:e(f,{className:"w-8 h-8 text-gray-600 dark:text-white"})}),r("div",{children:[r("h2",{className:"text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100",children:[a("My Followers")," (",s.length,")"]}),e("p",{className:"mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400",children:a("These are the users that follow your channel")})]})]})}),e("hr",{className:"my-5"}),s.length===0&&r("div",{className:"text-xl dark:text-white text-gray-700 flex items-center space-x-4",children:[e(x,{className:"w-10 h-10"}),e("div",{children:a("No one is following you yet")})]}),e("div",{className:"flex flex-col md:flex-row flex-wrap md:items-center",children:s.map((t,d)=>r("div",{className:"flex items-center space-x-2  mr-5 mb-5",children:[e("div",{children:e(l,{href:`${t.is_streamer==="yes"?route("channel",{user:t.username}):""}`,children:e("img",{src:t.profile_picture,alt:"",className:"rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"})})}),r("div",{children:[e(l,{className:"block text-gray-600 dark:text-gray-300 text-lg font-semibold mt-1",href:`${t.is_streamer==="yes"?route("channel",{user:t.username}):""}`,children:t.name}),r(l,{className:"block text-sky-500 hover:text-sky-700 font-semibold text-sm",href:`${t.is_streamer==="yes"?route("channel",{user:t.username}):""}`,children:["@",t.username]})]})]},d))})]})]})]})]})}export{$ as default};