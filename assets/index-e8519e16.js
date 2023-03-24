(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();var f={};Object.defineProperty(f,"__esModule",{value:!0});class l{constructor(e){var a,t,o,i;l.appendCSS(),this.viewID=l.generateViewID();const n=l.getHtml(this.viewID,this.isZoomable=(a=e.isZoomable)!==null&&a!==void 0?a:!0);document.body.appendChild(n),this.view=document.getElementById(this.viewID.toString())||document.createElement("div"),this.images=e.images,this.currentSelected=(t=e.currentSelected)!==null&&t!==void 0?t:0,this.buttons=e.buttons,this.showThumbnails=(o=e.showThumbnails)!==null&&o!==void 0?o:!0,this.isInZoom=!1,this.stretchImages=(i=e.stretchImages)!==null&&i!==void 0?i:!1,this.isHudShow=!0,this.dbcTimer=setTimeout(()=>{},0),this.dbcWaiting=!1,this.isSwiping=!1,this.showImages(),this.showToolbar(),this.addEventToArrows(),this.echoThumbnails(),this.selectImage(this.currentSelected),this.addEventToSwipe(s=>{let r=this.currentSelected;s==="RIGHT"?r--:r++,this.selectImage(r)},()=>this.selectImage(this.currentSelected)),this.addEventToHudAndZoom(),this.addEventToWindowResize(),this.setStyle(e.style),this.addEventToHide(),this.show()}static appendCSS(){if(document.getElementById("imageViewer-style")===null){const e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.id="imageViewer-style",e.appendChild(a),a.appendChild(document.createTextNode(v))}}static generateViewID(){const e=Math.floor(Math.random()*1e9)+1e8;return document.getElementById(e.toString())===null?e:l.generateViewID()}static getHtml(e,a){const t=`
            <div class="imageViewer" id="${e}">
                <div class="shadow"></div>
                <div class="container">
                    <div class="imagesWrapper"></div>
                    <button class="touchSurface"></button>
                    <div class="toolbar">
                        <button class="defaultButton closeButton" title="Close"><div><svg fill="#bfbfbf" width="21" height="21" viewBox="-1 -2 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m11.2929 3.29289c.3905-.39052 1.0237-.39052 1.4142 0 .3905.39053.3905 1.02369 0 1.41422l-3.29289 3.29289 3.29289 3.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.2929-3.29289-3.29289 3.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.0237 0-1.4142l3.2929-3.2929-3.2929-3.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l3.29289 3.2929z" fill-rule="evenodd"/></svg></div></button>
                        ${a?`
                            <button class="defaultButton zoomOutButton" title="Zoom out"><div><svg fill="#bfbfbf" width="22" height="22" viewBox="0 -1 17 17" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.027 6.149a5.52 5.52 0 0 1-1.27 3.908l4.26 4.26-.7.71-4.26-4.27a5.52 5.52 0 1 1 1.97-4.608zm-5.45 4.888a4.51 4.51 0 0 0 3.18-1.32l-.04.02a4.51 4.51 0 0 0 1.36-3.2 4.5 4.5 0 1 0-4.5 4.5zm-2.54-4.98h5v1h-5v-1z"/></svg></div></button>
                            <button class="defaultButton zoomInButton"  title="Zoom in" ><div><svg fill="#bfbfbf" width="22" height="22" viewBox="-1 -2 35 35" xmlns="http://www.w3.org/2000/svg"><path d="m18 12h-4v-4h-2v4h-4v2h4v4h2v-4h4z"/><path d="m21.4479 20a10.856 10.856 0 0 0 2.5521-7 11 11 0 1 0 -11 11 10.856 10.856 0 0 0 7-2.5521l7.5859 7.5521 1.4141-1.4141zm-8.4479 2a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9z"/><path d="m0 0h32v32h-32z" fill="none"/></svg></div></button>
                        `:""}
                    </div>
                    <button class="arrowButton leftButton" ><div><svg fill="none" stroke="#bbb" width="22" height="22" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="15 18 9 12 15 6" /></svg></div></button>
                    <button class="arrowButton rightButton"><div><svg fill="none" stroke="#bbb" width="22" height="22" viewBox="3 3 18 18" xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="9 18 15 12 9 6"  /></svg></div></button>
                    <div class="footer">
                        <p dir="auto" class="description"></p>
                        <div class="thumbnailsWrapper"></div>
                    </div>
                </div>
            </div>
        `;return l.getChildNode(t)}static getImageHtml(e,a){const t=`
            <button class="imageContainer${a?" stretch":""}" data-url="${e}">
                <img class="image"/>
            </button>
        `;return l.getChildNode(t)}static getButtonHtml(e,a,t){const o=`
            <input
                type="button"
                class="customButton"
                title="${e}"
                style="${"background-image:url('"+a+"');"} ${t!==""?"background-size:"+t+";":""}"
            />`;return l.getChildNode(o)}static getThumbnailHtml(e,a,t){const o=`
            <button class="thumbnailContainer">
                <img class="thumbnail" data-index="${e}" src="${a}" title="${t}"/>
            </button>
        `;return l.getChildNode(o)}static getChildNode(e){const a=document.createElement("div");return a.innerHTML=e.trim(),a.firstChild||a}showImages(){const e=this.view.getElementsByClassName("imagesWrapper")[0];this.images.forEach(a=>{const t=l.getImageHtml(a.mainUrl,this.stretchImages);e.appendChild(t)})}showToolbar(){var e;const a=this.view.getElementsByClassName("toolbar")[0];(e=this.buttons)===null||e===void 0||e.forEach(t=>{const o=l.getButtonHtml(t.name,t.iconSrc,t.iconSize);a.appendChild(o),o.addEventListener("click",i=>{i.stopPropagation(),typeof t.onSelect!==void 0&&t.onSelect()})})}addEventToArrows(){const e=this.view.getElementsByClassName("leftButton")[0],a=this.view.getElementsByClassName("rightButton")[0];if(this.images.length===1){e.style.display="none",a.style.display="none";return}e.addEventListener("click",i=>{i.stopPropagation(),this.selectImage(this.currentSelected-1)}),a.addEventListener("click",i=>{i.stopPropagation(),this.selectImage(this.currentSelected+1)});const t=this.view.querySelectorAll(".touchSurface, .imageContainer, .arrowButton, .thumbnailContainer"),o=t[0];setTimeout(()=>o.focus(),100),t.forEach(i=>{i.addEventListener("keydown",n=>{const s=n;s.key==="ArrowLeft"&&(n.preventDefault(),this.selectImage(this.currentSelected-1)),s.key==="ArrowRight"&&(n.preventDefault(),this.selectImage(this.currentSelected+1))})})}echoThumbnails(){if(!this.showThumbnails||this.images.length<=1)return;const e=this.view.getElementsByClassName("thumbnailsWrapper")[0];let a=0;this.images.forEach(t=>{var o;const i=l.getThumbnailHtml(a,(o=t.thumbnailUrl)!==null&&o!==void 0?o:t.mainUrl,t.description);e.appendChild(i),i.addEventListener("click",n=>{n.stopPropagation();const r=n.target.dataset.index;this.selectImage(parseInt(r??"0"))}),a++})}selectImage(e){e<0||e>this.images.length-1||this.isInZoom||(this.currentSelected=e,this.loadImage(e-1),this.loadImage(e),this.loadImage(e+1),this.scrollToImage(e),this.setDescription(this.images[e].description),this.setThumbnail(e))}loadImage(e){if(e<0||e>this.images.length-1)return;const o=this.view.getElementsByClassName("imagesWrapper")[0].children.item(e),i=o.dataset.url,n=o.getElementsByClassName("image")[0];n.src=i}scrollToImage(e){const a=this.view.getElementsByClassName("imagesWrapper")[0],o=a.children.item(e),i=o.offsetLeft-(a.getBoundingClientRect().width-o.getBoundingClientRect().width)/2;a.scrollTo({left:i,behavior:"smooth"})}setDescription(e){const a=this.view.getElementsByClassName("description")[0];a.innerHTML=e||""}setThumbnail(e){this.view.querySelectorAll(".thumbnail").forEach(o=>{o.classList.remove("selected")});const t=this.view.querySelector('[data-index="'+e+'"]');t!==null&&(t.classList.add("selected"),this.scrollThumbnail(e))}scrollThumbnail(e){const a=this.view.getElementsByClassName("thumbnailsWrapper")[0],o=a.children.item(e),i=o.offsetLeft-(a.getBoundingClientRect().width-o.getBoundingClientRect().width)/2;a.scrollTo({left:i,behavior:"smooth"})}addEventToSwipe(e,a){let t={startX:0,startY:0,endX:0,endY:0},o=30,i=30,n=50,s=60,r="";const g=this.view.getElementsByClassName("imagesWrapper")[0];let p=g.getBoundingClientRect(),u=p.left;const h=this.view.getElementsByClassName("touchSurface")[0];h.addEventListener("touchstart",m=>{if(this.isInZoom)return;let d=m.touches[0];t.startX=d.screenX,t.startY=d.screenY,u=this.view.getElementsByClassName("imagesWrapper")[0].children.item(this.currentSelected).offsetLeft}),h.addEventListener("touchmove",m=>{if(this.isInZoom)return;m.preventDefault();let d=m.touches[0];t.endX=d.screenX,t.endY=d.screenY;let b=t.startX-d.screenX;g.scrollLeft=u+b}),h.addEventListener("touchend",m=>{this.isInZoom||((t.endX-o>t.startX||t.endX+o<t.startX)&&t.endY<t.startY+s&&t.startY>t.endY-s&&t.endX>0?t.endX>t.startX?r="RIGHT":r="LEFT":(t.endY-n>t.startY||t.endY+n<t.startY)&&t.endX<t.startX+i&&t.startX>t.endX-i&&t.endY>0&&(t.endY>t.startY?r="DOWN":r="UP"),r===""?a():e(r),t={startX:0,startY:0,endX:0,endY:0},r="",u=p.left)})}addEventToHudAndZoom(){this.view.querySelectorAll(".touchSurface, .image").forEach(o=>{o.addEventListener("click",i=>{i.stopPropagation(),this.dbcWaiting?(clearTimeout(this.dbcTimer),this.dbcWaiting=!1,this.flipZoom(i.clientX,i.clientY)):(this.dbcWaiting=!0,this.dbcTimer=setTimeout(()=>{this.dbcWaiting&&this.flipHud(!this.isHudShow),this.dbcWaiting=!1},200))})}),this.view.querySelectorAll(".zoomInButton, .zoomOutButton").forEach(o=>{o.addEventListener("click",i=>{i.stopPropagation();const r=this.view.getElementsByClassName("imagesWrapper")[0].children.item(this.currentSelected);this.flipZoom(r.offsetWidth/2,r.offsetHeight/2)})});const t=this.view.getElementsByClassName("imagesWrapper")[0];t.addEventListener("touchmove",o=>{this.isInZoom?t.style.overflow="hidden":t.style.overflow="scroll"})}flipZoom(e,a){if(!this.isZoomable)return;const i=this.view.getElementsByClassName("imagesWrapper")[0].children.item(this.currentSelected),n=this.view.getElementsByClassName("touchSurface")[0];if(i.classList.contains("zoom"))i.classList.remove("zoom"),this.isInZoom=!1,this.flipHud(!0),this.view.classList.remove("halfHud"),n.style.display="block";else{i.classList.add("zoom");const s=i.getElementsByClassName("image")[0];i.scrollTop=s.offsetHeight/2-i.offsetHeight/2+(a-i.offsetHeight/2)*(s.offsetHeight/i.offsetHeight),i.scrollLeft=s.offsetWidth/2-i.offsetWidth/2+(e-i.offsetWidth/2)*(s.offsetWidth/i.offsetWidth),this.isInZoom=!0,this.flipHud(!1),this.view.classList.add("halfHud"),n.style.display="none"}}flipHud(e){e?(this.view.classList.remove("hudDisplay"),setTimeout(()=>this.view.classList.remove("hudOpacity"),50)):(this.view.classList.add("hudOpacity"),setTimeout(()=>this.view.classList.add("hudDisplay"),200)),this.isHudShow=e}addEventToWindowResize(){window.addEventListener("resize",()=>{this.selectImage(this.currentSelected)})}setStyle(e){if(e!==void 0){this.style=e;for(const[a,t]of Object.entries(this.style))this.view.querySelectorAll("."+a).forEach(i=>{for(const n of t)i.style.setProperty(n[0],n[1])})}}show(){const e=this;setTimeout(()=>{e.view.classList.add("visible")},50)}addEventToHide(){this.view.getElementsByClassName("closeButton")[0].addEventListener("click",a=>{this.hide()})}hide(){this.view.classList.remove("visible");const e=this;setTimeout(()=>{e.view.remove()},500)}}var w=f.default=l;const v=`
@media (hover: hover) and (pointer: fine) {
    .thinScrollbar::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .thinScrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    .thinScrollbar::-webkit-scrollbar-thumb {
      background: #bbb;
      border-radius: 20px;
    }
    .darkMode .thinScrollbar::-webkit-scrollbar-thumb {
      background: #555;
    }
  }
  .hiddenScrollbar, .imageViewer > .container > .footer > .thumbnailsWrapper, .imageViewer > .container > .imagesWrapper > .imageContainer, .imageViewer > .container > .imagesWrapper {
    scrollbar-width: none;
  }
  
  .hiddenScrollbar::-webkit-scrollbar, .imageViewer > .container > .footer > .thumbnailsWrapper::-webkit-scrollbar, .imageViewer > .container > .imagesWrapper > .imageContainer::-webkit-scrollbar, .imageViewer > .container > .imagesWrapper::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  
  .transparentBackground {
    transition: background-color 50ms;
  }
  
  .transparentBackground:enabled:active {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .transparentBackground {
      transition: background-color 150ms;
    }
    .transparentBackground:enabled:hover {
      background-color: rgba(0, 0, 0, 0.03) !important;
    }
    .transparentBackground:enabled:focus {
      background-color: rgba(0, 0, 0, 0.04) !important;
    }
    .transparentBackground:enabled:active {
      background-color: rgba(0, 0, 0, 0.08) !important;
    }
  }
  .transparentBackground:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .darkTransparentBackground, .imageViewer > .container > .arrowButton, .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
    transition: background-color 50ms;
  }
  
  .darkTransparentBackground:enabled:active, .imageViewer > .container > .arrowButton:enabled:active, .imageViewer > .container > .toolbar > .defaultButton:enabled:active,
  .imageViewer > .container > .toolbar > .customButton:enabled:active {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .darkTransparentBackground, .imageViewer > .container > .arrowButton, .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      transition: background-color 150ms;
    }
    .darkTransparentBackground:enabled:hover, .imageViewer > .container > .arrowButton:enabled:hover, .imageViewer > .container > .toolbar > .defaultButton:enabled:hover,
  .imageViewer > .container > .toolbar > .customButton:enabled:hover {
      background-color: rgba(0, 0, 0, 0.2) !important;
    }
    .darkTransparentBackground:enabled:focus, .imageViewer > .container > .arrowButton:enabled:focus, .imageViewer > .container > .toolbar > .defaultButton:enabled:focus,
  .imageViewer > .container > .toolbar > .customButton:enabled:focus {
      background-color: rgba(0, 0, 0, 0.3) !important;
    }
    .darkTransparentBackground:enabled:active, .imageViewer > .container > .arrowButton:enabled:active, .imageViewer > .container > .toolbar > .defaultButton:enabled:active,
  .imageViewer > .container > .toolbar > .customButton:enabled:active {
      background-color: rgba(0, 0, 0, 0.4) !important;
    }
  }
  .darkTransparentBackground:disabled, .imageViewer > .container > .arrowButton:disabled, .imageViewer > .container > .toolbar > .defaultButton:disabled,
  .imageViewer > .container > .toolbar > .customButton:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .coloredBackground {
    opacity: 0.8;
  }
  
  .coloredBackground:enabled:active {
    opacity: 1;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .coloredBackground:enabled:hover {
      opacity: 0.85;
    }
    .coloredBackground:enabled:focus {
      opacity: 0.9;
    }
    .coloredBackground:enabled:active {
      opacity: 1;
    }
  }
  .coloredBackground:disabled {
    opacity: 0.5;
    cursor: default;
  }
  
  .transparentBackground_dark {
    transition: background-color 50ms;
  }
  
  .transparentBackground_dark:enabled:active {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  
  @media (hover: hover) and (pointer: fine) {
    .transparentBackground_dark {
      transition: background-color 150ms;
    }
    .transparentBackground_dark:enabled:hover {
      background-color: rgba(255, 255, 255, 0.12) !important;
    }
    .transparentBackground_dark:enabled:focus {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }
    .transparentBackground_dark:enabled:active {
      background-color: rgba(255, 255, 255, 0.07) !important;
    }
  }
  .imageViewer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    visibility: hidden;
    z-index: 999999993;
  }
  .imageViewer * {
    padding: 0;
    margin: 0;
    font-family: Catamaran-Medium;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }
  .imageViewer a::-moz-focus-inner,
  .imageViewer input::-moz-focus-inner,
  .imageViewer button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .imageViewer a {
    text-decoration: none;
    outline: none;
  }
  .imageViewer input, .imageViewer button, .imageViewer select {
    border: none;
    outline: none;
  }
  .imageViewer input[type=button], .imageViewer button, .imageViewer select {
    cursor: pointer;
  }
  .imageViewer input:required,
  .imageViewer input:invalid {
    box-shadow: none;
  }
  .imageViewer input[type=button], .imageViewer button {
    font-size: 1rem;
    padding: 0;
    background: none;
  }
  .imageViewer > .shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    opacity: 0;
    transition: opacity 160ms ease-in-out;
  }
  .imageViewer > .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .imageViewer > .container > .imagesWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    gap: 100px;
    overflow: hidden;
  }
  .imageViewer > .container > .imagesWrapper > .imageContainer {
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    overflow-y: scroll;
    position: relative;
    cursor: default;
  }
  .imageViewer > .container > .imagesWrapper > .imageContainer > .image {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
    cursor: pointer;
  }
  .imageViewer > .container > .imagesWrapper .stretch > .image {
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
  }
  .imageViewer > .container > .imagesWrapper .zoom {
    display: inline;
  }
  .imageViewer > .container > .imagesWrapper .zoom > .image {
    max-width: unset;
    max-height: unset;
    margin-bottom: -20px;
  }
  .imageViewer > .container > .touchSurface {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .imageViewer > .container > .toolbar {
    width: 55px;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  }
  .imageViewer > .container > .toolbar > * {
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
    width: 100%;
    height: 55px;
    display: flex;
  }
  .imageViewer > .container > .toolbar > .defaultButton {
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .toolbar > .defaultButton > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .toolbar > .zoomOutButton {
    display: none;
  }
  .imageViewer > .container > .toolbar > .customButton {
    background-size: 19px auto;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .imageViewer > .container > .arrowButton {
    width: 80px;
    height: calc(100% - 300px);
    min-height: 100px;
    max-height: 160px;
    display: flex;
    color: #aaa;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .arrowButton > div {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imageViewer > .container > .leftButton {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
  }
  .imageViewer > .container > .rightButton {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
  }
  .imageViewer > .container > .footer {
    width: auto;
    max-width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, 0);
    gap: 8px;
    transition: opacity 200ms ease-in-out;
  }
  .imageViewer > .container > .footer > .description {
    padding: 2px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 1.2rem;
    color: #fafafa;
    border-radius: 2px;
  }
  .imageViewer > .container > .footer > .description:empty {
    display: none;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper:empty {
    display: none;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 80px;
    overflow: scroll;
    display: flex;
    gap: 12px;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper > .thumbnailContainer > .thumbnail {
    width: auto;
    max-width: 120px;
    height: auto;
    max-height: 70px;
    border: solid 3px transparent;
    border-radius: 3px;
    cursor: pointer;
  }
  .imageViewer > .container > .footer > .thumbnailsWrapper > .thumbnailContainer > .selected {
    border-color: white;
  }
  
  .imageViewer.hudOpacity > .container > .toolbar > *,
  .imageViewer.hudOpacity > .container > .arrowButton,
  .imageViewer.hudOpacity > .container > .footer {
    opacity: 0;
  }
  
  .imageViewer.hudDisplay > .container > .toolbar > *,
  .imageViewer.hudDisplay > .container > .arrowButton,
  .imageViewer.hudDisplay > .container > .footer {
    display: none;
  }
  
  .imageViewer.halfHud > .container > .toolbar > .closeButton,
  .imageViewer.halfHud > .container > .toolbar > .zoomOutButton {
    opacity: 1;
    display: flex;
  }
  .imageViewer.halfHud > .container > .toolbar > .zoomInButton {
    opacity: 0;
    display: none;
  }
  
  .imageViewer.visible {
    visibility: visible;
  }
  .imageViewer.visible > .shadow,
  .imageViewer.visible > .container {
    opacity: 1;
  }
  
  @media (max-width: 450px) {
    .imageViewer > .container > .toolbar {
      width: auto;
      height: 50px;
      flex-direction: row-reverse;
    }
    .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      width: 50px;
      height: 100%;
    }
    .imageViewer > .container > .arrowButton {
      width: 65px;
    }
    .imageViewer > .container > .footer > .description {
      font-size: 1rem;
    }
  }
  @media (orientation: landscape) and (max-height: 450px) {
    .imageViewer > .container > .toolbar {
      width: auto;
      height: 50px;
      flex-direction: row-reverse;
    }
    .imageViewer > .container > .toolbar > .defaultButton,
  .imageViewer > .container > .toolbar > .customButton {
      width: 50px;
      height: 100%;
    }
    .imageViewer > .container > .footer {
      bottom: 5px;
    }
  }
`;window.onload=function(){window.onscroll=function(){const c=document.getElementById("header"),e=c.offsetTop;window.pageYOffset>e?c.classList.add("sticky"):c.classList.remove("sticky")}};document.querySelectorAll(".content-section__img-preview-container").forEach(function(c){c.onclick=function(e){new w({images:[{mainUrl:e.target.src}]})}});
