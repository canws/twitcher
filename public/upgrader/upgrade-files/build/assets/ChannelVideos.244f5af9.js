import{r as o,d as b,j as t,a as r,L as u,F as y}from"./app.70eb7c5f.js";import{_ as s}from"./Translate.dc83ae5b.js";import{Q as k}from"./react-toastify.esm.b9d392e3.js";import{S}from"./Spinner.4065475d.js";import{a as _}from"./index.esm.b743b834.js";import{K as C}from"./react-tooltip.esm.min.cb5a3799.js";/* empty css                      */import{a as M}from"./index.esm.dc99be0f.js";import{S as g}from"./SecondaryButton.d42a89f3.js";import{M as V}from"./Modal.ea61d8f0.js";import $ from"./SingleVideo.ba5482de.js";import"./iconBase.19c775b5.js";import"./transition.a700d2e8.js";import"./AuthenticatedLayout.37d9e013.js";import"./Front.5dab1473.js";import"./index.esm.b47aa8e1.js";import"./TextInput.9faad775.js";import"./index.esm.80e20a61.js";import"./index.esm.44a5a5e5.js";import"./PrimaryButton.09893f04.js";function X({streamUser:d}){const[i,f]=o.exports.useState({}),[x,N]=o.exports.useState(!0),[n,v]=o.exports.useState(!1),[w,c]=o.exports.useState(!1),m=(e,a)=>{e.preventDefault(),v(a),c(!0)};o.exports.useEffect(()=>{l(1)},[]);const l=e=>{b.get(`${route("channel.videos",{user:d.id})}?page=${e}`).then(a=>{f(a.data),N(!1)}).catch(a=>{var p,h;return k.error((h=(p=a.response)==null?void 0:p.data)==null?void 0:h.message)})};return t("div",{className:"mt-5",children:[x&&r("div",{className:"my-3",children:r(S,{})}),r(V,{show:w,onClose:e=>c(!1),children:n&&r($,{video:n,inModal:!0})}),r("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",children:i.data&&i.data.map(e=>t("div",{className:"mb-4 pb-2 w-full bg-white dark:bg-zinc-900 shadow rounded-lg",children:[t("div",{className:"relative",children:[r("button",{onClick:a=>m(a,e),children:r("img",{src:e.thumbnail,className:"rounded-t-lg mb-3 ",alt:""})}),r("div",{className:"absolute top-5 left-0 bg-indigo-800 text-white font-bold text-sm uppercase rounded-tr rounded-br px-2 py-1",children:e.price<1?s("Free"):t("div",{className:"flex items-center",children:[r(_,{className:"h-4 w-4 mr-1"}),e.price]})})]}),t("div",{className:"inline-flex items-start px-2",children:[r("div",{className:"w-10 flex-shrink-0 mr-2",children:r(u,{href:route("channel",{user:e.streamer.username}),children:r("img",{src:e.streamer.profile_picture,className:"w-10 h-10 rounded-full"})})}),t("div",{children:[r("div",{className:"h-5 overflow-hidden",children:r("a",{"data-tooltip-content":e.title,"data-tooltip-id":`tooltip-btn-${e.id}`,onClick:a=>m(a,e),className:"cursor-pointer font-semibold inline  dark:text-gray-100 hover:text-gray-800 text-gray-600 dark:hover:text-gray-400",children:e.title})}),t("div",{className:"mt-1.5 flex items-center text-xs text-gray-500 dark:text-gray-200",children:[t("div",{children:[t(u,{href:route("channel",{user:e.streamer.username}),children:["@",e.streamer.username]}),r(C,{anchorSelect:"a"})]}),t("div",{className:"ml-2 inline-flex items-center",children:[r(M,{className:"w-4 h-4 mr-0.5"}),e.views===1?s("1 view"):s(":viewsCount views",{viewsCount:e.views})]})]})]})]})]},`video-${e.id}`))}),i.total>9&&t(y,{children:[r(g,{className:"mr-2",processing:!i.prev_page_url,onClick:e=>l(i.current_page-1),children:s("Prev")}),r(g,{processing:!i.next_page_url,onClick:e=>l(i.current_page+1),children:s("Next")})]}),i.total===0&&r("div",{className:"dark:text-white dark:bg-zinc-900 rounded-lg px-3 py-5 text-gray-600 bg-white shadow",children:s("No videos uploaded by :streamer",{streamer:d.username})})]})}export{X as default};
