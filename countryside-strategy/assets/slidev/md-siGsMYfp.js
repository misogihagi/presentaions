import{d as u,z as d,f as p,o as i,g as l,j as f,k as m,b as _,w as v,v as g,x as k,S as a}from"../modules/vue-DK5eyw4o.js";import{u as c,f as y}from"./context-BQ2U-r3m.js";import"../index-RKKC6u3l.js";import"../modules/shiki-D78l-cVJ.js";function n(e){return e.startsWith("/")?"/presentaions/countryside-strategy"+e.slice(1):e}function h(e,s=!1){const t=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${n(e)})`:`url("${n(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const x={class:"my-auto w-full"},$=u({__name:"cover",props:{background:{default:""}},setup(e){c();const s=e,t=d(()=>h(s.background,!0));return(o,r)=>(i(),p("div",{class:"slidev-layout cover",style:m(t.value)},[l("div",x,[f(o.$slots,"default")])],4))}}),w={__name:"slides.md__slidev_1",setup(e){const{$clicksContext:s,$frontmatter:t}=c();return s.setup(),(o,r)=>(i(),_($,g(k(a(y)(a(t),0))),{default:v(()=>r[0]||(r[0]=[l("h1",null,"田舎が生き残る道の模索",-1)])),_:1},16))}};export{w as default};
