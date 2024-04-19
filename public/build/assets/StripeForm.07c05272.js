import{R as s,a as h,b as me,j as W,H as ve}from"./app.80d8e81d.js";import{A as he}from"./AuthenticatedLayout.133a6372.js";import{_}from"./Translate.dc83ae5b.js";import{p as u}from"./index.ed46817d.js";import{P as ye}from"./PrimaryButton.5a171063.js";import{Q as Ce}from"./react-toastify.esm.7b265dee.js";import"./Front.ea22bede.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.d0968a32.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./TextInput.506a6cb6.js";import"./index.esm.e84694d3.js";function D(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),t.push.apply(t,n)}return t}function F(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?D(Object(t),!0).forEach(function(n){H(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function T(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(r)}function H(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function J(r,e){return ge(r)||Se(r,e)||xe(r,e)||be()}function ge(r){if(Array.isArray(r))return r}function Se(r,e){var t=r&&(typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"]);if(t!=null){var n=[],a=!0,o=!1,c,d;try{for(t=t.call(r);!(a=(c=t.next()).done)&&(n.push(c.value),!(e&&n.length===e));a=!0);}catch(i){o=!0,d=i}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw d}}return n}}function xe(r,e){if(!!r){if(typeof r=="string")return Y(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Y(r,e)}}function Y(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function be(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var v=function(e,t,n){var a=!!n,o=s.useRef(n);s.useEffect(function(){o.current=n},[n]),s.useEffect(function(){if(!a||!e)return function(){};var c=function(){o.current&&o.current.apply(o,arguments)};return e.on(t,c),function(){e.off(t,c)}},[a,t,e,o])},B=function(e){var t=s.useRef(e);return s.useEffect(function(){t.current=e},[e]),t.current},w=function(e){return e!==null&&T(e)==="object"},Ee=function(e){return w(e)&&typeof e.then=="function"},ke=function(e){return w(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},K="[object Object]",we=function r(e,t){if(!w(e)||!w(t))return e===t;var n=Array.isArray(e),a=Array.isArray(t);if(n!==a)return!1;var o=Object.prototype.toString.call(e)===K,c=Object.prototype.toString.call(t)===K;if(o!==c)return!1;if(!o&&!n)return e===t;var d=Object.keys(e),i=Object.keys(t);if(d.length!==i.length)return!1;for(var y={},C=0;C<d.length;C+=1)y[d[C]]=!0;for(var S=0;S<i.length;S+=1)y[i[S]]=!0;var f=Object.keys(y);if(f.length!==d.length)return!1;var k=e,E=t,x=function(j){return r(k[j],E[j])};return f.every(x)},V=function(e,t,n){return w(e)?Object.keys(e).reduce(function(a,o){var c=!w(t)||!we(e[o],t[o]);return n.includes(o)?(c&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),a):c?F(F({},a||{}),{},H({},o,e[o])):a},null):null},X="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",z=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;if(e===null||ke(e))return e;throw new Error(t)},Pe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;if(Ee(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(a){return z(a,t)})};var n=z(e,t);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},je=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.7.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.7.0",url:"https://stripe.com/docs/stripe-js/react"}))},I=s.createContext(null);I.displayName="ElementsContext";var Q=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},Z=function(e){var t=e.stripe,n=e.options,a=e.children,o=s.useMemo(function(){return Pe(t)},[t]),c=s.useState(function(){return{stripe:o.tag==="sync"?o.stripe:null,elements:o.tag==="sync"?o.stripe.elements(n):null}}),d=J(c,2),i=d[0],y=d[1];s.useEffect(function(){var f=!0,k=function(x){y(function(P){return P.stripe?P:{stripe:x,elements:x.elements(n)}})};return o.tag==="async"&&!i.stripe?o.stripePromise.then(function(E){E&&f&&k(E)}):o.tag==="sync"&&!i.stripe&&k(o.stripe),function(){f=!1}},[o,i,n]);var C=B(t);s.useEffect(function(){C!==null&&C!==t&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[C,t]);var S=B(n);return s.useEffect(function(){if(!!i.elements){var f=V(n,S,["clientSecret","fonts"]);f&&i.elements.update(f)}},[n,S,i.elements]),s.useEffect(function(){je(i.stripe)},[i.stripe]),h(I.Provider,{value:i,children:a})};Z.propTypes={stripe:u.exports.any,options:u.exports.object};var Ae=function(e){var t=s.useContext(I);return Q(t,e)},Oe=function(){var e=Ae("calls useElements()"),t=e.elements;return t};u.exports.func.isRequired;var ee=s.createContext(null);ee.displayName="CustomCheckoutSdkContext";var Re=function(e,t){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CustomCheckoutProvider> provider."));return e},Ne=s.createContext(null);Ne.displayName="CustomCheckoutContext";u.exports.any,u.exports.shape({clientSecret:u.exports.string.isRequired,elementsOptions:u.exports.object}).isRequired;var M=function(e){var t=s.useContext(ee),n=s.useContext(I);if(t&&n)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return t?Re(t,e):Q(n,e)},_e=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},l=function(e,t){var n="".concat(_e(e),"Element"),a=function(i){var y=i.id,C=i.className,S=i.options,f=S===void 0?{}:S,k=i.onBlur,E=i.onFocus,x=i.onReady,P=i.onChange,j=i.onEscape,oe=i.onClick,ae=i.onLoadError,ie=i.onLoaderStart,se=i.onNetworksChange,ue=i.onConfirm,ce=i.onCancel,le=i.onShippingAddressChange,pe=i.onShippingRateChange,A=M("mounts <".concat(n,">")),O="elements"in A?A.elements:null,R="customCheckoutSdk"in A?A.customCheckoutSdk:null,fe=s.useState(null),$=J(fe,2),m=$[0],de=$[1],b=s.useRef(null),L=s.useRef(null);v(m,"blur",k),v(m,"focus",E),v(m,"escape",j),v(m,"click",oe),v(m,"loaderror",ae),v(m,"loaderstart",ie),v(m,"networkschange",se),v(m,"confirm",ue),v(m,"cancel",ce),v(m,"shippingaddresschange",le),v(m,"shippingratechange",pe),v(m,"change",P);var U;x&&(e==="expressCheckout"?U=x:U=function(){x(m)}),v(m,"ready",U),s.useLayoutEffect(function(){if(b.current===null&&L.current!==null&&(O||R)){var g=null;R?g=R.createElement(e,f):O&&(g=O.create(e,f)),b.current=g,de(g),g&&g.mount(L.current)}},[O,R,f]);var q=B(f);return s.useEffect(function(){if(!!b.current){var g=V(f,q,["paymentRequest"]);g&&b.current.update(g)}},[f,q]),s.useLayoutEffect(function(){return function(){if(b.current&&typeof b.current.destroy=="function")try{b.current.destroy(),b.current=null}catch{}}},[]),h("div",{id:y,className:C,ref:L})},o=function(i){M("mounts <".concat(n,">"));var y=i.id,C=i.className;return h("div",{id:y,className:C})},c=t?o:a;return c.propTypes={id:u.exports.string,className:u.exports.string,onChange:u.exports.func,onBlur:u.exports.func,onFocus:u.exports.func,onReady:u.exports.func,onEscape:u.exports.func,onClick:u.exports.func,onLoadError:u.exports.func,onLoaderStart:u.exports.func,onNetworksChange:u.exports.func,onConfirm:u.exports.func,onCancel:u.exports.func,onShippingAddressChange:u.exports.func,onShippingRateChange:u.exports.func,options:u.exports.object},c.displayName=n,c.__elementType=e,c},p=typeof window>"u",Te=s.createContext(null);Te.displayName="EmbeddedCheckoutProviderContext";var Ie=function(){var e=M("calls useStripe()"),t=e.stripe;return t};l("auBankAccount",p);l("card",p);l("cardNumber",p);l("cardExpiry",p);l("cardCvc",p);l("fpxBank",p);l("iban",p);l("idealBank",p);l("p24Bank",p);l("epsBank",p);var Le=l("payment",p);l("expressCheckout",p);l("paymentRequestButton",p);l("linkAuthentication",p);l("address",p);l("shippingAddress",p);l("paymentMethodMessaging",p);l("affirmMessage",p);l("afterpayClearpayMessage",p);var te="https://js.stripe.com/v3",Ue=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,G="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",We=function(){for(var e=document.querySelectorAll('script[src^="'.concat(te,'"]')),t=0;t<e.length;t++){var n=e[t];if(!!Ue.test(n.src))return n}return null},Be=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(te).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},Me=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})},N=null,$e=function(e){return N!==null||(N=new Promise(function(t,n){if(typeof window>"u"||typeof document>"u"){t(null);return}if(window.Stripe&&e&&console.warn(G),window.Stripe){t(window.Stripe);return}try{var a=We();a&&e?console.warn(G):a||(a=Be(e)),a.addEventListener("load",function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(o){n(o);return}})),N},qe=function(e,t,n){if(e===null)return null;var a=e.apply(void 0,t);return Me(a,n),a},re=Promise.resolve().then(function(){return $e(null)}),ne=!1;re.catch(function(r){ne||console.warn(r)});var De=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];ne=!0;var a=Date.now();return re.then(function(o){return qe(o,t,a)})};const Fe=({saleId:r})=>{const e=Ie(),t=Oe();return W("form",{onSubmit:async a=>{if(a.preventDefault(),!e||!t)return;const o=await e.confirmPayment({elements:t,confirmParams:{return_url:route("stripe.processOrder",{tokenSale:r})}});o.error&&Ce.error(o.error.message)},children:[h(Le,{}),h(ye,{className:"mt-5",processing:!e,children:_("Submit Payment")})]})};function at({auth:r,tokenPack:e,stripeImg:t,publicKey:n,cs:a,saleId:o}){const{currency_symbol:c,currency_code:d}=me().props,i=De(n),y={clientSecret:a,appearance:{theme:localStorage.getItem("is-dark-mode")==="yes"?"night":"",labels:"floating"}};return W(he,{auth:r,children:[h(ve,{title:_("Credit Card (Stripe)")}),W("div",{className:"p-4 sm:p-8 bg-white max-w-3xl mx-auto dark:bg-zinc-900 shadow sm:rounded-lg",children:[h("div",{className:"flex justify-center items-center",children:h("div",{children:h("h3",{className:"text-3xl font-semibold dark:text-white text-center",children:_("Credit Card")})})}),h("h3",{className:"mt-5 text-2xl font-semibold dark:text-white text-center",children:_("You are purchasing :tokensAmount tokens for :moneyAmount",{tokensAmount:e.tokensFormatted,moneyAmount:`${c}${e.price}`})}),h("hr",{className:"my-10"}),h(Z,{stripe:i,options:y,children:h(Fe,{saleId:o})})]})]})}export{at as default};
