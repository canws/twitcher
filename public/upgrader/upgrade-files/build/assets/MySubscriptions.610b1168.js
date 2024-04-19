import{_ as i}from"./Translate.dc83ae5b.js";import{b as p,j as r,a as e,H as g,F as n,L as s,f as c}from"./app.70eb7c5f.js";import{A as u}from"./AuthenticatedLayout.37d9e013.js";import{F as f}from"./index.esm.0e26725f.js";import{g as y}from"./index.esm.b743b834.js";import{G as b}from"./index.esm.70b0eca2.js";import{S as o}from"./SecondaryButton.d42a89f3.js";import v from"./AccountNavi.ce160f74.js";import"./Front.5dab1473.js";import"./index.esm.dc99be0f.js";import"./iconBase.19c775b5.js";import"./index.esm.b47aa8e1.js";import"./transition.a700d2e8.js";import"./Modal.ea61d8f0.js";import"./react-toastify.esm.b9d392e3.js";import"./TextInput.9faad775.js";import"./index.esm.80e20a61.js";function B({subs:t}){var m;const{auth:l}=p().props;console.log(t);const d="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",h="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return r(u,{children:[e(g,{title:i("My Subscriptions")}),r("div",{className:"lg:flex lg:space-x-10",children:[e(v,{active:"my-subscriptions"}),r("div",{className:"ml-0 w-full",children:[l.user.is_streamer==="yes"&&r(n,{children:[e(s,{href:route("mySubscribers",{user:l.user.username}),className:h,children:i("My Subscribers")}),e(s,{href:route("mySubscriptions"),className:d,children:i("My Subscriptions")})]}),r("div",{className:"mt-5 p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg",children:[e("header",{children:r("div",{className:"flex items-start space-x-3",children:[e("div",{children:e(y,{className:"w-8 text-gray-600 h-8 dark:text-white"})}),r("div",{children:[r("h2",{className:"text-lg md:text-xl font-medium text-gray-600 dark:text-gray-100",children:[i("My Subscriptions")," (",t.total,")"]}),e("p",{className:"mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400",children:i("These are the channels you are subscribed to")})]})]})}),e("hr",{className:"my-5"}),t.total===0&&r("div",{className:"text-xl dark:text-white text-gray-700 flex items-center space-x-4",children:[e(f,{className:"w-10 h-10"}),e("div",{children:i("You haven't subscribed to any channel.")})]}),e("div",{className:"flex flex-col md:flex-row flex-wrap items-center",children:(m=t.data)==null?void 0:m.map((a,x)=>r("div",{className:"flex items-center space-x-2  mr-5 mb-5",children:[e("div",{children:e(s,{href:route("channel",{user:a.streamer.username}),children:e("img",{src:a.streamer.profile_picture,alt:"",className:"rounded-full h-14 border-zinc-200 dark:border-indigo-200 border"})})}),r("div",{children:[e(s,{className:"block text-gray-600 dark:text-gray-300 text-lg font-semibold mt-1",href:route("channel",{user:a.streamer.username}),children:a.streamer.name}),r(s,{className:"block text-sky-500 hover:text-sky-700 font-semibold text-sm",href:route("channel",{user:a.streamer.username}),children:["@",a.streamer.username]}),r("span",{className:"mt-1 inline-flex items-center space-x-2 rounded px-1.5 py-0.5 bg-gray-500 text-gray-100 text-xs",children:[e(b,{className:"dark:text-white mr-1"}),a.expires_human]})]})]},x))}),t.last_page>1&&r(n,{children:[e("hr",{className:"my-5"}),e("div",{className:"flex text-gray-600 dark:text-gray-100 my-3 text-sm",children:i("Page: :pageNumber of :lastPage",{pageNumber:t.current_page,lastPage:t.last_page})}),e(o,{processing:!t.prev_page_url,className:"mr-3",onClick:a=>c.Inertia.visit(t.prev_page_url),children:i("Previous")}),e(o,{processing:!t.next_page_url,onClick:a=>c.Inertia.visit(t.next_page_url),children:i("Next")})]})]})]})]})]})}export{B as default};