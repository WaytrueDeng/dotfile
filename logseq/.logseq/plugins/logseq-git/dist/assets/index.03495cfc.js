import"./vendor.ef8f85c1.js";const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}};k();const p=`
#injected-ui-item-git-logseq-git {
  position: relative;
}
#injected-ui-item-git-logseq-git #logseq-git--git #plugin-git-content-wrapper {
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--ls-secondary-background-color);
  padding: 10px;
  border-radius: .375rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  display: none;
}
#injected-ui-item-git-logseq-git #logseq-git--git #plugin-git-content-wrapper::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 8px 10px;
  border-color: transparent transparent var(--ls-secondary-background-color) transparent;
}
#injected-ui-item-git-logseq-git #logseq-git--git #plugin-git-content-wrapper .plugin-git-mask {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  top: -36px;
  left: -80vw;
}
`,q=`
#injected-ui-item-git-logseq-git #logseq-git--git #plugin-git-content-wrapper {
  display: block;
}
`,x=`
#injected-ui-item-git-logseq-git #logseq-git--git #plugin-git-content-wrapper {
  display: none;
}
`,v=`
${p}
#injected-ui-item-git-logseq-git::after {
  display: none;
}
`,C=`
${p}
#injected-ui-item-git-logseq-git::after {
  display: block;
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: rgb(237, 66, 69);
  right: 8px;
  top: 6px;
}
`,g=`
${p}
#injected-ui-item-git-logseq-git::after {
  display: block;
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: rgb(237, 66, 69);
  right: 8px;
  top: 6px;
  animation: blink 1s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`,h=[{key:"status",title:"Check Status",event:"check"},{key:"log",title:"Show Log",event:"log"},{key:"pull",title:"Pull",event:"pull"},{key:"pullRebase",title:"Pull Rebase",event:"pullRebase"},{key:"checkout",title:"Checkout",event:"checkout"},{key:"commit",title:"Commit",event:"commit"},{key:"push",title:"Push",event:"push"},{key:"commitAndPush",title:"Commit & Push",event:"commitAndPush"}],S=[{key:"buttons",title:"Buttons",type:"enum",default:["Check Status","Show Log","Pull Rebase","Commit & Push"],description:"Select buttons to show",enumPicker:"checkbox",enumChoices:h.map(({title:t})=>t)},{key:"checkWhenDBChanged",title:"Check Status when DB Changed",type:"boolean",default:!0,description:"Check status when DB changed, restart logseq to take effect"},{key:"autoPush",title:"Auto Push",type:"boolean",default:!1,description:"Auto push when logseq hide"}],P=async(t=!0)=>{const e=await logseq.Git.execCommand(["status","--porcelain"]);return console.log("[faiz:] === git status",e),t&&(e.exitCode===0?logseq.App.showMsg("Git status success"):logseq.App.showMsg(`Git status failed
${e.stderr}`,"error")),e},A=async(t=!0)=>{const e=await logseq.Git.execCommand(["log",'--pretty=format:"%h %ad | %s [%an]"','--date=format:"%Y-%m-%d %H:%M:%S"',"--name-status"]);return console.log("[faiz:] === git log",e),t&&(e.exitCode===0?logseq.App.showMsg("Git log success"):logseq.App.showMsg(`Git log failed
${e.stderr}`,"error")),e},G=async(t=!0)=>{const e=await logseq.Git.execCommand(["pull"]);return console.log("[faiz:] === git pull",e),t&&(e.exitCode===0?logseq.App.showMsg("Git pull success"):logseq.App.showMsg(`Git pull failed
${e.stderr}`,"error")),e},M=async(t=!0)=>{const e=await logseq.Git.execCommand(["pull","--rebase"]);return console.log("[faiz:] === git pull --rebase",e),t&&(e.exitCode===0?logseq.App.showMsg("Git pull --rebase success"):logseq.App.showMsg(`Git pull --rebase failed
${e.stderr}`,"error")),e},I=async(t=!0)=>{const e=await logseq.Git.execCommand(["checkout","."]);return console.log("[faiz:] === git checkout .",e),t&&(e.exitCode===0?logseq.App.showMsg("Git checkout success"):logseq.App.showMsg(`Git checkout failed
${e.stderr}`,"error")),e},m=async(t=!0,e)=>{await logseq.Git.execCommand(["add","."]);const s=await logseq.Git.execCommand(["commit","-m",e]);return console.log("[faiz:] === git commit",s),t&&(s.exitCode===0?logseq.App.showMsg("Git commit success"):logseq.App.showMsg(`Git commit failed
${s.stdout||s.stderr}`,"error")),s},f=async(t=!0)=>{const e=await logseq.Git.execCommand(["push"]);return console.log("[faiz:] === git push",e),t&&(e.exitCode===0?logseq.App.showMsg("Git push success"):logseq.App.showMsg(`Git push failed
${e.stderr}`,"error")),e},r=async()=>{console.log("Checking status...");const t=await P(!1);return t?.stdout===""?(console.log("No changes",t),a(v)):(console.log("Need save",t),a(C)),t};let y="";const a=t=>{y=t,logseq.provideStyle({key:"git",style:t})},w=()=>y,T=()=>{const t=w();a(`${t}
${q}`)},c=()=>{const t=w();a(`${t}
${x}`)},l=(t,e=100,s)=>{let n=null;return function(){const o=s||this,i=arguments;n&&(clearTimeout(n),n=null),n=setTimeout(function(){t.apply(o,i)},e)}},d=l(()=>{r()},2e3),$=async()=>{await logseq.Git.execCommand(["fetch"]);const t=await logseq.Git.execCommand(["rev-parse","HEAD"]),e=await logseq.Git.execCommand(["rev-parse","@{u}"]);return t.stdout===e.stdout},b=async()=>{await $()||logseq.UI.showMsg("The current repository is not synchronized with the remote repository, please check.","warning",{timeout:0})};console.log("=== logseq-plugin-git loaded ==="),logseq.ready(()=>{const t={check:l(async function(){const e=await r();e?.stdout===""?logseq.UI.showMsg("No changes detected."):logseq.UI.showMsg(`Changes detected:
`+e.stdout,"success",{timeout:0}),c()}),pull:l(async function(){console.log("[faiz:] === pull click"),a(g),c(),await G(!1),r()}),pullRebase:l(async function(){console.log("[faiz:] === pullRebase click"),a(g),c(),await M(),r()}),checkout:l(async function(){console.log("[faiz:] === checkout click"),c(),I()}),commit:l(async function(){c(),m(!0,`[logseq-plugin-git:commit] ${new Date().toISOString()}`)}),push:l(async function(){a(g),c(),await f(),r()}),commitAndPush:l(async function(){a(g),c(),(await m(!0,`[logseq-plugin-git:commit] ${new Date().toISOString()}`)).exitCode===0&&await f(!0),r()}),log:l(async function(){console.log("[faiz:] === log click");const e=await A(!1);logseq.UI.showMsg(e?.stdout,"success",{timeout:0}),c()}),showPopup:l(async function(){console.log("[faiz:] === showPopup click"),T()}),hidePopup:l(function(){console.log("[faiz:] === hidePopup click"),c()})};logseq.provideModel(t),logseq.App.registerUIItem("toolbar",{key:"git",template:'<a data-on-click="showPopup" class="button"><i class="ti ti-brand-git"></i></a><div id="plugin-git-content-wrapper"></div>'}),logseq.useSettingsSchema(S),setTimeout(()=>{const e=logseq.settings?.buttons?.map(s=>h.find(n=>n.title===s));e?.length&&logseq.provideUI({key:"git-popup",path:"#plugin-git-content-wrapper",template:`
            <div class="plugin-git-mask" data-on-click="hidePopup"></div>
            <div class="plugin-git-popup flex flex-col">
              ${e.map(s=>'<button data-on-click="'+s?.event+'" class="ui__button bg-indigo-600 hover:bg-indigo-700 focus:border-indigo-700 active:bg-indigo-700 text-center text-sm p-1 m-1">'+s?.title+"</button>").join(`
`)}
            </div>
          `})},1e3),logseq.App.onRouteChanged(async()=>{d()}),logseq.settings?.checkWhenDBChanged&&logseq.DB.onChanged(({blocks:e,txData:s,txMeta:n})=>{d()}),b(),d(),top&&top.document?.addEventListener("visibilitychange",async()=>{const e=top?.document?.visibilityState;e==="visible"?b():e==="hidden"&&logseq.settings?.autoPush&&(await r())?.stdout!==""&&t.commitAndPush()}),logseq.App.registerCommandPalette({key:"logseq-plugin-git:commit&push",label:"Commit & Push",keybinding:{binding:"mod+s",mode:"global"}},()=>t.commitAndPush())});
