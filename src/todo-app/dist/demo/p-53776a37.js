let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),c=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=null,o=!1,i=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!f(l))&&(l+=""),o&&i?r[r.length-1].i+=l:r.push(o?d(null,l):l),i=o)};if(c(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const u=d(e,null);return u.u=t,r.length>0&&(u.$=r),u.m=s,u},d=(e,t)=>({t:0,p:e,i:t,h:null,$:null,u:null,m:null}),y={},m=(e,t,n,s,i,r)=>{if(n!==s){let c=V(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,l=h(n),o=h(s);t.remove(...l.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!l.includes(e))))}else if("key"===t);else if(c||"o"!==t[0]||"n"!==t[1]){const l=f(s);if((c||l&&null!==s)&&!i)try{if(e.tagName.includes("-"))e[t]=s;else{let l=null==s?"":s;"list"===t?c=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==s||!1===s?!1===s&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&r||i)&&!l&&e.setAttribute(t,s=!0===s?"":s)}else t="-"===t[2]?t.slice(3):V(l,u)?u.slice(2):u[2]+t.slice(3),n&&o.rel(e,t,n,!1),s&&o.ael(e,t,s,!1)}},p=/\s/,h=e=>e?e.split(p):[],b=(e,t,n,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.u||a,i=t.u||a;for(l in o)l in i||m(s,l,o[l],void 0,n,t.t);for(l in i)m(s,l,o[l],i[l],n,t.t)},w=(t,n,l)=>{let o,i,r=n.$[l],c=0;if(null!==r.i)o=r.h=s.createTextNode(r.i);else if(o=r.h=s.createElement(r.p),b(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.$)for(c=0;c<r.$.length;++c)i=w(t,r,c),i&&o.appendChild(i);return o},S=(e,n,l,s,o,i)=>{let r,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=w(null,l,o),r&&(s[o].h=r,c.insertBefore(r,n)))},g=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},j=(e,t)=>e.p===t.p&&e.m===t.m,v=(e,t)=>{const n=t.h=e.h,l=e.$,s=t.$,o=t.i;null===o?(b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o,i=0,r=0,c=0,u=0,a=t.length-1,f=t[0],$=t[a],d=l.length-1,y=l[0],m=l[d];for(;i<=a&&r<=d;)if(null==f)f=t[++i];else if(null==$)$=t[--a];else if(null==y)y=l[++r];else if(null==m)m=l[--d];else if(j(f,y))v(f,y),f=t[++i],y=l[++r];else if(j($,m))v($,m),$=t[--a],m=l[--d];else if(j(f,m))v(f,m),e.insertBefore(f.h,$.h.nextSibling),f=t[++i],m=l[--d];else if(j($,y))v($,y),e.insertBefore($.h,f.h),$=t[--a],y=l[++r];else{for(c=-1,u=i;u<=a;++u)if(t[u]&&null!==t[u].m&&t[u].m===y.m){c=u;break}c>=0?(o=t[c],o.p!==y.p?s=w(t&&t[r],n,c):(v(o,y),t[c]=void 0,s=o.h),y=l[++r]):(s=w(t&&t[r],n,r),y=l[++r]),s&&f.h.parentNode.insertBefore(s,f.h)}i>a?S(e,null==l[d+1]?null:l[d+1].h,n,l,r,d):r>d&&g(t,i,a)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),S(n,null,t,s,0,s.length-1)):null!==l&&g(l,0,l.length-1)):e.i!==o&&(n.data=o)},k=(e,t,n)=>{const l=(e=>D(e).S)(e);return{emit:e=>M(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},M=(e,t,n)=>{const l=o.ce(t,n);return e.dispatchEvent(l),l},O=(e,t)=>{t&&!e.g&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.g=t)))},C=(e,t)=>{if(e.t|=16,!(4&e.t))return O(e,e.j),Z((()=>P(e,t)));e.t|=512},P=(e,t)=>{const n=e.v;return H(void 0,(()=>x(e,n,t)))},x=async(e,t,n)=>{const l=e.S,o=l["s-rc"];n&&(e=>{const t=e.k,n=e.S,l=t.t,o=((e,t)=>{let n=u(t),l=G.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=c.get(e=e.head||e);o||c.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);E(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>L(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},E=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.S,o=n.M||d(null,null),i=(e=>e&&e.p===y)(l)?l:$(null,null,l);t=s.tagName,i.p=null,i.t|=4,n.M=i,i.h=o.h=s.shadowRoot||s,e=s["s-sc"],v(o,i)})(n,l)}catch(e){_(e,n.S)}return null},L=e=>{const t=e.S,n=e.v,l=e.j;64&e.t||(e.t|=64,R(t),A(n,"componentDidLoad"),e.O(t),l||T()),e.C(t),e.g&&(e.g(),e.g=void 0),512&e.t&&Y((()=>C(e,!1))),e.t&=-517},T=()=>{R(s.documentElement),Y((()=>M(l,"appload",{detail:{namespace:"demo"}})))},A=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){_(e)}},H=(e,t)=>e&&e.then?e.then(t):t(),R=e=>e.classList.add("hydrated"),U=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),s=e.prototype;l.map((([e,[t]])=>{31&t||2&n&&32&t?Object.defineProperty(s,e,{get(){return((e,t)=>D(this).L.get(t))(0,e)},set(t){((e,t,n)=>{const l=D(e),s=l.L.get(t),o=l.t,i=l.v;n=(e=>(null==e||f(e),e))(n),8&o&&void 0!==s||n===s||(l.L.set(t,n),i&&2==(18&o)&&C(l,!1))})(this,e,t)},configurable:!0,enumerable:!0}):1&n&&64&t&&Object.defineProperty(s,e,{value(...t){const n=D(this);return n.T.then((()=>n.v[e](...t)))}})}))}return e},W=(e,t={})=>{const n=[],i=t.exclude||[],c=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let y,m=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],P:t[2],A:t[3]};l.P=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),N(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),m?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=D(e),n=t.k,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.j=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=B(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(U(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){_(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!G.has(t)){const l=()=>{};((e,t,n)=>{let l=G.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,G.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.j,i=()=>C(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return D(this).H}};l.R=e[0],i.includes(s)||c.get(s)||(n.push(s),c.define(s,U(a,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),m=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(T,30)))},q=new WeakMap,D=e=>q.get(e),F=(e,t)=>q.set(t.v=e,t),N=(e,t)=>{const n={t:0,S:e,k:t,L:new Map};return n.T=new Promise((e=>n.C=e)),n.H=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],q.set(e,n)},V=(e,t)=>t in e,_=(e,t)=>(0,console.error)(e,t),z=new Map,B=e=>{const t=e.o.replace(/-/g,"_"),n=e.R,l=z.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(z.set(n,e),e[t])),_)},G=new Map,I=[],J=[],K=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?Y(X):o.raf(X))},Q=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){_(e)}e.length=0},X=()=>{Q(I),Q(J),(n=I.length>0)&&o.raf(X)},Y=e=>i().then(e),Z=K(J,!0);export{y as H,W as b,k as c,$ as h,i as p,F as r}