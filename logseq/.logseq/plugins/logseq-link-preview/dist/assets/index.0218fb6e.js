import{R as f,j as s,a as u,r as c,Z as y,u as k,X as b,b as E,c as L}from"./vendor.0114187b.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};M();const q="1.8.4",T={id:"_pengx17-logseq-link-preview"},A=()=>!window.frameElement?.className.includes("lsp-iframe-sandbox"),d=e=>{const t=e.images&&e.images.length>0?720:400;let n=140;return e.contentType.startsWith("text/html")||e.contentType.startsWith("audio")?n=140:e.contentType.startsWith("image")||e.contentType.startsWith("video")?n=300:n=100,e.description||(n-=60),[t,n]};function I(e,t){let n;return r=>{clearTimeout(n),n=window.setTimeout(()=>{e(r)},t)}}const P=()=>{f.useEffect(()=>{let e=0;const t=()=>{setTimeout(()=>{window.document.hasFocus()&&(top.focus(),logseq.Editor.restoreEditingCursor())})};return e=setInterval(t,1e3),window.addEventListener("focus",t),()=>{window.removeEventListener("focus",t),clearInterval(e)}},[])};function h(){const e=`${T.id}-${q}`;class t extends Map{persist=I(()=>{localStorage.setItem(e,JSON.stringify(Array.from(this.entries())))},1e3);set=(r,o)=>(this.persist(),super.set(r,o))}return new t(JSON.parse(localStorage.getItem(e)??"[]"))}const p=({data:e,...t})=>{const[n,r]=d(e);return s("a",{style:{width:n,height:r},className:"link_preview__root",...t,children:u("div",{className:"link_preview__card-container",children:[u("div",{className:"link_preview__text-container",children:[e.title&&s("div",{className:"link_preview__text-container-title",children:e.title}),s("div",{className:"link_preview__text-container-description",children:e.description}),u("div",{className:"link_preview__text-container-url-container",children:[e.favicons?.length>0&&s("img",{src:e.favicons[0],width:16,height:16}),s("span",{className:"text-container-url",children:e.url})]})]}),e.images?.[0]&&s("div",{className:"link_preview__cover-container",children:s("img",{className:"link_preview__cover-image",src:e.images[0],alt:"cover"})})]})})},S="https://logseq-plugin-link-preview.vercel.app",g=e=>fetch(`${S}/api/link-preview?url=${encodeURIComponent(e)}`).then(t=>{if(t.status>=400)throw t.statusText;return t.json()}),C=e=>e.contentType.startsWith("text/html"),N=e=>e.contentType.startsWith("video/"),$=e=>e.contentType.startsWith("audio/"),z=e=>e.contentType.startsWith("image/"),R=e=>C(e)?e:N(e)?{...e,images:[],title:e.anchorText??e.url,description:s("video",{controls:!0,src:e.url}),url:e.url}:$(e)?{...e,images:[],title:e.anchorText??e.url,description:s("audio",{controls:!0,src:e.url})}:z(e)?{...e,images:[],title:e.anchorText??e.url,description:s("img",{src:e.url})}:{...e,images:[],title:e.anchorText??e.url,description:e.error!=null?"Failed to load link metadata":"loading ..."};function m(e,t,n,r){return R({contentType:"placeholder",url:e,anchorText:t!==e?t:"",error:r,...n??{}})}async function W(e,t){let n,r;try{n=await g(e)}catch(o){r=o}return m(e,t,n,r)}const v=(e,t)=>{const{data:n,error:r}=y(e??null,g);return c.exports.useMemo(()=>e?m(e,t,n,r):null,[e,t,n,r])};function O(e,t=50){const[n,r]=c.exports.useState(e);return k(()=>{r(e)},t,[e]),n}const j=()=>{const[e,t]=c.exports.useState(null),n=c.exports.useRef(e);return c.exports.useEffect(()=>{const r=i=>{const l=i.composedPath()[0];l.tagName==="A"&&l.href&&l.className.includes("external-link")&&(t(l),n.current=l,l.addEventListener("mouseleave",()=>{t(null)},{once:!0}))},o=i=>{t(n.current),document.addEventListener("mouseleave",()=>{t(null)},{once:!0})};return top?.document.addEventListener("mouseenter",r,!0),document.addEventListener("mouseenter",o,!0),()=>{top?.document.removeEventListener("mouseenter",r,!0),document.removeEventListener("mouseenter",o,!0)}},[]),e},V=(e,t)=>{c.exports.useEffect(()=>{if(e&&t&&top){logseq.showMainUI();const n=t.getBoundingClientRect(),[r,o]=d(e);let i=(n.left+n.right-r)/2;const l=i+r,a=Math.max(l-top.visualViewport.width,0);i=Math.max(i-a,0);let _=n.top-o>0?n.top-o-8:n.top+n.height+8;logseq.setMainUIInlineStyle({top:_+"px",left:i+"px",width:r+"px",height:o+"px",zIndex:20,filter:"drop-shadow(0 0 12px rgba(0, 0, 0, 0.2))",position:"fixed"})}else logseq.hideMainUI()},[t,e])},B=()=>{const e=j(),t=O(e,200),n=v(t?.href,t?.innerText);return P(),V(n,t),n?s(p,{data:n,href:n.url,rel:"noopener noreferrer",target:"_blank"}):null},U=()=>{const e=window.frameElement?.getAttribute("data-url"),t=v(e);return c.exports.useEffect(()=>{if(t&&window.frameElement){const n=window.frameElement,[r,o]=d(t);n.style.maxWidth="calc(100% - 38px)",n.style.width=`${r}px`,n.style.height=`${o}px`}},[t]),t?s(p,{data:t}):null},F=()=>{c.exports.useEffect(()=>{if(frameElement){const e=getComputedStyle(frameElement),t=e.getPropertyValue("--ls-secondary-background-color"),n=e.getPropertyValue("--ls-primary-text-color"),r=e.getPropertyValue("--ls-secondary-text-color"),o=e.getPropertyValue("--ls-border-color");document.documentElement.style.setProperty("--ls-secondary-background-color",t),document.documentElement.style.setProperty("--ls-border-color",o),document.documentElement.style.setProperty("--ls-primary-text-color",n),document.documentElement.style.setProperty("--ls-secondary-text-color",r)}},[])};function D({inline:e}){return F(),s(b,{value:{provider:h},children:e?s(U,{}):s(B,{})})}var Z=`.link_preview__root {
  display: block;
  cursor: pointer;
  user-select: none;
  border-radius: 6px;
  border: 1px solid var(--ls-border-color);
  overflow: hidden;
  text-decoration: none;
}

