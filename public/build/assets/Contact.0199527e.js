import{u as b,b as v,r as w,j as a,a as e,H as I}from"./app.80d8e81d.js";import{I as o}from"./InputError.819317a8.js";import{I as n}from"./InputLabel.3820df7f.js";import{P as k}from"./PrimaryButton.5a171063.js";import{T as i}from"./TextInput.506a6cb6.js";import{F as C}from"./Front.ea22bede.js";import{_ as t}from"./Translate.dc83ae5b.js";import"./react-toastify.esm.7b265dee.js";import{T as j}from"./Textarea.84dfe4c0.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./index.esm.e84694d3.js";function A({no1:u,no2:d,contact_image:p}){route().current();const{data:s,setData:h,post:f,processing:g,errors:r,reset:x}=b({name:"",email:"",subject:"",math:"",message:""}),l=m=>{h(m.target.name,m.target.type==="checkbox"?m.target.checked:m.target.value)},N=m=>{m.preventDefault(),f(route("contact.process"))},{flash:c}=v().props;return w.exports.useEffect(()=>{c!=null&&c.resetForm&&(console.log("reset me"),x())},[c]),a(C,{children:[e(I,{title:t("Get in Touch")}),a("div",{className:"flex items-center flex-col md:flex-row md:space-x-10 bg-white rounded-lg px-5 pb-6 dark:bg-zinc-900 shadow max-w-5xl mx-auto",children:[a("div",{className:"w-full",children:[e("h2",{className:"mb-5 text-2xl font-semibold dark:text-zinc-200 text-center",children:t("Get in Touch")}),e("img",{src:p,alt:"contact image",className:"max-h-96 rounded-full mx-auto border-zinc-200 dark:border-indigo-200 "})]}),e("div",{className:"flex-grow pt-10 w-full",children:a("form",{onSubmit:N,children:[a("div",{className:"mb-4",children:[e(n,{forInput:"name",value:t("Name")}),e(i,{name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",handleChange:l,isFocused:!0,required:!0}),e(o,{message:r.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"email",value:t("Email")}),e(i,{type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:l,required:!0}),e(o,{message:r.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"subject",value:t("Subject")}),e(i,{type:"text",name:"subject",value:s.subject,className:"mt-1 block w-full",handleChange:l,required:!0}),e(o,{message:r.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"message",value:t("Your message")}),e(j,{name:"message",value:s.message,className:"mt-1 block w-full",handleChange:l,required:!0}),e(o,{message:r.message,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"math",value:t("What is the result of :no1 + :no2 ?",{no1:u,no2:d})}),e(i,{type:"text",name:"math",value:s.math,className:"mt-1 ",handleChange:l,required:!0}),e(o,{message:r.math,className:"mt-2"})]}),e("div",{className:"flex mt-4",children:e(k,{className:"",processing:g,children:t("Send Inquiry")})})]})})]})]})}export{A as default};
