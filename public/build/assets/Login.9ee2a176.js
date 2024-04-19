import{u as N,r as b,a as e,j as r,L as n}from"./app.80d8e81d.js";import{I as l}from"./InputError.819317a8.js";import{I as d}from"./InputLabel.3820df7f.js";import{P as v}from"./PrimaryButton.5a171063.js";import{T as c}from"./TextInput.506a6cb6.js";import{_ as t}from"./Translate.dc83ae5b.js";import{F as y}from"./Front.ea22bede.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./react-toastify.esm.7b265dee.js";import"./index.esm.e84694d3.js";function H({status:s,canResetPassword:u,loginIcon:p}){const{data:o,setData:f,post:g,processing:x,errors:m,reset:h}=N({email:"",password:"",remember:""});b.exports.useEffect(()=>()=>{h("password")},[]);const i=a=>{f(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},w=a=>{a.preventDefault(),g(route("login"))};return e(y,{children:e("div",{className:"p-5 md:p-10 mx-auto max-w-5xl bg-white dark:bg-zinc-900 shadow rounded-lg",children:r("div",{className:"flex items-center flex-col md:flex-row md:space-x-10",children:[e("div",{className:"w-full",children:e("img",{src:p,alt:"user signup",className:"max-h-96 rounded-full mx-auto border-zinc-200 dark:border-indigo-200 border-4"})}),r("div",{className:"flex-grow pt-10 w-full",children:[e("h2",{className:"text-3xl font-semibold text-gray-600 dark:text-zinc-200 text-center",children:t("Login to your account")}),r("p",{className:"mb-5 mt-1 text-center text-sm text-gray-600 dark:text-white",children:[t("Don't have an account?")," ",e(n,{className:"dark:text-indigo-400 text-indigo-700 hover:underline",href:route("signup"),children:t("Signup")})]}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),r("form",{onSubmit:w,children:[r("div",{children:[e(d,{forInput:"email",value:"Email"}),e(c,{type:"email",name:"email",value:o.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!1,handleChange:i}),e(l,{message:m.email,className:"mt-2"})]}),r("div",{className:"mt-4",children:[e(d,{forInput:"password",value:"Password"}),e(c,{type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:i}),e(l,{message:m.password,className:"mt-2"})]}),r("div",{className:"flex items-center justify-end mt-4",children:[u&&e(n,{href:route("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:t("Forgot your password?")}),e(v,{className:"ml-4",processing:x,children:t("Log in")})]})]})]})]})})})}export{H as default};