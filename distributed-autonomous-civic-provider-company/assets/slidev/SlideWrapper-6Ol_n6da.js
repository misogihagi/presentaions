import{r as k,z as b,S as F,a0 as Qt,Y as ct,aG as Jt,y as Wt,O as zt,p as te,a1 as ee,d as yt,f as et,i as Ot,o as X,aH as se,E as ne,N as re,aI as A,k as tt,g as H,j as St,F as ie,af as ae,n as oe,e as bt,b as le,av as he}from"../modules/vue-DK5eyw4o.js";import{S as Rt,a as Ut,v as pt,a3 as dt,a4 as Pt,a2 as ue,a5 as ce,a6 as U,a7 as de,a8 as fe,a9 as Et,K as Mt,V as $t,W as kt,b as pe,T as ge,aa as me,_ as Bt,ab as ve,ac as ye,ad as xe,ae as _e,af as we,ag as Se,ah as be}from"../index-e53zh5LO.js";function Pe(t){var e;return{info:k(((e=Rt(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const ft={};function ys(t){function e(s){return ft[s]??(ft[s]=Pe(s))}return{info:b({get(){return e(F(t)).info.value},set(s){e(F(t)).info.value=s}}),update:async(s,n)=>{const r=e(n??F(t)),i=await r.update(s);return i&&(r.info.value=i),i}}}var Ee=Object.defineProperty,Ct=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Lt=(t,e,s)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,gt=(t,e)=>{for(var s in e||(e={}))Me.call(e,s)&&Lt(t,s,e[s]);if(Ct)for(var s of Ct(e))$e.call(e,s)&&Lt(t,s,e[s]);return t},ke=()=>({emit(t,...e){for(let s=this.events[t]||[],n=0,r=s.length;n<r;n++)s[n](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}});function st(t,e){return t-e}function Ce(t){return t<0?-1:1}function nt(t){return[Math.abs(t),Ce(t)]}function Vt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Le=2,C=Le;function Gt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),s.appendChild(n),s}function De(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function Ie(t,e,s){let n=e.x,r=e.y,i=s.x-n,o=s.y-r;if(i!==0||o!==0){const a=((t.x-n)*i+(t.y-r)*o)/(i*i+o*o);a>1?(n=s.x,r=s.y):a>0&&(n+=i*a,r+=o*a)}return i=t.x-n,o=t.y-r,i*i+o*o}function Ne(t,e){let s=t[0];const n=[s];let r;for(let i=1,o=t.length;i<o;i++)r=t[i],De(r,s)>e&&(n.push(r),s=r);return s!==r&&r&&n.push(r),n}function mt(t,e,s,n,r){let i=n,o=0;for(let a=e+1;a<s;a++){const l=Ie(t[a],t[e],t[s]);l>i&&(o=a,i=l)}i>n&&(o-e>1&&mt(t,e,o,n,r),r.push(t[o]),s-o>1&&mt(t,o,s,n,r))}function Ae(t,e){const s=t.length-1,n=[t[0]];return mt(t,0,s,e,n),n.push(t[s]),n}function Dt(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:Ne(t,n),t=Ae(t,n),t}var B=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n,r;const i=this.drauu.el,o=(e=this.drauu.options.cssZoom)!=null?e:1,a=(s=this.drauu.options.coordinateScale)!=null?s:1,l=(n=this.drauu.options.offset)!=null?n:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const d=this.drauu.el.getBoundingClientRect();return{x:(t.pageX/o-d.left+l.x)*a,y:(t.pageY/o-d.top+l.y)*a,pressure:t.pressure}}else{const d=this.drauu.svgPoint;d.x=t.clientX/o+l.x,d.y=t.clientY/o+l.y;const m=d.matrixTransform((r=i.getScreenCTM())==null?void 0:r.inverse());return{x:m.x*a,y:m.y*a,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),r=e?gt(gt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=r.fill)!=null?s:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(C))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Fe=class z extends B{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Vt();const s=Gt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Dt(this.points,1,!0),this.count=0),this.attr("d",z.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",z.toSvgData(Dt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:n}=this.points[0],r=this.brush.size/2;e.setAttribute("d",`M ${s-r} ${n} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 ${-r*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const n=s.x-e.x,r=s.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}static controlPoint(e,s,n,r){const i=s||e,o=n||e,a=.2,l=z.line(i,o),d=l.angle+(r?Math.PI:0),m=l.length*a,y=e.x+Math.cos(d)*m,x=e.y+Math.sin(d)*m;return{x:y,y:x}}static bezierCommand(e,s,n){const r=z.controlPoint(n[s-1],n[s-2],e),i=z.controlPoint(e,n[s-1],n[s+1],!0);return`C ${r.x.toFixed(C)},${r.y.toFixed(C)} ${i.x.toFixed(C)},${i.y.toFixed(C)} ${e.x.toFixed(C)},${e.y.toFixed(C)}`}static toSvgData(e){return e.reduce((s,n,r,i)=>r===0?`M ${n.x.toFixed(C)},${n.y.toFixed(C)}`:`${s} ${z.bezierCommand(n,r,i)}`,"")}},Te=class extends B{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=nt(t.x-this.start.x),[n,r]=nt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(st),[a,l]=[this.start.y,this.start.y+n*r].sort(st);this.attr("cx",(i+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-i)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}},Ke=class extends B{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const o=i.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=i.getPointAtLength(o*a/this.pathSubFactor),d=i.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:d.x,y1:l.y,y2:d.y,segment:a,element:n||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t];if(this.svgPointPrevious&&this.svgPointCurrent){const s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,r=e.x1,i=e.x2,o=t.y1,a=t.y2,l=e.y1,d=e.y2,m=(s-n)*(l-d)-(o-a)*(r-i),y=(s*a-o*n)*(r-i)-(s-n)*(r*d-l*i),x=(s*a-o*n)*(l-d)-(o-a)*(r*d-l*i),f=(p,c,E)=>p>=c&&p<=E?!0:p>=E&&p<=c;if(m===0)return!1;{const p={x:y/m,y:x/m};return f(p.x,s,n)&&f(p.y,o,a)&&f(p.x,r,i)&&f(p.y,l,d)}}},je=class extends B{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Vt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Gt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=n/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(t.getTotalLength()<5)return!1}catch{return!1}return!0}},ze=class extends B{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=nt(t.x-this.start.x),[n,r]=nt(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[i,o]=[this.start.x,this.start.x+e*s].sort(st),[a,l]=[this.start.y,this.start.y+n*r].sort(st);this.attr("x",i),this.attr("y",a),this.attr("width",o-i),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;if(this.el=null,!t)return!1;try{if(!t.getTotalLength())return!1}catch{return!1}return!0}};function It(t,e,s,n=r=>r){return t*n(.5-e*(.5-s))}function Oe(t){return[-t[0],-t[1]]}function $(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function Re(t,e){return[t[0]/e,t[1]/e]}function q(t){return[t[1],-t[0]]}function Nt(t,e){return t[0]*e[0]+t[1]*e[1]}function Ue(t,e){return t[0]===e[0]&&t[1]===e[1]}function Be(t){return Math.hypot(t[0],t[1])}function Ve(t){return t[0]*t[0]+t[1]*t[1]}function At(t,e){return Ve(P(t,e))}function Ht(t){return Re(t,Be(t))}function Ge(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function Z(t,e,s){let n=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],o=t[1]-e[1],a=i*r-o*n,l=i*n+o*r;return[a+e[0],l+e[1]]}function vt(t,e,s){return $(t,M(P(e,t),s))}function Ft(t,e,s){return $(t,M(e,s))}var{min:R,PI:He}=Math,Tt=.275,Y=He+1e-4;function qe(t,e={}){let{size:s=16,smoothing:n=.5,thinning:r=.5,simulatePressure:i=!0,easing:o=u=>u,start:a={},end:l={},last:d=!1}=e,{cap:m=!0,easing:y=u=>u*(2-u)}=a,{cap:x=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let p=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,p):a.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,p):l.taper,O=Math.pow(s*n,2),L=[],h=[],_=t.slice(0,10).reduce((u,S)=>{let g=S.pressure;if(i){let v=R(1,S.distance/s),lt=R(1,1-v);g=R(1,u+(lt-u)*(v*Tt))}return(u+g)/2},t[0].pressure),w=It(s,r,t[t.length-1].pressure,o),rt,it=t[0].vector,V=t[0].point,Q=V,K=V,j=Q,at=!1;for(let u=0;u<t.length;u++){let{pressure:S}=t[u],{point:g,vector:v,distance:lt,runningLength:G}=t[u];if(u<t.length-1&&p-G<3)continue;if(r){if(i){let N=R(1,lt/s),ut=R(1,1-N);S=R(1,_+(ut-_)*(N*Tt))}w=It(s,r,S,o)}else w=s/2;rt===void 0&&(rt=w);let Zt=G<c?y(G/c):1,Yt=p-G<E?f((p-G)/E):1;w=Math.max(.01,w*Math.min(Zt,Yt));let xt=(u<t.length-1?t[u+1]:t[u]).vector,ht=u<t.length-1?Nt(v,xt):1,Xt=Nt(v,it)<0&&!at,_t=ht!==null&&ht<0;if(Xt||_t){let N=M(q(it),w);for(let ut=1/13,W=0;W<=1;W+=ut)K=Z(P(g,N),g,Y*W),L.push(K),j=Z($(g,N),g,Y*-W),h.push(j);V=K,Q=j,_t&&(at=!0);continue}if(at=!1,u===t.length-1){let N=M(q(v),w);L.push(P(g,N)),h.push($(g,N));continue}let wt=M(q(vt(xt,v,ht)),w);K=P(g,wt),(u<=1||At(V,K)>O)&&(L.push(K),V=K),j=$(g,wt),(u<=1||At(Q,j)>O)&&(h.push(j),Q=j),_=S,it=v}let D=t[0].point.slice(0,2),I=t.length>1?t[t.length-1].point.slice(0,2):$(t[0].point,[1,1]),ot=[],J=[];if(t.length===1){if(!(c||E)||d){let u=Ft(D,Ht(q(P(D,I))),-(rt||w)),S=[];for(let g=1/13,v=g;v<=1;v+=g)S.push(Z(u,D,Y*2*v));return S}}else{if(!(c||E&&t.length===1))if(m)for(let S=1/13,g=S;g<=1;g+=S){let v=Z(h[0],D,Y*g);ot.push(v)}else{let S=P(L[0],h[0]),g=M(S,.5),v=M(S,.51);ot.push(P(D,g),P(D,v),$(D,v),$(D,g))}let u=q(Oe(t[t.length-1].vector));if(E||c&&t.length===1)J.push(I);else if(x){let S=Ft(I,u,w);for(let g=1/29,v=g;v<1;v+=g)J.push(Z(S,I,Y*3*v))}else J.push($(I,M(u,w)),$(I,M(u,w*.99)),P(I,M(u,w*.99)),P(I,M(u,w)))}return L.concat(J,h.reverse(),ot)}function Ze(t,e={}){var s;let{streamline:n=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let o=.15+(1-n)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:p,pressure:c=.5})=>[f,p,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let p=1;p<5;p++)a.push(vt(a[0],f,p/4))}a.length===1&&(a=[...a,[...$(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,m=0,y=l[0],x=a.length-1;for(let f=1;f<a.length;f++){let p=i&&f===x?a[f].slice(0,2):vt(y.point,a[f],o);if(Ue(y.point,p))continue;let c=Ge(p,y.point);if(m+=c,f<x&&!d){if(m<r)continue;d=!0}y={point:p,pressure:a[f][2]>=0?a[f][2]:.5,vector:Ht(P(y.point,p)),distance:c,runningLength:m},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function Ye(t,e={}){return qe(Ze(t,e),e)}var Xe=class qt extends B{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return qt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=Ye(e,gt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const r=n.reduce((i,[o,a],l,d)=>{const[m,y]=d[(l+1)%d.length];return i.push(o,a,(o+m)/2,(a+y)/2),i},["M",...n[0],"Q"]);return r.push("Z"),r.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}};function Qe(t){return{draw:new Fe(t),stylus:new Xe(t),line:new je(t),rectangle:new ze(t),ellipse:new Te(t),eraseLine:new Ke(t)}}var Je=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ke(),this._originalPointerId=null,this._models=Qe(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,r=this.eventStart.bind(this),i=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;s&&(this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)}))}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function We(t){return new Je(t)}const ts=Qt(()=>{const{currentSlideNo:t,isPresenter:e}=Ut(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ct("slidev-drawing-enabled",!1),r=ct("slidev-drawing-pinned",!1),i=Jt(ct("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=k(!1),a=k(!1),l=k(!1),d=k(!1),m=k("stylus"),y=b(()=>pt.drawings.syncAll||e.value);let x=!1;const f=b({get(){return m.value},set(h){m.value=h,h==="arrow"?(c.mode="line",i.arrowEnd=!0):(c.mode=h,i.arrowEnd=!1)}}),p=zt({brush:i,acceptsInputTypes:b(()=>n.value&&(!pt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Wt(We(p));function E(){c.clear(),y.value&&Pt(t.value,"")}function O(){var h;l.value=c.canRedo(),a.value=c.canUndo(),d.value=!!((h=c.el)!=null&&h.children.length)}function L(h){x=!0;const _=dt[h||t.value];_!=null?c.load(_):c.clear(),O(),x=!1}return c.on("changed",()=>{if(O(),!x){const h=c.dump(),_=t.value;(dt[_]||"")!==h&&y.value&&Pt(_,c.dump())}}),ce(h=>{x=!0,h[t.value]!=null&&c.load(h[t.value]||""),x=!1,O()}),te(()=>{ee(t,()=>{c.mounted&&L()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",h=>{if(!n.value||ue.value)return;const _=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let w=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?n.value=!1:h.code==="KeyL"&&_?f.value="line":h.code==="KeyA"&&_?f.value="arrow":h.code==="KeyS"&&_?f.value="stylus":h.code==="KeyR"&&_?f.value="rectangle":h.code==="KeyE"&&_?f.value="ellipse":h.code==="KeyC"&&_?E():h.code.startsWith("Digit")&&_&&+h.code[5]<=s.length?i.color=s[+h.code[5]-1]:w=!1,w&&(h.preventDefault(),h.stopPropagation())},!1),{brush:i,brushColors:s,canClear:d,canRedo:l,canUndo:a,clear:E,drauu:c,drauuOptions:p,drawingEnabled:n,drawingMode:f,drawingPinned:r,drawingState:dt,isDrawing:o,loadCanvas:L}}),es=["innerHTML"],xs=yt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=ts();return(s,n)=>F(e)[s.page]?(X(),et("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:F(e)[s.page]},null,8,es)):Ot("v-if",!0)}}),T=zt({});let ss=[],ns=[];U(T,"$syncUp",!0);U(T,"$syncDown",!0);U(T,"$paused",!1);U(T,"$onSet",t=>ss.push(t));U(T,"$onPatch",t=>ns.push(t));de();U(T,"$patch",async()=>!1);const rs=fe(T,T,!0);var Kt;(Kt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||Kt[1];var jt;(jt=window.navigator.userAgent.match(/Chrome\/(\d+)/))==null||jt[1];class is{constructor(){this._screenshotSession=null}getSnapshot(e,s){const n=e+(s?"-dark":"-light"),r=rs.state[n];if(!r)return;const i=Rt(e);if(i&&(r==null?void 0:r.revision)===(i==null?void 0:i.meta.slide.revision))return r.image}async saveSnapshot(e,s,n){return!1}async startCapturing(e){return!1}}const as=new is,os=["id"],ls=["id"],hs={class:"slidev-slide-container w-full h-full relative"},us=["src"],cs=yt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1},contentStyle:{type:Object,default:()=>({})}},setup(t){const e=t,{isPrintMode:s}=Ut(),n=k(null),r=se(n),i=k(null),o=b(()=>e.width??r.width.value),a=b(()=>e.width?e.width/Et.value:r.height.value),l=b(()=>Mt.value&&!s.value?+Mt.value:Math.min(o.value/$t.value,a.value/kt.value)),d=b(()=>({...e.contentStyle,height:`${kt.value}px`,width:`${$t.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),m=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/Et.value}px`}:{});if(e.isMain){const x=document.documentElement.style;ne(()=>x.setProperty("--slidev-slide-scale",l.value.toString())),re(()=>x.removeProperty("--slidev-slide-scale"))}A(ge,l),A(me,i);const y=b(()=>{if(!(e.no==null||!e.useSnapshot))return as.getSnapshot(e.no,pe.value)});return(x,f)=>y.value?(X(),et(ie,{key:1},[Ot(" Image Snapshot "),H("div",hs,[H("img",{src:y.value,class:"w-full h-full object-cover",style:tt(m.value)},null,12,us),f[0]||(f[0]=H("div",{absolute:"","bottom-1":"","right-1":"","p0.5":"","text-cyan:75":"","bg-cyan:10":"",rounded:"",title:"Snapshot"},[H("div",{class:"i-carbon-camera"})],-1))])],2112)):(X(),et("div",{key:0,id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:tt(m.value)},[H("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:tt(d.value)},[St(x.$slots,"default",{},void 0,!0)],12,ls),St(x.$slots,"controls",{},void 0,!0)],12,os))}}),_s=Bt(cs,[["__scopeId","data-v-d54d53ee"]]),ws={render:()=>[]},Ss={render:()=>[]},ds={render:()=>[]},fs={render:()=>[]},ps=["data-slidev-no","lang"],gs=yt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var i,o;return((o=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:o.frontmatter.zoom)??1});A(ve,e.route),A(ye,e.route.meta.slide.frontmatter),A(xe,k(e.route.no)),A(_e,k(e.renderContext)),A(we,ae(e,"clicksContext")),A(Se,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),r=b(()=>({...n.value,"user-select":pt.selectable?void 0:"none"}));return(i,o)=>(X(),et("div",{"data-slidev-no":e.route.no,class:oe(F(be)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:tt(r.value),lang:e.route.meta.slide.frontmatter.lang},[bt(F(fs)),(X(),le(he(e.route.component))),bt(F(ds))],14,ps))}}),bs=Bt(gs,[["__scopeId","data-v-86572f35"]]);export{Ss as G,bs as S,xs as _,_s as a,Pe as b,ts as c,ws as d,ys as u};
