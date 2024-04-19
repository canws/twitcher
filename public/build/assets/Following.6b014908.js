import{_ as t}from"./Translate.dc83ae5b.js";import{b as f,j as l,a as e,H as g,F as p,L as a,d as w,g as b}from"./app.80d8e81d.js";import{A as u}from"./AuthenticatedLayout.133a6372.js";import{F as v}from"./index.esm.6b590e46.js";import{e as y}from"./index.esm.f8f1cf9b.js";import{Q as N}from"./react-toastify.esm.7b265dee.js";import k from"./AccountNavi.65a2c074.js";import"./Front.ea22bede.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./TextInput.506a6cb6.js";import"./index.esm.e84694d3.js";function P({following:s}){const{auth:n}=f().props,c=(r,i)=>{r.preventDefault(),w.get(route("follow",{user:i})).then(o=>{console.log(b.Inertia.reload())}).catch(o=>{var m,d;return N.error((d=(m=o.response)==null?void 0:m.data)==null?void 0:d.error)})},h="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",x="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return l(u,{children:[e(g,{title:t("Following")}),l("div",{className:"lg:flex lg:space-x-10",children:[e(k,{active:"following"}),l("div",{className:"w-full",children:[n.user.is_streamer==="yes"&&l(p,{children:[e(a,{href:route("channel.followers",{user:n.user.username}),className:x,children:t("Followers")}),e(a,{href:route("profile.followings"),className:h,children:t("Following")})]}),l("div",{className:"mt-5 p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg",children:[e("header",{children:l("div",{className:"flex items-start space-x-3",children:[e("div",{children:e(y,{className:"w-8 h-8 text-gray-600 dark:text-white"})}),l("div",{children:[l("h2",{className:"text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100",children:[t("My Followings")," (",s.length,")"]}),e("p",{className:"mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400",children:t("These are the channels that you are following")})]})]})}),e("hr",{className:"my-5"}),s.length===0&&l("div",{className:"text-xl dark:text-white text-gray-700 flex items-center space-x-4",children:[e(v,{className:"w-10 h-10"}),e("div",{children:t("You are not following any channel yet")})]}),e("div",{className:"flex flex-col md:flex-row flex-wrap md:items-center",children:s.map((r,i)=>l("div",{className:"flex items-center space-x-2  mr-5 mb-5",children:[e("div",{children:e(a,{href:`${r.followable.is_streamer==="yes"?route("channel",{user:r.followable.username}):""}`,children:e("img",{src:r.followable.profile_picture,alt:"",className:"rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"})})}),l("div",{children:[e(a,{className:"block text-gray-600 dark:text-gray-300 text-lg font-semibold mt-1",href:`${r.followable.is_streamer==="yes"?route("channel",{user:r.followable.username}):""}`,children:r.followable.name}),l(a,{className:"block text-sky-500 hover:text-sky-700 font-semibold text-sm",href:`${r.followable.is_streamer==="yes"?route("channel",{user:r.followable.username}):""}`,children:["@",r.followable.username]}),e("button",{className:"text-xs text-rose-600 hover:text-rose-800",onClick:o=>c(o,r.followable.id),children:t("Unfollow")})]})]},i))})]})]})]})]})}export{P as default};
