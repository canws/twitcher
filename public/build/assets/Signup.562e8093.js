import{b as s,r as m,a as e,j as t,L as o}from"./app.80d8e81d.js";import{F as c}from"./Front.ea22bede.js";import{_ as i}from"./Translate.dc83ae5b.js";import{Q as d}from"./react-toastify.esm.7b265dee.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./TextInput.506a6cb6.js";import"./index.esm.e84694d3.js";function z({props:l}){const a="/images/streamer-icon.png",n="/images/user-signup-icon.png",{flash:r}=s().props;return m.exports.useEffect(()=>{r!=null&&r.message&&d(r.message)},[r]),e(c,{children:t("div",{className:"bg-white mx-auto dark:bg-zinc-900 rounded-lg shadow py-5 max-w-5xl text-center",children:[e("h2",{className:"text-3xl text-gray-600 dark:text-zinc-200 font-semibold text-center",children:i("Join Our Platform")}),e("p",{className:"text-center mb-8 text-xl text-gray-600 dark:text-zinc-200 mt-1",children:i("We are welcoming both streamers and users to our platform to get connected to each other.")}),t("div",{className:"grid grid-cols-2 mt-10 gap-2",children:[t("div",{className:"col text-center",children:[e(o,{href:route("streamer.signup"),children:e("img",{src:a,alt:"",className:"max-h-96 rounded-full mx-auto border-zinc-200 dark:border-indigo-200 border-4"})}),e(o,{href:route("streamer.signup"),className:"bg-pink-600  text-white font-bold py-2 px-4 rounded mb-4 hover:bg-pink-500 mt-5 inline-block",children:i("I'm a Streamer")})]}),t("div",{className:"col text-center",children:[e(o,{href:route("register"),children:e("img",{src:n,alt:"",className:"max-h-96 rounded-full mx-auto border-zinc-200  dark:border-indigo-200 border-4"})}),e(o,{href:route("register"),className:"bg-indigo-700 inline-block mt-5 text-white font-bold py-2 px-4 rounded mb-4 hover:bg-indigo-600",children:i("I am an User")})]})]})]})})}export{z as default};