import{_ as t}from"./Translate.dc83ae5b.js";import{a as h}from"./index.esm.d0968a32.js";import{P as x}from"./PrimaryButton.5a171063.js";import{r as m,j as a,F as k,a as e,d as v}from"./app.80d8e81d.js";import{M as S}from"./Modal.4f44b591.js";import{I as g}from"./InputLabel.3820df7f.js";import{T as w}from"./Textarea.84dfe4c0.js";import{N as j}from"./NumberInput.b27f9c6c.js";import{Q as l}from"./react-toastify.esm.7b265dee.js";import"./iconBase.455a4d09.js";import"./transition.0d0861ac.js";function E({streamer:N}){const[T,o]=m.exports.useState(!1),[i,c]=m.exports.useState(""),[p,u]=m.exports.useState(""),b=s=>{s.preventDefault(),v.post(route("tips.send"),{streamer:N.id,tip:p,message:i}).then(r=>{r.data.result=="ok"?(u(""),c(""),l.success(t("Thanks, your tip has been sent!")),o(!1)):l.error(r.data.result)}).catch(r=>{var d;const n=(d=r.response.data)==null?void 0:d.errors;Object.keys(n).forEach(f=>{console.log(n[f][0]),l.error(n[f][0])})})};return a(k,{children:[e(S,{show:T,onClose:s=>o(!1),maxWidth:"xs",children:a("div",{className:"p-5 text-center",children:[a("h3",{className:"text-lg mb-3 justify-center flex items-center font-semibold dark:text-white",children:[e(h,{className:"mr-2 h-6 w-6"}),t("Send Tip")]}),a("form",{onSubmit:b,children:[e(g,{className:"text-base",forInput:"tokens",value:t("Tokens Amount")}),e(j,{type:"number",name:"tokens",min:1,className:"w-full mt-2",value:p,handleChange:s=>u(s.target.value)}),e(g,{className:"text-base mt-4",forInput:"message",value:t("Message")}),e(w,{className:"w-full mt-2",value:i,required:!0,handleChange:s=>c(s.target.value)}),e(x,{className:"mt-5",children:t("Send Tip")})]})]})}),a(x,{onClick:s=>o(!0),className:"py-3 inline-flex items-center",children:[e(h,{className:"mr-1"})," ",t("Tip")]})]})}export{E as default};
