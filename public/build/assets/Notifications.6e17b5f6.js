import{u as p,b as k,j as t,a as e,H as N,L as s,F as h}from"./app.80d8e81d.js";import{A as y}from"./AuthenticatedLayout.133a6372.js";import{_ as r}from"./Translate.dc83ae5b.js";import{e as i,f as c}from"./index.esm.df849484.js";import{f as v}from"./index.esm.f8f1cf9b.js";import{G as b}from"./iconBase.455a4d09.js";import{n as g}from"./index.9703a9f9.js";import{f as w}from"./index.esm.e84694d3.js";import A from"./AccountNavi.65a2c074.js";import"./Front.ea22bede.js";import"./index.esm.d0968a32.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./react-toastify.esm.7b265dee.js";import"./TextInput.506a6cb6.js";function _(l){return b({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.341 5.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.689 0.561 1.25 1.25 1.25h9.5c0.689 0 1.25-0.561 1.25-1.25v-7.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 4.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-9.5c-0.136 0-0.25-0.114-0.25-0.25v-11.5c0-0.135 0.114-0.25 0.25-0.25 0 0 5.749-0 5.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v7.75z"}},{tag:"path",attr:{d:"M9.421 0.659c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.604 0.43 1.109 1 1.225v-12.725c0-0.135 0.115-0.25 0.25-0.25h7.607c-0.151-0.124-0.297-0.238-0.437-0.341z"}}]})(l)}function G({notifications:l}){const{post:o,processing:j}=p(),{auth:m,currency_symbol:u}=k().props,d=a=>{o(route("notifications.markAsRead",{notification:a.id}))},f=()=>{o(route("notifications.markAllRead"))},x=({n:a})=>{switch(a.type){case"App\\Notifications\\PaymentRequestProcessed":return e(h,{children:t("div",{className:"flex justify-between",children:[t("div",{className:"flex-grow flex items-center",children:[e(w,{className:"mr-2 w-8 h-8 text-teal-500"}),r("Your payout request of :amount made on :date was processed!",{amount:u+""+a.data.amount,date:a.data.date})]}),e("div",{children:a.read_at===null?t("button",{onClick:n=>d(a),className:"inline-flex items-center space-x-3 text-sky-500 hover:text-sky-600",children:[e(i,{}),r("Mark as Read")]}):e(c,{})})]})});case"App\\Notifications\\NewFollower":return e(h,{children:t("div",{className:"flex justify-between",children:[t("div",{className:"flex items-center space-x-2",children:[e("div",{className:"flex-shrink-0",children:e("img",{src:a.data.profile_picture,alt:"",className:"rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"})}),t("div",{children:[t("span",{className:"text-sky-500",children:["@",a.data.username]}),e("br",{}),e("span",{className:"text-gray-600 dark:text-gray-100",children:r("just followed you")})]})]}),e("div",{children:a.read_at===null?t("button",{onClick:n=>d(a),className:"inline-flex items-center space-x-3 text-sky-500 hover:text-sky-600",children:[e(i,{}),r("Mark as Read")]}):e(c,{})})]})});case"App\\Notifications\\NewSubscriber":return t("div",{className:"flex flex-wrap justify-between",children:[t("div",{className:"flex items-center space-x-2",children:[e("div",{className:"flex-shrink-0",children:e(s,{href:`${a.data.isStreamer==="yes"?route("channel",{user:a.data.username}):""}`,children:e("img",{src:a.data.profilePicture,alt:"",className:"rounded-full h-14 w-14 border-zinc-200 dark:border-indigo-200 border"})})}),t("div",{children:[t(s,{href:`${a.data.isStreamer==="yes"?route("channel",{user:a.data.username}):""}`,className:"text-sky-500",children:["@",a.data.username]}),e("br",{}),e("span",{className:"text-gray-600 dark:text-gray-100",children:r("just subscribed to your tier :tierName for :tokensAmount tokens till :renewalDate",{tierName:a.data.tierName,tokensAmount:a.data.tokens,renewalDate:a.data.renewalDate})})]})]}),e("div",{children:a.read_at===null?t("button",{onClick:n=>d(a),className:"inline-flex items-center space-x-3 text-sky-500 hover:text-sky-600",children:[e(i,{}),r("Mark as Read")]}):e(c,{})})]});case"App\\Notifications\\ThanksNotification":return t("div",{className:"flex justify-between",children:[t("div",{className:"flex items-start space-x-2",children:[e("div",{className:"flex-shrink-0",children:e(s,{href:route("channel",{user:a.data.username}),children:e("img",{src:a.data.profile_picture,alt:"",className:"rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"})})}),t("div",{children:[t(s,{href:route("channel",{user:a.data.username}),className:"text-sky-500",children:["@",a.data.username]})," ",t("span",{className:"text-gray-700 dark:text-gray-100",children:[r("just thanked for your subscription"),","]}),e("br",{}),e("blockquote",{className:"italic text-gray-600 dark:text-gray-100",children:g(a.data.thanks_message)})]})]}),e("div",{children:a.read_at===null?t("button",{onClick:n=>d(a),className:"inline-flex items-center space-x-3 text-sky-500 hover:text-sky-600",children:[e(i,{}),r("Mark as Read")]}):e(c,{})})]});case"App\\Notifications\\NewVideoSale":return t("div",{className:"flex flex-wrap justify-between",children:[t("div",{className:"flex items-center space-x-2",children:[e("div",{className:"flex-shrink-0",children:e(s,{href:`${a.data.is_streamer==="yes"?route("channel",{user:a.data.username}):""}`,children:e("img",{src:a.data.profile_picture,alt:"",className:"rounded-full h-14 w-14 border-zinc-200 dark:border-indigo-200 border"})})}),t("div",{children:[t(s,{href:`${a.data.is_streamer==="yes"?route("channel",{user:a.data.username}):""}`,className:"text-sky-500",children:["@",a.data.username]}),e("br",{}),e("span",{className:"text-gray-600 dark:text-gray-100",children:r('just bought your video ":videoTitle" for :tokensAmount tokens',{videoTitle:a.data.video.title,tokensAmount:a.data.price})})]})]}),e("div",{children:a.read_at===null?t("button",{onClick:n=>d(a),className:"inline-flex items-center space-x-3 text-sky-500 hover:text-sky-600",children:[e(i,{}),r("Mark as Read")]}):e(c,{})})]});default:return`NOTIFICATION_TYPE: ${a.type}`}};return t(y,{auth:m,children:[e(N,{title:r("Notifications")}),t("div",{className:"lg:flex lg:space-x-10 w-full",children:[e(A,{active:"notifications"}),t("div",{className:"bg-white rounded-lg w-full shadow dark:bg-zinc-900 p-4 sm:p-8",children:[t("div",{className:"flex justify-between",children:[t("div",{className:"flex items-center space-x-2 flex-wrap",children:[e(v,{className:"w-8 h-8 text-gray-600 dark:text-gray-100"}),e("h2",{className:"text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100",children:r("Notifications")})]}),e("div",{children:l.data.length&&m.unreadNotifications>0&&t("button",{onClick:a=>f(),className:"inline-flex items-center space-x-3 border-2 border-sky-500 rounded-lg p-2 font-semibold text-sm text-sky-500 hover:text-sky-600 hover:border-sky-600",children:[e(i,{}),r("Mark All As Read")]})})]}),l.data.length===0&&t("div",{className:"mt-10 p-4 sm:p-8 bg-slate-50 dark:bg-zinc-900 shadow sm:rounded-lg text-gray-600 text-center dark:text-white",children:[e("center",{children:e(_,{className:"h-16 w-16 mb-3"})}),e("h3",{className:"text-xl",children:r("No notifications")})]}),l.data.map(a=>e("div",{className:`mt-10 px-4 py-2.5 bg-slate-50 dark:bg-zinc-900 sm:rounded-lg dark:text-white ${a.read_at?"":"border border-slate-200 dark:border-gray-700"}`,children:e(x,{n:a})},a.id))]})]})]})}export{G as default};