.link_preview__root,
.link_preview__root * {
  box-sizing: border-box;
}

.link_preview__root:hover {
  border: 1px solid rgba(97, 106, 229, 0.5);
}

.link_preview__card-container {
  width: 100%;
  height: 100%;
  background-color: var(--ls-secondary-background-color);
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.link_preview__text-container {
  padding: 12px 16px;
  flex: 2;
  overflow: hidden;
  display: flex;
  flex-flow: column;
}

.link_preview__cover-container {
  flex: 1;
}

.link_preview__text-container-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: var(--ls-primary-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
}

.link_preview__text-container-description {
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: var(--ls-secondary-text-color);
  margin-top: 6px;
  overflow: auto;
  display: flex;
  flex-grow: 1;
}

.link_preview__text-container-description > * {
  align-self: center;
  flex: 1;
}

.link_preview__text-container-url-container {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 0;
  flex-direction: row;
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: var(--ls-primary-text-color);
  margin-top: 6px;
}

.link_preview__text-container-url-container > img {
  margin-right: 8px;
}

.link_preview__text-container-url {
  flex-grow: 0;
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.link_preview__cover-image {
  object-position: 50% 50%;
  background-size: auto 100%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.link_preview__root img {
  box-shadow: unset;
  margin-left: unset;
}
`;const H=/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,w=":linkpreview",J=()=>{logseq.provideModel({openExternalLink(e){const{url:t}=e.dataset;logseq.App.openExternalLink(t)}}),logseq.provideStyle(Z),logseq.App.onMacroRendererSlotted(async({payload:e,slot:t})=>{const[n,r]=e.arguments;if(!n?.startsWith(w))return;const o=h();let i=o.get("inlinereq$"+r);const l=()=>{const a=E.renderToStaticMarkup(s(p,{data:m(r,null,i)}));logseq.provideUI({key:"linkpreview",slot:t,reset:!0,template:`<span data-on-click="openExternalLink" data-url="${r}">${a}</span>`})};l(),i||(i=await W(r),o.set("inlinereq$"+r,i),l())}),logseq.Editor.registerSlashCommand("Convert to Link Card \u{1FAA7}",async()=>{const e=(await logseq.Editor.getEditingBlockContent()).trim(),t=await logseq.Editor.getCurrentBlock();if(H.test(e)&&t){const n=`{{renderer ${w},${e}}}`;logseq.Editor.updateBlock(t.uuid,n)}else logseq.App.showMsg("The block content does not seem to be a valid URL","warning")})};function x(e){e||J(),top&&L.render(s(f.StrictMode,{children:s(D,{inline:e})}),document.getElementById("app"))}if(A())x(!0);else{const e=logseq.baseInfo.id;console.info(`#${e}: MAIN`),logseq.ready(()=>x(!1)).catch(console.error)}
