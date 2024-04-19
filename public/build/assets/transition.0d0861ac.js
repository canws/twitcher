import{r as o,R as O,f as le,a as I}from"./app.80d8e81d.js";var we=Object.defineProperty,Ce=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t,r)=>(Ce(e,typeof t!="symbol"?t+"":t,r),r);class Oe{constructor(){_(this,"current",this.detect()),_(this,"handoffState","pending"),_(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let U=new Oe,L=(e,t)=>{U.isServer?o.exports.useEffect(e,t):o.exports.useLayoutEffect(e,t)};function j(e){let t=o.exports.useRef(e);return L(()=>{t.current=e},[e]),t}let E=function(e){let t=j(e);return O.useCallback((...r)=>t.current(...r),[t])};function Ne(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function k(){let e=[],t={addEventListener(r,n,s,d){return r.addEventListener(n,s,d),t.add(()=>r.removeEventListener(n,s,d))},requestAnimationFrame(...r){let n=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(n))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let n=setTimeout(...r);return t.add(()=>clearTimeout(n))},microTask(...r){let n={current:!0};return Ne(()=>{n.current&&r[0]()}),t.add(()=>{n.current=!1})},style(r,n,s){let d=r.style.getPropertyValue(n);return Object.assign(r.style,{[n]:s}),this.add(()=>{Object.assign(r.style,{[n]:d})})},group(r){let n=k();return r(n),this.add(()=>n.dispose())},add(r){return e.push(r),()=>{let n=e.indexOf(r);if(n>=0)for(let s of e.splice(n,1))s()}},dispose(){for(let r of e.splice(0))r()}};return t}function ce(){let[e]=o.exports.useState(k);return o.exports.useEffect(()=>()=>e.dispose(),[e]),e}function Re(){let e=typeof document>"u";return"useSyncExternalStore"in le?(t=>t.useSyncExternalStore)(le)(()=>()=>{},()=>!1,()=>!e):!1}function de(){let e=Re(),[t,r]=o.exports.useState(U.isHandoffComplete);return t&&U.isHandoffComplete===!1&&r(!1),o.exports.useEffect(()=>{t!==!0&&r(!0)},[t]),o.exports.useEffect(()=>U.handoff(),[]),e?!1:t}function b(e,t,...r){if(e in t){let s=t[e];return typeof s=="function"?s(...r):s}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,b),n}let $e=Symbol();function fe(...e){let t=o.exports.useRef(e);o.exports.useEffect(()=>{t.current=e},[e]);let r=E(n=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(n):s.current=n)});return e.every(n=>n==null||(n==null?void 0:n[$e]))?void 0:r}function B(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var pe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(pe||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function me({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:s,visible:d=!0,name:p,mergeRefs:c}){c=c!=null?c:je;let i=he(t,e);if(d)return M(i,r,n,p,c);let l=s!=null?s:0;if(l&2){let{static:a=!1,...g}=i;if(a)return M(g,r,n,p,c)}if(l&1){let{unmount:a=!0,...g}=i;return b(a?0:1,{[0](){return null},[1](){return M({...g,hidden:!0,style:{display:"none"}},r,n,p,c)}})}return M(i,r,n,p,c)}function M(e,t={},r,n,s){let{as:d=r,children:p,refName:c="ref",...i}=J(e,["unmount","static"]),l=e.ref!==void 0?{[c]:e.ref}:{},a=typeof p=="function"?p(t):p;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let g={};if(t){let v=!1,h=[];for(let[f,m]of Object.entries(t))typeof m=="boolean"&&(v=!0),m===!0&&h.push(f);v&&(g["data-headlessui-state"]=h.join(" "))}if(d===o.exports.Fragment&&Object.keys(ae(i)).length>0){if(!o.exports.isValidElement(a)||Array.isArray(a)&&a.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let v=a.props,h=typeof(v==null?void 0:v.className)=="function"?(...m)=>B(v==null?void 0:v.className(...m),i.className):B(v==null?void 0:v.className,i.className),f=h?{className:h}:{};return o.exports.cloneElement(a,Object.assign({},he(a.props,ae(J(i,["ref"]))),g,l,{ref:s(a.ref,l.ref)},f))}return o.exports.createElement(d,Object.assign({},J(i,["ref"]),d!==o.exports.Fragment&&l,d!==o.exports.Fragment&&g),a)}function je(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function he(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let s in n)s.startsWith("on")&&typeof n[s]=="function"?(r[s]!=null||(r[s]=[]),r[s].push(n[s])):t[s]=n[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](s,...d){let p=r[n];for(let c of p){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;c(s,...d)}}});return t}function te(e){var t;return Object.assign(o.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ae(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function J(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}let re=o.exports.createContext(null);re.displayName="OpenClosedContext";var y=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(y||{});function ve(){return o.exports.useContext(re)}function Pe({value:e,children:t}){return O.createElement(re.Provider,{value:e},t)}function ne(){let e=o.exports.useRef(!1);return L(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Le(e=0){let[t,r]=o.exports.useState(e),n=ne(),s=o.exports.useCallback(i=>{n.current&&r(l=>l|i)},[t,n]),d=o.exports.useCallback(i=>Boolean(t&i),[t]),p=o.exports.useCallback(i=>{n.current&&r(l=>l&~i)},[r,n]),c=o.exports.useCallback(i=>{n.current&&r(l=>l^i)},[r]);return{flags:t,addFlag:s,hasFlag:d,removeFlag:p,toggleFlag:c}}function ke(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function X(e,...t){e&&t.length>0&&e.classList.add(...t)}function Z(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Ae(e,t){let r=k();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:s}=getComputedStyle(e),[d,p]=[n,s].map(i=>{let[l=0]=i.split(",").filter(Boolean).map(a=>a.includes("ms")?parseFloat(a):parseFloat(a)*1e3).sort((a,g)=>g-a);return l}),c=d+p;if(c!==0){r.group(l=>{l.setTimeout(()=>{t(),l.dispose()},c),l.addEventListener(e,"transitionrun",a=>{a.target===a.currentTarget&&l.dispose()})});let i=r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t(),i())})}else t();return r.add(()=>t()),r.dispose}function He(e,t,r,n){let s=r?"enter":"leave",d=k(),p=n!==void 0?ke(n):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let c=b(s,{enter:()=>t.enter,leave:()=>t.leave}),i=b(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=b(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Z(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),X(e,...t.base,...c,...l),d.nextFrame(()=>{Z(e,...t.base,...c,...l),X(e,...t.base,...c,...i),Ae(e,()=>(Z(e,...t.base,...c),X(e,...t.base,...t.entered),p()))}),d.dispose}function qe({immediate:e,container:t,direction:r,classes:n,onStart:s,onStop:d}){let p=ne(),c=ce(),i=j(r);L(()=>{e&&(i.current="enter")},[e]),L(()=>{let l=k();c.add(l.dispose);let a=t.current;if(a&&i.current!=="idle"&&p.current)return l.dispose(),s.current(i.current),l.add(He(a,n.current,i.current==="enter",()=>{l.dispose(),d.current(i.current)})),l.dispose},[r])}function F(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let V=o.exports.createContext(null);V.displayName="TransitionContext";var De=(e=>(e.Visible="visible",e.Hidden="hidden",e))(De||{});function Me(){let e=o.exports.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ue(){let e=o.exports.useContext(Y);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let Y=o.exports.createContext(null);Y.displayName="NestingContext";function z(e){return"children"in e?z(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ge(e,t){let r=j(e),n=o.exports.useRef([]),s=ne(),d=ce(),p=E((h,f=S.Hidden)=>{let m=n.current.findIndex(({el:u})=>u===h);m!==-1&&(b(f,{[S.Unmount](){n.current.splice(m,1)},[S.Hidden](){n.current[m].state="hidden"}}),d.microTask(()=>{var u;!z(n)&&s.current&&((u=r.current)==null||u.call(r))}))}),c=E(h=>{let f=n.current.find(({el:m})=>m===h);return f?f.state!=="visible"&&(f.state="visible"):n.current.push({el:h,state:"visible"}),()=>p(h,S.Unmount)}),i=o.exports.useRef([]),l=o.exports.useRef(Promise.resolve()),a=o.exports.useRef({enter:[],leave:[],idle:[]}),g=E((h,f,m)=>{i.current.splice(0),t&&(t.chains.current[f]=t.chains.current[f].filter(([u])=>u!==h)),t==null||t.chains.current[f].push([h,new Promise(u=>{i.current.push(u)})]),t==null||t.chains.current[f].push([h,new Promise(u=>{Promise.all(a.current[f].map(([N,R])=>R)).then(()=>u())})]),f==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>m(f)):m(f)}),v=E((h,f,m)=>{Promise.all(a.current[f].splice(0).map(([u,N])=>N)).then(()=>{var u;(u=i.current.shift())==null||u()}).then(()=>m(f))});return o.exports.useMemo(()=>({children:n,register:c,unregister:p,onStart:g,onStop:v,wait:l,chains:a}),[c,p,n,g,v,a,l])}function Ie(){}let Be=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ue(e){var t;let r={};for(let n of Be)r[n]=(t=e[n])!=null?t:Ie;return r}function Ve(e){let t=o.exports.useRef(ue(e));return o.exports.useEffect(()=>{t.current=ue(e)},[e]),t}let Ye="div",xe=pe.RenderStrategy;function ze(e,t){var r,n;let{beforeEnter:s,afterEnter:d,beforeLeave:p,afterLeave:c,enter:i,enterFrom:l,enterTo:a,entered:g,leave:v,leaveFrom:h,leaveTo:f,...m}=e,u=o.exports.useRef(null),N=fe(u,t),R=(r=m.unmount)==null||r?S.Unmount:S.Hidden,{show:x,appear:w,initial:se}=Me(),[C,G]=o.exports.useState(x?"visible":"hidden"),oe=Ue(),{register:A,unregister:H}=oe;o.exports.useEffect(()=>A(u),[A,u]),o.exports.useEffect(()=>{if(R===S.Hidden&&u.current){if(x&&C!=="visible"){G("visible");return}return b(C,{hidden:()=>H(u),visible:()=>A(u)})}},[C,u,A,H,x,R]);let K=j({base:F(m.className),enter:F(i),enterFrom:F(l),enterTo:F(a),entered:F(g),leave:F(v),leaveFrom:F(h),leaveTo:F(f)}),q=Ve({beforeEnter:s,afterEnter:d,beforeLeave:p,afterLeave:c}),Q=de();o.exports.useEffect(()=>{if(Q&&C==="visible"&&u.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[u,C,Q]);let ye=se&&!w,ie=w&&x&&se,Ee=(()=>!Q||ye?"idle":x?"enter":"leave")(),P=Le(0),Te=E(T=>b(T,{enter:()=>{P.addFlag(y.Opening),q.current.beforeEnter()},leave:()=>{P.addFlag(y.Closing),q.current.beforeLeave()},idle:()=>{}})),Fe=E(T=>b(T,{enter:()=>{P.removeFlag(y.Opening),q.current.afterEnter()},leave:()=>{P.removeFlag(y.Closing),q.current.afterLeave()},idle:()=>{}})),D=ge(()=>{G("hidden"),H(u)},oe),W=o.exports.useRef(!1);qe({immediate:ie,container:u,classes:K,direction:Ee,onStart:j(T=>{W.current=!0,D.onStart(u,T,Te)}),onStop:j(T=>{W.current=!1,D.onStop(u,T,Fe),T==="leave"&&!z(D)&&(G("hidden"),H(u))})});let $=m,Se={ref:N};return ie?$={...$,className:B(m.className,...K.current.enter,...K.current.enterFrom)}:W.current&&($.className=B(m.className,(n=u.current)==null?void 0:n.className),$.className===""&&delete $.className),I(Y.Provider,{value:D,children:I(Pe,{value:b(C,{visible:y.Open,hidden:y.Closed})|P.flags,children:me({ourProps:Se,theirProps:$,defaultTag:Ye,features:xe,visible:C==="visible",name:"Transition.Child"})})})}function Ge(e,t){let{show:r,appear:n=!1,unmount:s=!0,...d}=e,p=o.exports.useRef(null),c=fe(p,t);de();let i=ve();if(r===void 0&&i!==null&&(r=(i&y.Open)===y.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,a]=o.exports.useState(r?"visible":"hidden"),g=ge(()=>{a("hidden")}),[v,h]=o.exports.useState(!0),f=o.exports.useRef([r]);L(()=>{v!==!1&&f.current[f.current.length-1]!==r&&(f.current.push(r),h(!1))},[f,r]);let m=o.exports.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);o.exports.useEffect(()=>{if(r)a("visible");else if(!z(g))a("hidden");else{let x=p.current;if(!x)return;let w=x.getBoundingClientRect();w.x===0&&w.y===0&&w.width===0&&w.height===0&&a("hidden")}},[r,g]);let u={unmount:s},N=E(()=>{var x;v&&h(!1),(x=e.beforeEnter)==null||x.call(e)}),R=E(()=>{var x;v&&h(!1),(x=e.beforeLeave)==null||x.call(e)});return I(Y.Provider,{value:g,children:I(V.Provider,{value:m,children:me({ourProps:{...u,as:o.exports.Fragment,children:O.createElement(be,{ref:c,...u,...d,beforeEnter:N,beforeLeave:R})},theirProps:{},defaultTag:o.exports.Fragment,features:xe,visible:l==="visible",name:"Transition"})})})}function Ke(e,t){let r=o.exports.useContext(V)!==null,n=ve()!==null;return O.createElement(O.Fragment,null,!r&&n?O.createElement(ee,{ref:t,...e}):O.createElement(be,{ref:t,...e}))}let ee=te(Ge),be=te(ze),Qe=te(Ke),_e=Object.assign(ee,{Child:Qe,Root:ee});export{_e as q};
