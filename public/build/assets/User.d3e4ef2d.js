import{r as x,a as e,j as r,H as u,d as g,g as w}from"./app.80d8e81d.js";import{F as b}from"./Front.ea22bede.js";import{_ as o}from"./Translate.dc83ae5b.js";import{P as v}from"./PrimaryButton.5a171063.js";import{Q as m}from"./react-toastify.esm.7b265dee.js";import{b as N}from"./index.esm.e84694d3.js";import y from"./ProfileTabs.2c5086ca.js";import k from"./SubscribePopup.0d0f312f.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./TextInput.506a6cb6.js";import"./TiersTab.55c53f5c.js";import"./Spinner.f3a189f1.js";import"./index.9703a9f9.js";import"./ScheduleTab.f54b483b.js";import"./ChannelVideos.0ca177f3.js";import"./react-tooltip.min.ef0162da.js";/* empty css                          */import"./SecondaryButton.dee4fabd.js";import"./SingleVideo.bbe5920e.js";import"./AuthenticatedLayout.133a6372.js";import"./index.esm.ed72aa7b.js";function X({user:s,streamUser:t,userFollowsChannel:c,userIsSubscribed:n}){const[d,p]=x.exports.useState("Videos"),h={backgroundImage:`url(${t.cover_picture})`},f=()=>{s?g.get(route("follow",{user:t.id})).then(i=>{console.log(w.Inertia.reload({only:["userFollowsChannel","streamUser"]}))}).catch(i=>{var a,l;return m.error((l=(a=i.response)==null?void 0:a.data)==null?void 0:l.error)}):m.error(o("Please login to follow this channel"))};return e(b,{children:r("div",{className:"-mt-[60px] max-w-5xl mx-auto",children:[r(u,{title:o(":channelName's channel (:handle)",{channelName:t.name,handle:`@${t.username}`}),children:[e("meta",{property:"og:title",content:"The Rock"}),e("meta",{property:"og:url",content:"https://www.imdb.com/title/tt0117500/"}),e("meta",{property:"og:image",content:"https://ia.media-imdb.com/images/rock.jpg"})]}),e("div",{className:"coverPic",style:h}),r("div",{className:"flex items-center flex-wrap justify-between bg-white dark:bg-zinc-900 text-gray-700 -mt-2 rounded-b-lg px-3 pt-5 pb-4 shadow",children:[r("div",{className:"flex items-center",children:[e("div",{className:"relative",children:e("div",{className:"border-4 border-white shadow rounded-full -mt-[63px] z-10 ml-2",children:e("img",{src:t.profile_picture,alt:"",className:"cursor-pointer rounded-full w-24 h-24 dark:border-red-100"})})}),r("div",{className:"ml-3 pb-2",children:[e("h3",{className:"dark:text-white text-xl lg:text-2xl text-indigo-700 font-bold",children:t.name}),r("p",{className:"text-indigo-800 dark:text-white",children:["@",t.username]})]})]}),r("div",{className:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2",children:[r(v,{onClick:i=>f(),children:[e(N,{className:"mr-1"}),c?o("Unfollow"):o("Follow")]}),e(k,{user:t,userIsSubscribed:n})]})]}),e(y,{streamUser:t,activeTab:d,setActiveTab:p})]})})}export{X as default};
