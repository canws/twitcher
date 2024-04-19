import{I as u}from"./InputLabel.3820df7f.js";import{I as p}from"./InputError.819317a8.js";import{T as b}from"./TextInput.506a6cb6.js";import"./Textarea.84dfe4c0.js";import{P as z}from"./PrimaryButton.5a171063.js";import{_ as a}from"./Translate.dc83ae5b.js";import{Q as C}from"./react-toastify.esm.7b265dee.js";import{A}from"./AuthenticatedLayout.133a6372.js";import{u as D,r as n,d as E,j as t,a as e,H as P,g as H}from"./app.80d8e81d.js";import{S as M}from"./Spinner.f3a189f1.js";import{d as B}from"./index.esm.d0968a32.js";import L from"./AccountNavi.65a2c074.js";import"./Front.ea22bede.js";import"./index.esm.f8f1cf9b.js";import"./iconBase.455a4d09.js";import"./index.esm.df849484.js";import"./transition.0d0861ac.js";import"./Modal.4f44b591.js";import"./index.esm.e84694d3.js";function ne({video:s,categories:V}){const{data:c,setData:y,post:x,processing:S,errors:i,progress:k}=D({title:s.title,category_id:s.category_id,price:s.price,free_for_subs:s.free_for_subs,thumbnail:"",video_file:""}),[d,q]=n.exports.useState(""),[m,g]=n.exports.useState([]),[N,w]=n.exports.useState(!1),[I,O]=n.exports.useState(2),[j,v]=n.exports.useState(0);n.exports.useEffect(()=>{Object.keys(i).length&&Object.keys(i).map(r=>{C.error(i.key)})},[i]),n.exports.useEffect(()=>{m.length>0&&F()},[m]);const f=r=>{y(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)},U=()=>{g([]);let r=1024*1024*8,l=Math.ceil(d.size/r);for(let o=0;o<l;o++)g(h=>[...h,d.slice(o*r,Math.min(o*r+r,d.size),d.type)])},F=()=>{w(!0);const r=new FormData;r.append("media_type","video"),r.append("is_last",m.length===1),r.append("video",I),r.set("file",m[0],`${d.name}.part`),E.post(route("video.uploadChunks"),r,{onUploadProgress:l=>{v(j+l.loaded)}}).then(function(l){m.length<=1&&(g([]),v(0),c.video_file=l.data.result,console.log(l.data.result),console.log("Chunks.length <= 1, posting data"),console.log(c),s.id===null?x(route("videos.save")):_());let o=[...m];o.splice(0,1),g(o)}).catch(function(l){var o,h;v(0),C.error((h=(o=l.response)==null?void 0:o.data)==null?void 0:h.message)}).then(function(){w(!1)})},T=r=>{r.preventDefault(),d?U():d===""&&s.id!==null&&_()},_=()=>{x(route("videos.update",{video:s.id}))};return t(A,{children:[e(P,{title:a("Upload Video")}),t("div",{className:"lg:flex lg:space-x-10",children:[e(L,{active:"upload-videos"}),t("div",{className:"p-4 sm:p-8 bg-white w-full dark:bg-zinc-900 shadow sm:rounded-lg",children:[t("header",{className:"mb-5",children:[t("h2",{className:"text-lg inline-flex items-center md:text-xl font-medium text-gray-600 dark:text-gray-100",children:[e(B,{className:"mr-2"}),s.id===null?a("Upload Video"):a("Edit Video")]}),e("p",{className:"mt-1 mb-2 text-sm text-gray-600 dark:text-gray-400",children:a("Upload a new video")}),e(z,{onClick:r=>H.Inertia.visit(route("videos.list")),children:a("<< Back to Videos")})]}),e("hr",{className:"my-5"}),t("form",{onSubmit:T,encType:"multipart/form-data",children:[t("div",{className:"mb-5",children:[e(u,{for:"title",value:a("Title")}),e(b,{name:"title",value:c.title,handleChange:f,required:!0,className:"mt-1 block w-full md:w-1/2"}),e(p,{message:i.title,className:"mt-2"})]}),t("div",{className:"mb-5",children:[e(u,{for:"category",value:a("Category")}),t("select",{name:"category_id",value:c.category_id,onChange:f,required:!0,className:"mt-1 block w-full md:w-1/2 border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",children:[e("option",{value:"",children:a("--Select--")}),V.map(r=>e("option",{value:r.id,children:r.category},`category-${r.id}`))]}),e(p,{message:i.category_id,className:"mt-2"})]}),t("div",{className:"flex w-full md:w-1/2 flex-col md:flex-row md:items-center md:space-x-10 md:justify-between",children:[t("div",{className:"mb-5",children:[e(u,{for:"price",value:a("Price")}),t("div",{className:"flex items-center",children:[e(b,{type:"number",name:"price",value:c.price,handleChange:f,required:!0,className:"mt-1  w-32"}),e("div",{className:"ml-1 dark:text-white text-gray-700",children:a("tokens")})]}),e(p,{message:i.price,className:"mt-2"})]}),t("div",{className:"mb-5",children:[e(u,{for:"free_for_subs",value:a("Free for subscribers?")}),t("select",{name:"free_for_subs",value:c.free_for_subs,onChange:f,required:!0,className:"mt-1 block w-32 border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ",children:[e("option",{value:"yes",children:a("Yes")}),e("option",{value:"no",children:a("No")})]}),e(p,{message:i.free_for_subs,className:"mt-2"})]})]}),t("div",{className:"mb-5",children:[e(u,{for:"thumbnail",value:a("Thumbnail - helps to attract sales (will be resized to 640x320px)")}),e(b,{className:"p-1 block w-full md:w-1/2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-zinc-900",type:"file",name:"thumbnail",handleChange:r=>y("thumbnail",r.target.files[0]),required:s.id===null}),e(p,{message:i.thumbnail,className:"mt-2"})]}),t("div",{className:"mb-5",children:[e(u,{for:"video",value:a("Video")}),e(b,{className:"p-1 block w-full md:w-1/2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-300 focus:outline-none dark:bg-zinc-800 dark:border-gray-600 dark:placeholder-zinc-900",type:"file",name:"video",accept:"video/mp4,video/webm,video/ogg,video/quicktime,video/qt,video/mov",handleChange:r=>q(r.target.files[0]),required:s.id===null}),e(p,{message:i.video_file,className:"mt-2"})]}),e("div",{className:"flex justify-between items-center",children:e(z,{processing:S||N,children:s.id===null?a("Save Video"):a("Update Video")})}),N&&e("div",{className:"my-3",children:e(M,{})}),k&&t("progress",{className:"mt-5",value:k.percentage,max:"100",children:[k.percentage,"%"]})]})]})]})]})}export{ne as default};
