<<<<<<< HEAD
(()=>{var e={};e.id=499,e.ids=[499],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4410:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>n});var s=t(482),l=t(9108),r=t(2563),i=t.n(r),d=t(8300),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);t.d(a,o);let n=["",{children:["our-leadership",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6569)),"/workspaces/loving-assembly-website/app/our-leadership/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8320)),"/workspaces/loving-assembly-website/app/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,4515)),"/workspaces/loving-assembly-website/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/workspaces/loving-assembly-website/app/our-leadership/page.tsx"],m="/our-leadership/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/our-leadership/page",pathname:"/our-leadership",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},8379:(e,a,t)=>{Promise.resolve().then(t.bind(t,8229)),Promise.resolve().then(t.t.bind(t,1900,23)),Promise.resolve().then(t.t.bind(t,1476,23)),Promise.resolve().then(t.bind(t,5985))},6569:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var s=t(5036),l=t(2606),r=t(6789),i=t(9860),d=t(3481),o=t(776),n=t(2112),c=t(2813),m=t(6274);t(2);var x=t(4515);let p=async()=>{let[e,a]=await Promise.all([(0,r.n)("team-page"),(0,r.n)("teams")]);return e||a?s.jsx(s.Fragment,{children:(0,s.jsxs)(l.Z,{classBottom:`${d.Z.y} flex-col items-center mt-20`,children:[s.jsx(o.G,{border:!0,className:"text-center max-w-[900px]",children:e.page.acf.title}),s.jsx(o.F,{className:"sm:mt-4 mt-2 text-center max-w-[900px] text-black",children:e.page.acf.description}),s.jsx("section",{className:"grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-10 lg:mt-16 md:mt-14 mt-6",children:a.teams.edges.sort(()=>-1).map((e,a)=>(0,s.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"w-full flex flex-col border border-black h-full rounded-xl ",children:[s.jsx(c.default,{src:e.node.acf.teamMemberDetails.image.sourceUrl,alt:"",loading:"lazy",width:e.node.acf.teamMemberDetails.image.mediaDetails.width,height:e.node.acf.teamMemberDetails.image.mediaDetails.height,className:" rounded-[10px] overflow-hidden  aspect-[16/17] shrink-0 max-h-[900px] object-cover object-top"}),(0,s.jsxs)("div",{className:"flex flex-col h-full md:py-6 py-3 md:px-10 px-3",children:[s.jsx("p",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:" font-bold text-black text-sm",children:e.node.acf.teamMemberDetails.designation}),s.jsx("h2",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"mt-1 lg:text-3xl text-2xl font-bold text-primary",children:e.node.acf.teamMemberDetails.name}),s.jsx(o.F,{className:"mt-2",children:(0,i.Z)(e.node.acf.teamMemberDetails.details)}),(0,s.jsxs)("div",{className:"flex flex-col mt-auto",children:[e.node.acf.teamMemberDetails.buttons&&(0,s.jsxs)("div",{className:"flex flex-col w-full mt-8",children:[s.jsx("h3",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"md:text-2xl text-xl font-bold ",children:e.node.acf.teamMemberDetails.buttonsTitle}),s.jsx("div",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"mt-4 flex items-center justify-start gap-4",children:e.node.acf.teamMemberDetails.buttons.map((e,a)=>s.jsx(n.t,{href:e.link,mode:0===a?"night":"day",children:e.title},a))})]}),(0,s.jsxs)("div",{className:"mt-8 flex items-center justify-between gap-10",children:[s.jsx("div",{className:"flex items-center gap-4",children:e.node.acf.teamMemberDetails.socialMedia?.map((e,t)=>s.jsx(m.default,{href:`${e.link}`,shallow:!0,"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,target:"_blank",className:"w-8 h-8 flex items-center justify-center border border-black rounded-md",children:s.jsx(c.default,{src:e.icon.sourceUrl,alt:"",loading:"lazy",width:20,height:20,className:"h-[14px] w-auto object-contain"})},t))}),s.jsx(m.default,{href:`/our-leadership/${e.node.slug}`,shallow:!0,children:s.jsx(n.t,{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"sm:text-[1rem]",children:"Read More"})})]})]})]})]},a))})]})}):s.jsx(x.default,{})}},2606:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var s=t(5036),l=t(3481);t(2);var r=t(1774);let i=({children:e,classTop:a,classBottom:t})=>s.jsx("section",{className:(0,r.m6)(`${l.Z.x} w-full flex flex-1`,a),children:s.jsx("div",{className:(0,r.m6)("max-w-[1650px] mx-auto flex w-full",t),children:e})})},9860:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var s=t(5036);let l=e=>s.jsx(s.Fragment,{children:e?.split("\r\n").map((e,a)=>s.jsxs("p",{className:"group flex flex-col",children:[e,s.jsx("span",{className:"group-last:hidden h-2"})]},a))})},6274:(e,a,t)=>{"use strict";t.d(a,{default:()=>l.a});var s=t(8026),l=t.n(s)},8026:(e,a,t)=>{"use strict";let{createProxy:s}=t(6843);e.exports=s("/workspaces/loving-assembly-website/node_modules/next/dist/client/link.js")},3481:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});let s={x:"xl:px-28 lg:px-24 sm:px-16 px-6",y:"sm:py-24 py-16",l:"xl:pl-28 lg:pl-24 sm:pl-16 pl-6",t:"sm:pt-24 pt-16",b:"sm:pb-24 pb-16"}},776:(e,a,t)=>{"use strict";t.d(a,{F:()=>i,G:()=>r});var s=t(5036);t(2);var l=t(1774);let r=({children:e,className:a,border:t})=>(0,s.jsxs)("h1",{"data-aos":"fade-up","data-aos-duration":"700",className:(0,l.dV)(`font-black text-secondary lg:leading-[120%] md:leading-[120%] leading-[120%]  lg:text-5xl md:text-4xl text-3xl tracking-tight ${t&&"px-6 py-2 border rounded-md border-black lg:w-max lg:max-w-full"}`,a),children:[" ",e]}),i=({children:e,className:a})=>(0,s.jsxs)("p",{"data-aos":"fade-up","data-aos-duration":"700",className:(0,l.m6)("text-black md:text-lg text-base md:leading-[190%]  leading-[190%]",a),children:[" ",e]})},2112:(e,a,t)=>{"use strict";t.d(a,{t:()=>d});var s=t(6843);let l=(0,s.createProxy)(String.raw`/workspaces/loving-assembly-website/ui/buttons.tsx`),{__esModule:r,$$typeof:i}=l;l.default;let d=(0,s.createProxy)(String.raw`/workspaces/loving-assembly-website/ui/buttons.tsx#NormalBtn`)},7481:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var s=t(337);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[638,749,337,774,404],()=>t(4410));module.exports=s})();
=======
(()=>{var e={};e.id=499,e.ids=[499],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8978:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>n});var s=t(482),l=t(9108),r=t(2563),i=t.n(r),o=t(8300),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(a,d);let n=["",{children:["our-leadership",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6569)),"/home/ameen/Desktop/codeface/loving-assembly-website/app/our-leadership/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8320)),"/home/ameen/Desktop/codeface/loving-assembly-website/app/layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,4515)),"/home/ameen/Desktop/codeface/loving-assembly-website/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/ameen/Desktop/codeface/loving-assembly-website/app/our-leadership/page.tsx"],m="/our-leadership/page",x={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:l.x.APP_PAGE,page:"/our-leadership/page",pathname:"/our-leadership",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},7012:(e,a,t)=>{Promise.resolve().then(t.bind(t,8229)),Promise.resolve().then(t.t.bind(t,1900,23)),Promise.resolve().then(t.t.bind(t,1476,23)),Promise.resolve().then(t.bind(t,5985))},6569:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var s=t(5036),l=t(2606),r=t(6789),i=t(9860),o=t(3481),d=t(776),n=t(2112),c=t(2813),m=t(6274);t(2);var x=t(4515);let p=async()=>{let[e,a]=await Promise.all([(0,r.n)("team-page"),(0,r.n)("teams")]);return e||a?s.jsx(s.Fragment,{children:(0,s.jsxs)(l.Z,{classBottom:`${o.Z.y} flex-col items-center mt-20`,children:[s.jsx(d.G,{border:!0,className:"text-center max-w-[900px]",children:e.page.acf.title}),s.jsx(d.F,{className:"sm:mt-4 mt-2 text-center max-w-[900px] text-black",children:e.page.acf.description}),s.jsx("section",{className:"grid xl:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-10 lg:mt-16 md:mt-14 mt-6",children:a.teams.edges.sort(()=>-1).map((e,a)=>(0,s.jsxs)("div",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"w-full flex flex-col border border-black h-full rounded-xl ",children:[s.jsx(c.default,{src:e.node.acf.teamMemberDetails.image.sourceUrl,alt:"",loading:"lazy",width:e.node.acf.teamMemberDetails.image.mediaDetails.width,height:e.node.acf.teamMemberDetails.image.mediaDetails.height,className:" rounded-[10px] overflow-hidden  aspect-[16/17] shrink-0 max-h-[900px] object-cover object-top"}),(0,s.jsxs)("div",{className:"flex flex-col h-full md:py-6 py-3 md:px-10 px-3",children:[s.jsx("p",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:" font-bold text-black text-sm",children:e.node.acf.teamMemberDetails.designation}),s.jsx("h2",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"mt-1 lg:text-3xl text-2xl font-bold text-primary",children:e.node.acf.teamMemberDetails.name}),s.jsx(d.F,{className:"mt-2",children:(0,i.Z)(e.node.acf.teamMemberDetails.details)}),(0,s.jsxs)("div",{className:"flex flex-col mt-auto",children:[e.node.acf.teamMemberDetails.buttons&&(0,s.jsxs)("div",{className:"flex flex-col w-full mt-8",children:[s.jsx("h3",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"md:text-2xl text-xl font-bold ",children:e.node.acf.teamMemberDetails.buttonsTitle}),s.jsx("div",{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"mt-4 flex items-center justify-start gap-4",children:e.node.acf.teamMemberDetails.buttons.map((e,a)=>s.jsx(n.t,{href:e.link,mode:0===a?"night":"day",children:e.title},a))})]}),(0,s.jsxs)("div",{className:"mt-8 flex items-center justify-between gap-10",children:[s.jsx("div",{className:"flex items-center gap-4",children:e.node.acf.teamMemberDetails.socialMedia?.map((e,t)=>s.jsx(m.default,{href:`${e.link}`,shallow:!0,"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,target:"_blank",className:"w-8 h-8 flex items-center justify-center border border-black rounded-md",children:s.jsx(c.default,{src:e.icon.sourceUrl,alt:"",loading:"lazy",width:20,height:20,className:"h-[14px] w-auto object-contain"})},t))}),s.jsx(m.default,{href:`/our-leadership/${e.node.slug}`,shallow:!0,children:s.jsx(n.t,{"data-aos":"fade-up","data-aos-duration":"700","data-aos-delay":300*a,className:"sm:text-[1rem]",children:"Read More"})})]})]})]})]},a))})]})}):s.jsx(x.default,{})}},2606:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var s=t(5036),l=t(3481);t(2);var r=t(1774);let i=({children:e,classTop:a,classBottom:t})=>s.jsx("section",{className:(0,r.m6)(`${l.Z.x} w-full flex flex-1`,a),children:s.jsx("div",{className:(0,r.m6)("max-w-[1650px] mx-auto flex w-full",t),children:e})})},9860:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var s=t(5036);let l=e=>s.jsx(s.Fragment,{children:e?.split("\r\n").map((e,a)=>s.jsxs("p",{className:"group flex flex-col",children:[e,s.jsx("span",{className:"group-last:hidden h-2"})]},a))})},6274:(e,a,t)=>{"use strict";t.d(a,{default:()=>l.a});var s=t(8026),l=t.n(s)},8026:(e,a,t)=>{"use strict";let{createProxy:s}=t(6843);e.exports=s("/home/ameen/Desktop/codeface/loving-assembly-website/node_modules/next/dist/client/link.js")},3481:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});let s={x:"xl:px-28 lg:px-24 sm:px-16 px-6",y:"sm:py-24 py-16",l:"xl:pl-28 lg:pl-24 sm:pl-16 pl-6",t:"sm:pt-24 pt-16",b:"sm:pb-24 pb-16"}},776:(e,a,t)=>{"use strict";t.d(a,{F:()=>i,G:()=>r});var s=t(5036);t(2);var l=t(1774);let r=({children:e,className:a,border:t})=>(0,s.jsxs)("h1",{"data-aos":"fade-up","data-aos-duration":"700",className:(0,l.dV)(`font-black text-secondary lg:leading-[120%] md:leading-[120%] leading-[120%]  lg:text-5xl md:text-4xl text-3xl tracking-tight ${t&&"px-6 py-2 border rounded-md border-black lg:w-max lg:max-w-full"}`,a),children:[" ",e]}),i=({children:e,className:a})=>(0,s.jsxs)("p",{"data-aos":"fade-up","data-aos-duration":"700",className:(0,l.m6)("text-black md:text-lg text-base md:leading-[190%]  leading-[190%]",a),children:[" ",e]})},2112:(e,a,t)=>{"use strict";t.d(a,{t:()=>o});var s=t(6843);let l=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/loving-assembly-website/ui/buttons.tsx`),{__esModule:r,$$typeof:i}=l;l.default;let o=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/loving-assembly-website/ui/buttons.tsx#NormalBtn`)},7481:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>l});var s=t(337);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[638,749,337,774,641],()=>t(8978));module.exports=s})();
>>>>>>> 7e8d0d4 (afsa)
