!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=o),o.register("8slrw",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return t}})),o.register("ifqQW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}));var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t,e){return d.default(t)||u.default(t,e)||c.default(t,e)||l.default()};var a,d=s(o("8slrw")),u=s(o("7AJDX")),l=s(o("ifqQW")),c=s(o("auk6i"));function s(t){return t&&t.__esModule?t:{default:t}}!function(t,e,n){n=n||window;var i=!1;n.addEventListener(t,(function(){i||(i=!0,requestAnimationFrame((function(){n.dispatchEvent(new CustomEvent(e)),i=!1})))}))}("resize","optimizedResize"),(a=a||window).animation=function(e,n,i){var o=n.count,a=0;n.start&&n.start.forEach((function(t){e.style[t[0]]=t[1]}));var d=[];n.anim.forEach((function(e){var n=t(r)(e,3),i=n[0],a=n[1],u=n[2],l=Math.max(a,u),c=Math.min(a,u),s=(l-c)/o;d.push({style:i,from:a,to:u,step:s,reverse:c===u})}));var u=function(){d.forEach((function(t){t.reverse?t.from-=t.step:t.from+=t.step,e.style[t.style]=t.from})),++a<o?requestAnimationFrame(u):(n.end&&n.end.forEach((function(t){e.style[t[0]]=t[1]})),i&&i())};requestAnimationFrame(u)};document.addEventListener("DOMContentLoaded",(function(){var t=document.createElement("div");t.className="videotube-modal-overlay",document.body.insertAdjacentElement("beforeend",t);var e=document.createElement("div");e.id="videotube-modal-container";var n=[[3840,2160],[2560,1440],[1920,1080],[1280,720],[854,420],[640,360],[426,240]],i=function(){var t=n.find((function(t){return t[0]<window.visualViewport.width}))||n[n.length-1],i=document.getElementById("videotube-modal");i.width=t[0],i.height=t[1],e.style.cssText="\n\t\t\twidth: ".concat(t[0],";\n\t\t\theight: ").concat(t[1],";\n\t\t")},o=function(){var n=window.visualViewport.height,i=window.visualViewport.width,o=e.style.width,r=e.style.height;e.style.left=(i-o)/2,e.style.top=(n-r)/2,t.style.height=document.documentElement.clientHeight},r=function(){o(),i()},a=function(){animation(t,{end:[["display","none"]],anim:[["opacity",1,0]],count:20},(function(){t.textContent=""})),window.removeEventListener("optimizedResize",r),document.removeEventListener("keyup",d)},d=function(t){27===t.keyCode&&a()};t.addEventListener("click",a),document.addEventListener("click",(function(e){var n=e.target.closest(".tube");if(n){var a=n.href,u=a.includes("youtube")?a.match(/(\?|&)v=([^&]+)/)[2]:a.match(/(\.be\/)([^&]+)/)[2];0!==u.length&&(e.preventDefault(),animation(t,{start:[["display","block"]],anim:[["opacity",0,1]],count:20}),t.insertAdjacentHTML("beforeend",'\n\t\t\t<div id="videotube-modal-loading">Загрузка...</div>\n\t\t\t<div id="videotube-modal-close">&#10006;</div>\n\t\t\t<div id="videotube-modal-container">\n\t\t\t\t<iframe src="https://youtube.com/embed/'.concat(u,'?autoplay=1" \n\t\t\t\t\tframeborder="0"\n\t\t\t\t\tid="videotube-modal" \n\t\t\t\t\tallowfullscreen\n\t\t\t\t\tallow="autoplay">\n\t\t\t\t</iframe>\n\t\t\t</div>\n\t\t')),i(),o(),window.addEventListener("optimizedResize",r),document.addEventListener("keyup",d))}}))}))}();
//# sourceMappingURL=index.3dbbf6ea.js.map
