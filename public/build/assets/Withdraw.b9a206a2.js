import{b as u,r as x,j as r,a as t,H as g}from"./app.80d8e81d.js";import{A as f}from"./AuthenticatedLayout.133a6372.js";import{_ as o}from"./Translate.dc83ae5b.js";import w from"./History.1fdead33.js";import v from"./Settings.03dae629.js";import y from"./Request.6cb291a6.js";import _ from"./AccountNavi.65a2c074.js";import"./Front.ea22bede.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./react-toastify.esm.7b265dee.js";import"./TextInput.506a6cb6.js";import"./index.esm.e84694d3.js";import"./Spinner.f3a189f1.js";import"./InputLabel.3820df7f.js";import"./InputError.819317a8.js";import"./PrimaryButton.5a171063.js";import"./Textarea.84dfe4c0.js";import"./index.esm.ed72aa7b.js";import"./WithdrawForm.7b34b28f.js";function U({auth:e,pendingCount:d,withdrawals:l,payoutSettings:n}){const{currency_symbol:p,currency_code:k,token_value:h,min_withdraw:b}=u().props,[i,a]=x.exports.useState("Withdraw"),s="text-xl font-bold mr-2 md:mr-4 text-indigo-800 dark:text-indigo-500 border-b-2 border-indigo-800",m="text-xl font-bold mr-2 md:mr-4 hover:text-indigo-800 dark:text-white dark:hover:text-indigo-500";return r(f,{auth:e,children:[t(g,{title:o("Withdraw")}),r("div",{className:"lg:flex lg:space-x-10 w-full",children:[t(_,{active:"withdraw"}),r("div",{className:"flex-grow",children:[r("div",{className:"mb-5",children:[t("button",{className:i=="Withdraw"?s:m,onClick:c=>a("Withdraw"),children:o("Withdraw")}),t("button",{className:i=="History"?s:m,onClick:c=>a("History"),children:o("History")}),t("button",{className:i=="Settings"?s:m,onClick:c=>a("Settings"),children:o("Settings")})]}),i=="Withdraw"&&t(y,{token_value:h,currency_symbol:p,tokens:e.user.tokens,money_balance:e.user.moneyBalance,min_withdraw:b,pending_count:d,payout_settings:n}),i=="Settings"&&t(v,{payoutSettings:n}),i=="History"&&t(w,{withdrawals:l})]})]})]})}export{U as default};