import{u as y,r as u,b as I,j as r,a as e,H as C}from"./app.80d8e81d.js";import{I as n}from"./InputError.819317a8.js";import{I as i}from"./InputLabel.3820df7f.js";import{P as _}from"./PrimaryButton.5a171063.js";import{T as l}from"./TextInput.506a6cb6.js";import{F as q}from"./Front.ea22bede.js";import{_ as s}from"./Translate.dc83ae5b.js";import{Q as p}from"./react-toastify.esm.7b265dee.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./index.esm.e84694d3.js";function Q(){const d=route().current(),{data:o,setData:g,post:f,processing:h,errors:t,reset:b}=y({username:"",category:"",is_streamer:d=="streamer.signup"?"yes":"no",name:"",email:"",password:"",password_confirmation:"",dob:""});u.exports.useEffect(()=>()=>{b("password","password_confirmation")},[]);const m=a=>{g(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},w=a=>{a.preventDefault(),f(route("register"))},N="/images/streamer-icon.png",x="/images/user-signup-icon.png",{categories:v,flash:c}=I().props;return u.exports.useEffect(()=>{c!=null&&c.message&&p(c.message),Object.keys(t).length!==0&&Object.keys(t).map((a,k)=>{p(t[a])})},[c,t]),r(q,{children:[e(C,{title:s("Register")}),r("div",{className:"flex items-center flex-col md:flex-row md:space-x-10 bg-white rounded-lg px-5 pb-6 dark:bg-zinc-900 shadow max-w-5xl mx-auto",children:[r("div",{className:"w-full",children:[e("h2",{className:"my-5 text-3xl text-gray-600 dark:text-zinc-200 font-semibold text-center",children:d==="streamer.signup"?s("Join as a Streamer"):s("Join as an User")}),d==="streamer.signup"&&e("img",{src:N,alt:"influencer signup",className:"max-h-96 rounded-full mx-auto border-zinc-200 dark:border-indigo-200 border-4"}),d==="register"&&e("img",{src:x,alt:"user signup",className:"max-h-96 rounded-full mx-auto border-zinc-200 dark:border-indigo-200 border-4"})]}),e("div",{className:"flex-grow pt-10 w-full",children:r("form",{onSubmit:w,children:[e("input",{type:"hidden",name:"is_streamer",value:o.is_streamer}),r("div",{className:"mb-4",children:[e(i,{forInput:"username",value:s("Username")}),e(l,{name:"username",value:o.username,className:"mt-1 block w-full",autoComplete:"username",handleChange:m,isFocused:!0,required:!0}),e(n,{message:t.username,className:"mt-2"})]}),r("div",{children:[e(i,{forInput:"name",value:s("Name")}),e(l,{name:"name",value:o.name,className:"mt-1 block w-full",autoComplete:"name",handleChange:m,required:!0}),e(n,{message:t.name,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(i,{forInput:"email",value:s("Email")}),e(l,{type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:m,required:!0}),e(n,{message:t.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(i,{forInput:"password",value:s("Password")}),e(l,{type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:m,required:!0}),e(n,{message:t.password,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(i,{forInput:"password_confirmation",value:s("Confirm Password")}),e(l,{type:"password",name:"password_confirmation",value:o.password_confirmation,className:"mt-1 block w-full",handleChange:m,required:!0}),e(n,{message:t.password_confirmation,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(i,{forInput:"dob",value:s("D.O.B")}),e(l,{type:"date",name:"dob",value:o.dob,className:"mt-1 block w-full",handleChange:m,required:!0}),e(n,{message:t.password_confirmation,className:"mt-2"})]}),d==="streamer.signup"&&r("div",{className:"mt-4",children:[e(i,{forInput:"category",value:s("Category")}),r("select",{name:"category",onChange:a=>m(a),required:!0,className:"mt-1 block w-full border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",children:[e("option",{value:"",children:s("- Select -")}),v.map((a,k)=>e("option",{value:a.id,children:a.category},a.id))]}),e(n,{message:t.category,className:"mt-2"})]}),e("div",{className:"flex items-center justify-end mt-4",children:e(_,{className:"ml-4",processing:h,children:s("Register")})})]})})]})]})}export{Q as default};