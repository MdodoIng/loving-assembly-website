exports.id=404,exports.ids=[404],exports.modules={4359:(e,t,i)=>{Promise.resolve().then(i.bind(i,8229)),Promise.resolve().then(i.t.bind(i,1900,23))},8932:(e,t,i)=>{Promise.resolve().then(i.bind(i,7823))},7329:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2583,23)),Promise.resolve().then(i.t.bind(i,6840,23)),Promise.resolve().then(i.t.bind(i,8771,23)),Promise.resolve().then(i.t.bind(i,3225,23)),Promise.resolve().then(i.t.bind(i,9295,23)),Promise.resolve().then(i.t.bind(i,3982,23))},8264:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(5344),l=i(7304);i(3729);var a=i(9377);let r=({children:e,classTop:t,classBottom:i})=>s.jsx("section",{className:(0,a.m6)(`${l.Z.x} w-full flex flex-1`,t),children:s.jsx("div",{className:(0,a.m6)("max-w-[1650px] mx-auto flex w-full",i),children:e})})},7823:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>A});var s=i(5344),l=i(3729),a=i(9410);let r={src:"/_next/static/media/arrow down.35c2f499.svg",height:4,width:9,blurWidth:0,blurHeight:0};var n=i(6506),o=i(5985);let c=({links:e,expand:t,setExpand:i,liveLink:c,forwardToAmazon:d})=>{let[h,u]=(0,l.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"lg:hidden flex items-center gap-4",children:[s.jsx(n.default,{onClick:()=>u(!1),href:`${c.link}`,shallow:!0,target:"_blank",children:s.jsx(o.NormalBtn,{mode:"day",className:"bg-transparent",children:c.name})}),s.jsx("div",{className:"flex items-center justify-center w-[45px] h-[45px] ",children:(0,s.jsxs)("svg",{onClick:()=>u(!h),width:"73",height:"73",viewBox:"0 0 73 73",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("line",{x1:h?"12.1994":"13.97",y1:h?"14.916":"15.03",x2:h?"58.916":"49.4213",y2:h?"59.8006":"15.03",stroke:"#521575",strokeWidth:"5.94",strokeLinecap:"round",className:"duration-300"}),s.jsx("line",{x1:"13.97",y1:"36.03",x2:"49.4213",y2:"36.03",stroke:"#521575",strokeWidth:"5.94",strokeLinecap:"round",className:`${h&&"opacity-0"} `}),s.jsx("line",{x1:h?"14":"13.97",y1:h?"57.7998":"59.03",x2:h?"56.7998":"49.4213",y2:h?"15":"59.03",stroke:"#521575",strokeWidth:"5.94",strokeLinecap:"round"})]})})]}),(0,s.jsxs)("div",{className:`flex flex-col right-0 items-end justify-start gap-4 absolute top-20 bg-white/90 backdrop-blur-sm  pr-5 pl-20 py-6 rounded-[10px] shadow-md z-50 w-max lg:hidden duration-300 ${h?"translate-x-[0%]":"translate-x-[200%]"}`,children:[s.jsx("menu",{className:"flex flex-col items-end justify-start gap-6 ",children:e.map((e,l)=>s.jsx("li",{onClick:()=>t!==l?i(l):i(null),className:"font-semibold text-sm cursor-pointer",children:e.subLinks?(0,s.jsxs)("div",{className:"relative z-0 flex flex-col items-end justify-center",children:[(0,s.jsxs)("span",{className:"flex items-center justify-start gap-1",children:[e.title,s.jsx(a.default,{src:r,alt:"",width:12,height:7,className:`h-[7px] w-auto object-contain duration-300 ${t===l&&"rotate-180"}`})]}),t===l&&s.jsx("div",{className:"flex flex-col items-end pr-4 justify-center gap-4 py-3",children:e.subLinks.map((e,t)=>s.jsx(n.default,{onClick:()=>{i(null),u(!1)},href:e.link,shallow:!0,className:"text-center ",children:e.title},t))})]}):s.jsx(n.default,{href:e.link,onClick:()=>u(!1),children:e.title})},l))}),s.jsx(n.default,{onClick:()=>u(!1),href:`${d.link}`,shallow:!0,children:s.jsx(o.NormalBtn,{mode:"day",className:"bg-transparent mt-4 ",children:d.name})})]})]})};var d=i(8264);let h=({headerTransparent:e,data:t})=>{let[i,h]=(0,l.useState)(null),[u,m]=(0,l.useState)();if((0,l.useEffect)(()=>{let e=t.blogs.slice(0,3).map(e=>({title:e.node.acf.title,link:`/blog/${e.node.slug}`})),i=t.ministries.map(e=>({title:e.title,link:`/${e.link}`}));m({...t,blogs:e,ministries:i})},[t]),!u?.blogs&&!u?.liveLink&&!u?.logo&&!u?.ministries)return;let f=[{title:"LGA",link:"",subLinks:[{title:"Our Leadership",link:"/our-leadership"},{title:"Our Church",link:"/our-church"}]},{title:"Ministries",link:"",subLinks:u?.ministries},{title:"Blog",link:"",subLinks:u?.blogs},{title:"Contact Us",link:"/contact-us"}];return s.jsx(d.Z,{classTop:`${!e&&"bg-off-white"} `,children:(0,s.jsxs)("nav",{onMouseLeave:()=>h(null),className:"flex items-center  justify-between sm:gap-28 gap-8 py-2  z-50 w-full ",children:[s.jsx(n.default,{href:"/",shallow:!0,children:s.jsx(a.default,{src:u.logo,alt:"",width:220,height:160,className:"lg:h-[90px] h-[62px] w-auto max-lg:!max-w-max object-contain"})}),(0,s.jsxs)("menu",{className:"flex items-center justify-center gap-10  max-lg:hidden",children:[f.map((e,t)=>s.jsx("li",{onClick:()=>i!==t?h(t):h(null),onMouseOver:()=>h(t),className:"font-bold text-sm cursor-pointer",children:e.subLinks?(0,s.jsxs)("div",{className:"relative z-0 flex flex-col items-center justify-center",children:[(0,s.jsxs)("span",{className:"flex items-center justify-start gap-1",children:[e.title,s.jsx(a.default,{src:r,alt:"",width:12,height:7,className:`h-[7px] w-auto object-contain duration-300 ${i===t&&"rotate-180"}`})]}),i===t&&s.jsx("div",{className:"absolute top-0 w-[230px] ",children:s.jsx("div",{className:"flex flex-col items-start justify-center w-full  mt-[65px] bg-white/90 backdrop-blur-md  px-2 py-6 rounded-[10px] shadow-md gap-1",children:e.subLinks.map((e,t)=>s.jsx(n.default,{onClick:()=>h(0),href:e.link,shallow:!0,className:"text-start px-4 hover:bg-secondary hover:text-white duration-300 w-full  py-2 rounded-md",children:e.title},t))})})]}):s.jsx(n.default,{href:e.link,children:e.title})},t)),(0,s.jsxs)("div",{className:"flex items-center justify-center gap-4 max-lg:hidden ml-6",children:[s.jsx(n.default,{href:`${u.forwardToAmazon.link}`,shallow:!0,className:"",children:s.jsx(o.NormalBtn,{mode:"day",className:"hover:bg-primary hover:border-primary hover:text-white",children:u.forwardToAmazon.name})}),s.jsx(n.default,{href:`${u.liveLink.link}`,shallow:!0,target:"_blank",className:"",children:s.jsx(o.NormalBtn,{mode:"night",className:"hover:bg-primary hover:border-primary hover:text-white",children:u.liveLink.name})})]})]}),s.jsx(c,{links:f,liveLink:u.liveLink,expand:i,setExpand:h,forwardToAmazon:u.forwardToAmazon})]})})};var u=i(7304);let m=[{title:"Privacy Policy",link:""},{title:"Terms of Service",link:""}],f=({data:e})=>{let[t,i]=(0,l.useState)();if((0,l.useEffect)(()=>{i({links:e.footerLinks.map(e=>({title:e.title,link:`/${e.link}`})),logo:e.logo})},[e.footerLinks,e.logo]),!t?.links&&!t?.logo)return;let r=[{title:"Our Leadership",link:"/our-leadership"},...t.links,{title:"Contact Us",link:"/contact-us"}];return(0,s.jsxs)(d.Z,{classBottom:`${u.Z.t} flex-col items-center`,children:[s.jsx(n.default,{href:"/",scroll:!0,shallow:!0,"data-aos":"fade-up","data-aos-duration":"700",children:s.jsx(a.default,{src:t.logo,alt:"",loading:"lazy",height:120,width:160,className:""})}),s.jsx("menu",{className:"flex items-center justify-center gap-6 lg:mt-16 md:mt-14 mt-6 max-sm:flex-wrap ",children:r.map((e,t)=>s.jsx("li",{children:s.jsx(n.default,{href:e.link,shallow:!0,className:"font-semibold text-base px-4 py-2 border rounded-lg hover:border-black border-transparent duration-300",children:e.title})},t))}),(0,s.jsxs)("div",{className:"w-full border-t border-black py-4 mt-16 flex items-center sm:justify-between justify-center lg:gap-20 md:gap-14 gap-6 flex-wrap max-sm:text-center",children:[(0,s.jsxs)("p",{className:"text-sm",children:["Copyrights \xa9 ",new Date().getFullYear(),". All Rights Reserved. ",s.jsx("br",{}),"Designed by Codeface."]}),s.jsx("div",{className:"flex items-center justify-center gap-4",children:m.map((e,t)=>s.jsx(n.default,{href:e.link,className:"text-sm underline ",children:e.title},t))})]})]})};var x=i(717);i(8593);let g=()=>{let[e,t]=(0,l.useState)({x:0,y:0}),i=e=>{t({x:e.clientX,y:e.clientY})};return(0,l.useEffect)(()=>(window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)),[]),e};var p=i(954);let b=()=>{let{x:e,y:t}=g();return s.jsx("main",{className:"h-full w-full inset-0 fixed top-0 left-0 -z-10 bg-white max-md:hidden pointer-events-none opacity-30",children:s.jsx(p.E.div,{style:{width:"684px",height:"684px"},className:" flex items-center justify-center",animate:{x:`${e-342}px`,y:`${t-342}px`},transition:{type:"tween",ease:"linear",duration:2,delay:.5},children:(0,s.jsxs)("svg",{width:"1256",height:"1349",viewBox:"0 0 1256 1349",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"animate-spin",style:{animationDuration:"20s"},children:[s.jsx("g",{filter:"url(#filter0_f_48_87)",children:s.jsx("path",{d:"M784.579 702.076C779.156 643.968 414.625 318.369 392.544 299C345.605 438.007 264.396 737.561 315.066 823.715C378.404 931.409 392.544 906.422 508.372 972.666C624.201 1038.91 640.859 978.283 721.048 906.422C801.237 834.562 790.002 760.184 784.579 702.076Z",fill:"#4A165F"})}),s.jsx("g",{filter:"url(#filter1_f_48_87)",children:s.jsx("path",{d:"M507.211 1017.08C549.671 1048.17 933.472 1049.83 956.476 1049.73C881.056 944.406 709.826 727.743 628.259 703.658C526.302 673.553 537.369 695.429 441.095 716.608C344.821 737.788 379.379 781.752 393.952 865.079C408.526 948.407 464.75 985.988 507.211 1017.08Z",fill:"#DD3333",fillOpacity:"0.34"})}),(0,s.jsxs)("defs",{children:[(0,s.jsxs)("filter",{id:"filter0_f_48_87",x:"0",y:"0",width:"1087.4",height:"1300.15",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[s.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),s.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.jsx("feGaussianBlur",{stdDeviation:"149.5",result:"effect1_foregroundBlur_48_87"})]}),(0,s.jsxs)("filter",{id:"filter1_f_48_87",x:"76.8184",y:"389.892",width:"1178.66",height:"958.84",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[s.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),s.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),s.jsx("feGaussianBlur",{stdDeviation:"149.5",result:"effect1_foregroundBlur_48_87"})]})]})]})})})};var w=i(8229);let k=()=>s.jsx("div",{className:"w-screen h-svh bg-off-white flex items-center justify-center ",children:(0,s.jsxs)("div",{role:"status",className:"flex items-center justify-center sm:h-40 h-20 max-w-sm  rounded-lg animate-pulse",children:[s.jsx(a.default,{src:w.default,alt:"",placeholder:"empty",priority:!0,className:"h-full w-full object-contain"}),s.jsx("span",{className:"sr-only",children:"Loading..."})]})}),A=({children:e,headerTransparent:t,data:i})=>{let[a,r]=(0,l.useState)(!1);return((0,l.useLayoutEffect)(()=>{"undefined"!=typeof document&&x.Z.init({once:!0})},[]),(0,l.useEffect)(()=>{let e=setTimeout(()=>{r(!0)},1200);return()=>clearTimeout(e)},[]),a)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("main",{className:"flex flex-col w-full flex-1 items-center justify-center text-black relative z-10 overflow-hidden ",children:[s.jsx(h,{headerTransparent:t,data:i}),e,s.jsx(f,{data:i})]}),s.jsx(b,{})]}):s.jsx(k,{})}},7304:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});let s={x:"xl:px-28 lg:px-24 sm:px-16 px-6",y:"sm:py-24 py-16",l:"xl:pl-28 lg:pl-24 sm:pl-16 pl-6",t:"sm:pt-24 pt-16",b:"sm:pb-24 pb-16"}},5985:(e,t,i)=>{"use strict";i.r(t),i.d(t,{NormalBtn:()=>r});var s=i(5344);i(3729);var l=i(8428),a=i(9377);let r=({children:e,onClick:t,href:i,mode:r="night",className:n})=>{let o=(0,l.useRouter)();return s.jsx("button",{onClick:()=>{i&&o.push(i)},name:"button",className:(0,a.m6)(`px-8 py-3 border border-black font-semibold sm:text-sm text-xs rounded-md  ${"night"===r?"bg-secondary border-secondary text-white hover:bg-transparent hover:border-black hover:text-black duration-300":"bg-white text-black hover:bg-secondary hover:border-secondary hover:text-white duration-300"}`,n),children:e})}},8320:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f,metadata:()=>m});var s=i(5036),l=i(9624),a=i.n(l),r=i(4355),n=i.n(r);i(7633);let o=(0,i(6843).createProxy)(String.raw`/workspaces/loving-assembly-website/components/layout/index.tsx`),{__esModule:c,$$typeof:d}=o,h=o.default;var u=i(6789);let m={title:"Loving Grace Assembly",description:"",manifest:"favicon_io/site.webmanifest"};async function f({children:e}){let[t,i]=await Promise.all([(0,u.n)("blogs"),(0,u.n)("utilities")]),l={blogs:t.blogs.edges,logo:i.utility.acf.logo.sourceUrl,ministries:i.utility.acf.ministriesMenuLinks,footerLinks:i.utility.acf.footerLinks,liveLink:i.utility.acf.liveLink,forwardToAmazon:i.utility.acf.forwardToAmazon};return s.jsx("html",{lang:"en",className:"scroll-smooth antialiased",suppressHydrationWarning:!0,children:s.jsx("body",{className:`${a().className} ${a().variable} ${n().variable}`,children:s.jsx(h,{data:l,children:e})})})}},4515:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(5036),l=i(2813);let a={src:"/_next/static/media/logo.0e08d699.webp",height:133,width:158,blurDataURL:"data:image/webp;base64,UklGRtAAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAQCFiI1+AAEAIv////8ZAAAA0v//yAAABhJ49fRuDwQYNScVFik1GSEoKywkMSokAQ4kIyogCAIAVlA4IHAAAACQAgCdASoIAAcAAkA4JbACdGuAwQCxcgVzppZSegD+7mDxuDD2lRM88Gbhs8KbcZD9fdl1hIt+djeOSUWdezCZkN3q/oBsdr351ZXQeLEMqs5XhQw5WN5Xa36pC4gr707cHcCfhWdvYh+VFr0bvNAA",blurWidth:8,blurHeight:7},r=()=>s.jsx("div",{className:"w-screen h-svh bg-off-white flex items-center justify-center ",children:(0,s.jsxs)("div",{role:"status",className:"flex items-center justify-center sm:h-40 h-20 max-w-sm  rounded-lg animate-pulse",children:[s.jsx(l.default,{src:a,alt:"",placeholder:"empty",priority:!0,className:"h-full w-full object-contain"}),s.jsx("span",{className:"sr-only",children:"Loading..."})]})})},6789:(e,t,i)=>{"use strict";i.d(t,{n:()=>p});let s=`{
    page(id: "cG9zdDoxMA==") {
      id
      title
      slug
      acf : acfHome {
        heroSection {
          bannerImages {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          bannerImagesMobile {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          title
          subtitle
          button {
            title
            link
          }
        }
        firstSectionWelcome {
          buttion1Text
          button1Link
          button2Link
          button2Text
          description
          title
          right {
            image {
              sourceUrl
            }
            title {
              text
              backgroundColor
            }
          }
        }
        
        secondSectionChurch {
          button1Link
          button1Text
          button2Link
          button2Text
          description
          title
          videoLink
          sectionImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        thirdSectionWho {
          buttonLink
          buttonText
          description
          title
          sectionImage{
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        fourthSection {
          fieldGroupName
          sectionDescription
          sectionTitle
          offerings {
            icon {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            link
            title
          }
        }
        slider {
          sourceUrl
          mediaDetails{
            height
            width
          }
        }
        sixthSection {
          description
          title
          boxSection {
            title
            description
            image {
              sourceUrl
              mediaDetails {
               height
               width
               }
            }
          }
        }
        seventhSectionJoinus {
          description
          title
          backgroundImage {
            sourceUrl
          }
          button {
            link
            title
          }
        }
        eighthSection {
          description
          fieldGroupName
          title
        }
        associated {
          title
          subtitle
          contents {
            title
            icon {
              sourceUrl
            }
          }
        }
      }
    }
}`,l=`
{
  page(id: "cG9zdDoxMTg=") {
    title
    slug
    acf: acfKidsOfExcellence {
      bannerImage {
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
      firstSection {
        title
        description
        gallery {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      secondSection {
        programmes {
          title
          description
          image {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
`,a=`
{
  page(id: "cG9zdDo5MQ==") {
    title
    slug
    acf: acfManOfValourPage {
      bannerImage {
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
      firstSection {
        title
        description
        content
      }
      secondSection {
        logo {
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
        content
        buttonText
        buttonLink
      }
      thirdSection {
        boxes {
          title
          icon {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
          description
        }
      }
    }
  }
}
`,r=`
{
  page(id: "cG9zdDoyNDU=") {
    title
    slug
    acf: acfContactUsPage {
      firstSection {
        title
        description
        boxes {
          title
          description
          link
          icon {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      socialMedia {
       title
        subtitle
        links {
          icon {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          link
        }
      }
      connectToForm {
        title
        subtitle
        button {
          link
          title
        }
      }
      secondSection {
        title
        description
        boxesLayout {
          title
          description
          icon {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
`,n=`
{
  teams {
    edges {
      node {
        title
        slug
        acf: acfTeamsPosttype {
          ministering
          teamMemberDetails {
            name
            image {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
            designation
            details
            buttonsTitle
            buttons {
              link
              title
            }
            socialMedia {
              icon {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
              link
            }
            description
          }
        }
      }
    }
  }
}
`,o=`
{
  page(id: "cG9zdDoyMzk=") {
    title
    acf: acfTeamsPage {
      title
      description
    }
  }
}
`,c=`
{
  blogs {
    edges {
      node {
        title
        slug
        date
        author {
          node {
            name
            slug
          }
        }
        acf: acfBolgPost {
          title
          bannerImage {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          content
        }
      }
    }
  }
}
`,d=`query gg($slug: String!) {
  users(where: {nicename: $slug}) {
    edges {
      node {
        avatar {
          url
        }
        name
        slug
        blogs {
          edges {
            node {
              title
              slug
              acf: acfBolgPost {
                title
                content
                bannerImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
}`,h=`query PageBySlug($slug: String!) {
  pages(where: {name: $slug}) {
    nodes {
      title
      slug
      acf: acfMinistryPage {
        bannerSection {
          title
          subtitle
          bannerImage {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        firstSection {
          icon {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
          content
          buttonText
          buttonLink
        }
      }
    }
  }
}
`,u=`
{
  users {
    nodes {
      name
      slug
    }
  }
}
`,m=`
{
  page(id: "cG9zdDo0MDA=") {
    id
    title
    acf: acfOurChurch {
      heroSection {
        tittle
        description
        bannerimage {
          sourceUrl
        }
      }
      faithAndTransformation {
        title
        description
        contents {
          title
          description
        }
      }
      journey {
        title
        description
        posts {
          title
          description
          image {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
`,f=`
{
  utility(id: "cG9zdDo0NDI=") {
    title
    acf: acfUtilitiesLinks {
      logo {
        sourceUrl
      }
       liveLink {
            name
            link
          }
      ministriesMenuLinks {
        link
        title
      }
      forwardToAmazon {
        name
        link
      }
      footerLinks {
        link
        title
      }
    }
  }
}
`,x=`{
  page(id: "cG9zdDo3NTg=") {
    acf: acfBuyNowPage {
      products {
        title
        subtitle
        link
        image {
          sourceUrl
        }
      }
      productButtonName
    }
  }
}
`;async function g(e="",{variables:t}={}){let i=await fetch("https://cfuat.in/lgadxb/graphql",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({query:e,variables:t}),cache:"no-store"}),s=await i.json();if(s.errors)throw console.error(s.errors),Error("Failed to fetch API");return s.data}async function p(e,t){return await g({home:s,"kids-of-excellence":l,"man-of-valour":a,"contact-us":r,teams:n,"team-page":o,blogs:c,"blogs-by-slug":d,"ministries-by-slug":h,users:u,"our-church":m,utilities:f,"buy-now":x}[e],{variables:{slug:t}})}},8229:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});let s={src:"/_next/static/media/logo.0e08d699.webp",height:133,width:158,blurDataURL:"data:image/webp;base64,UklGRtAAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAQCFiI1+AAEAIv////8ZAAAA0v//yAAABhJ49fRuDwQYNScVFik1GSEoKywkMSokAQ4kIyogCAIAVlA4IHAAAACQAgCdASoIAAcAAkA4JbACdGuAwQCxcgVzppZSegD+7mDxuDD2lRM88Gbhs8KbcZD9fdl1hIt+djeOSUWdezCZkN3q/oBsdr351ZXQeLEMqs5XhQw5WN5Xa36pC4gr707cHcCfhWdvYh+VFr0bvNAA",blurWidth:8,blurHeight:7}},7633:()=>{}};