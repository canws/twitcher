import{j as t,a as e}from"./app.70eb7c5f.js";import{_ as a}from"./Translate.dc83ae5b.js";import{b as o}from"./index.esm.44a5a5e5.js";import h from"./WithdrawForm.4a216099.js";import"./iconBase.19c775b5.js";import"./TextInput.9faad775.js";import"./PrimaryButton.09893f04.js";import"./InputError.afc03b2f.js";import"./InputLabel.b913582c.js";import"./Spinner.4065475d.js";function N({tokens:r,token_value:l,currency_symbol:d,money_balance:i,min_withdraw:s,pending_count:m,payout_settings:n}){return t("div",{className:"p-4 sm:p-8 bg-white dark:bg-zinc-900 shadow sm:rounded-lg",children:[t("div",{className:"flex flex-wrap justify-between",children:[t("div",{className:"flex items-center space-x-4",children:[e("div",{children:e(o,{className:"w-12 h-12"})}),t("div",{children:[e("h3",{className:"text-2xl font-semibold dark:text-white",children:a("Withdraw")}),e("p",{className:"mt-1 text-gray-600 dark:text-gray-400",children:a("Request Payout")})]})]}),e("div",{children:e("h3",{className:"px-5 py-2.5 bg-gray-900 text-white dark:bg-gray-700 dark:text-white text-lg rounded-md font-bold",children:a(":tokenBalance tokens",{tokenBalance:r})})})]}),t("p",{className:"dark:text-white mt-5 text-gray-600",children:[a("Minimum withdraw threshold before being able to request a payout:")," ",e("span",{className:"px-2 py-0.5 ml-2 rounded-md bg-gray-900 text-white dark:bg-gray-700 dark:text-white font-semibold",children:a(":minWithdraw tokens",{minWithdraw:s})})]}),e("hr",{className:"my-2"}),t("p",{className:"dark:text-white text-gray-600",children:[a("1 Token Value ="),t("span",{className:"px-2 py-0.5 ml-2 rounded-md bg-gray-900 text-white dark:bg-gray-700 dark:text-white font-semibold",children:[d,l]})]}),e("hr",{className:"my-2"}),t("p",{className:"dark:text-white text-gray-600",children:[a("Your :tokenBalance tokens balance will be converted to",{tokenBalance:r}),t("span",{className:"px-2 py-0.5 ml-2 rounded-md bg-gray-900 text-white dark:bg-gray-700 dark:text-white font-semibold",children:[d,i]})]}),r>=s&&e(h,{tokens:r,money_balance:i,currency_symbol:d,pending_count:m,payout_settings:n})]})}export{N as default};
