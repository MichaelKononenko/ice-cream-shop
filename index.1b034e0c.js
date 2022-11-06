!function(){"use strict";var e=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,l=!1,a=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){l=!0,a=e}finally{try{!n&&r.return&&r.return()}finally{if(l)throw a}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function t(t,i){var n=[],l="Timeline:",a=window.innerWidth,s=void 0,r=0,o={forceVerticalMode:{type:"integer",defaultValue:600},horizontalStartPosition:{type:"string",acceptedValues:["bottom","top"],defaultValue:"top"},mode:{type:"string",acceptedValues:["horizontal","vertical"],defaultValue:"vertical"},moveItems:{type:"integer",defaultValue:1},startIndex:{type:"integer",defaultValue:0},verticalStartPosition:{type:"string",acceptedValues:["left","right"],defaultValue:"left"},verticalTrigger:{type:"string",defaultValue:"15%"},visibleItems:{type:"integer",defaultValue:3}};function d(e,t,i){t.classList.add(i),e.parentNode.insertBefore(t,e),t.appendChild(e)}function c(t,i){var n=t.getBoundingClientRect(),l=window.innerHeight||document.documentElement.clientHeight,a=o.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),s=i.unit,r=i.value,d=l;if("px"===s&&l<=r){console.warn('The value entered for the setting "verticalTrigger" is larger than the window height. The default value will be used instead.');var c=e(a,3);r=c[1],s=c[2]}return"px"===s?d=parseInt(d-r,10):"%"===s&&(d=parseInt(d*((100-r)/100),10)),n.top<=d&&n.left<=(window.innerWidth||document.documentElement.clientWidth)&&0<=n.top+n.height&&0<=n.left+n.width}function m(e,t){e.style.webkitTransform=t,e.style.msTransform=t,e.style.transform=t}function u(e){var t="translate3d(-"+e.items[r].offsetLeft+"px, 0, 0)";m(e.scroller,t)}function f(){n.forEach((function(e){var t,i,n,l,a,s,o,f;e.timelineEl.style.opacity=0,e.timelineEl.classList.contains("timeline--loaded")||e.items.forEach((function(e){d(e.querySelector(".timeline__content"),document.createElement("div"),"timeline__content__wrap"),d(e.querySelector(".timeline__content__wrap"),document.createElement("div"),"timeline__item__inner")})),function(e){e.timelineEl.classList.remove("timeline--horizontal","timeline--mobile"),e.scroller.removeAttribute("style"),e.items.forEach((function(e){e.removeAttribute("style"),e.classList.remove("animated","fadeIn","timeline__item--left","timeline__item--right")}));var t=e.timelineEl.querySelectorAll(".timeline-nav-button");[].forEach.call(t,(function(e){e.parentNode.removeChild(e)}))}(e),window.innerWidth<=e.settings.forceVerticalMode&&e.timelineEl.classList.add("timeline--mobile"),"horizontal"===e.settings.mode&&window.innerWidth>e.settings.forceVerticalMode?(r=(t=e).settings.startIndex,t.timelineEl.classList.add("timeline--horizontal"),i=t,window.innerWidth>i.settings.forceVerticalMode&&(i.itemWidth=i.wrap.offsetWidth/i.settings.visibleItems,i.items.forEach((function(e){e.style.width=i.itemWidth+"px"})),i.scrollerWidth=i.itemWidth*i.items.length,i.scroller.style.width=i.scrollerWidth+"px",function(){var e=0,t=0;i.items.forEach((function(i,n){i.style.height="auto";var l=i.offsetHeight;n%2==0?t=t<l?l:t:e=e<l?l:e}));var n="translateY("+t+"px)";i.items.forEach((function(l,a){a%2==0?(l.style.height=t+"px","bottom"===i.settings.horizontalStartPosition?(l.classList.add("timeline__item--bottom"),m(l,n)):l.classList.add("timeline__item--top")):(l.style.height=e+"px","bottom"!==i.settings.horizontalStartPosition?(l.classList.add("timeline__item--bottom"),m(l,n)):l.classList.add("timeline__item--top"))})),i.scroller.style.height=t+e+"px"}()),u(t),function(e){if(e.items.length>e.settings.visibleItems){var t=document.createElement("button"),i=document.createElement("button"),n=e.items[0].offsetHeight;t.className="timeline-nav-button timeline-nav-button--prev",i.className="timeline-nav-button timeline-nav-button--next",t.textContent="Previous",i.textContent="Next",t.style.top=n+"px",i.style.top=n+"px",0===r?t.disabled=!0:r===e.items.length-e.settings.visibleItems&&(i.disabled=!0),e.timelineEl.appendChild(t),e.timelineEl.appendChild(i)}}(t),function(e){var t=e.timelineEl.querySelector(".timeline-divider");t&&e.timelineEl.removeChild(t);var i=e.items[0].offsetHeight,n=document.createElement("span");n.className="timeline-divider",n.style.top=i+"px",e.timelineEl.appendChild(n)}(t),l=(n=t).timelineEl.querySelectorAll(".timeline-nav-button"),a=n.timelineEl.querySelector(".timeline-nav-button--prev"),s=n.timelineEl.querySelector(".timeline-nav-button--next"),o=n.items.length-n.settings.visibleItems,f=parseInt(n.settings.moveItems,10),[].forEach.call(l,(function(e){e.addEventListener("click",(function(e){e.preventDefault(),0===(r=this.classList.contains("timeline-nav-button--next")?r+=f:r-=f)||r<0?(r=0,a.disabled=!0,s.disabled=!1):r===o||o<r?(r=o,a.disabled=!1,s.disabled=!0):(a.disabled=!1,s.disabled=!1),u(n)}))}))):function(e){var t=0;e.items.forEach((function(i,n){i.classList.remove("animated","fadeIn"),!c(i,e.settings.verticalTrigger)&&0<n?i.classList.add("animated"):t=n,n%2==("left"===e.settings.verticalStartPosition?1:0)&&window.innerWidth>e.settings.forceVerticalMode?i.classList.add("timeline__item--right"):i.classList.add("timeline__item--left")}));for(var i=0;i<t;i+=1)e.items[i].classList.remove("animated","fadeIn");window.addEventListener("scroll",(function(){e.items.forEach((function(t){c(t,e.settings.verticalTrigger)&&t.classList.add("fadeIn")}))}))}(e),e.timelineEl.classList.add("timeline--loaded"),setTimeout((function(){e.timelineEl.style.opacity=1}),500)}))}t.length&&[].forEach.call(t,(function(t){var a=t.id?"#"+t.id:"."+t.className,s="could not be found as a direct descendant of",r=t.dataset,d=void 0,c=void 0,m=void 0,u={};try{if(!(d=t.querySelector(".timeline__wrap")))throw new Error(l+" .timeline__wrap "+s+" "+a);if(!(c=d.querySelector(".timeline__items")))throw new Error(l+" .timeline__items "+s+" .timeline__wrap");m=[].slice.call(c.children,0)}catch(e){return console.warn(e.message),!1}Object.keys(o).forEach((function(e){var t,n;u[e]=o[e].defaultValue,r[e]?u[e]=r[e]:i&&i[e]&&(u[e]=i[e]),"integer"===o[e].type?u[e]&&(n=e,"number"==typeof(t=u[e])||t%1==0||(console.warn(l+' The value "'+t+'" entered for the setting "'+n+'" is not an integer.'),0))||(u[e]=o[e].defaultValue):"string"===o[e].type&&o[e].acceptedValues&&-1===o[e].acceptedValues.indexOf(u[e])&&(console.warn(l+' The value "'+u[e]+'" entered for the setting "'+e+'" was not recognised.'),u[e]=o[e].defaultValue)}));var f=o.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),h=u.verticalTrigger.match(/(\d*\.?\d*)(.*)/),v=e(h,3),g=v[1],p=v[2],b=!0;if(g||(console.warn(l+" No numercial value entered for the 'verticalTrigger' setting."),b=!1),"px"!==p&&"%"!==p&&(console.warn(l+" The setting 'verticalTrigger' must be a percentage or pixel value."),b=!1),"%"===p&&(100<g||g<0)?(console.warn(l+" The 'verticalTrigger' setting value must be between 0 and 100 if using a percentage value."),b=!1):"px"===p&&g<0&&(console.warn(l+" The 'verticalTrigger' setting value must be above 0 if using a pixel value."),b=!1),!1===b){var w=e(f,3);g=w[1],p=w[2]}u.verticalTrigger={unit:p,value:g},u.moveItems>u.visibleItems&&(console.warn(l+' The value of "moveItems" ('+u.moveItems+') is larger than the number of "visibleItems" ('+u.visibleItems+'). The value of "visibleItems" has been used instead.'),u.moveItems=u.visibleItems),u.startIndex>=m.length-u.visibleItems?(console.warn(l+" The 'startIndex' setting must be between 0 and "+(m.length-u.visibleItems)+" for this timeline. The value of "+(m.length-u.visibleItems)+" has been used instead."),u.startIndex=m.length-u.visibleItems):u.startIndex<0&&(console.warn(l+" The 'startIndex' setting must be between 0 and "+(m.length-u.visibleItems)+" for this timeline. The value of 0 has been used instead."),u.startIndex=0),n.push({timelineEl:t,wrap:d,scroller:c,items:m,settings:u})})),f(),window.addEventListener("resize",(function(){clearTimeout(s),s=setTimeout((function(){var e=window.innerWidth;e!==a&&(f(),a=e)}),250)}))}window.jQuery&&(window.jQuery.fn.timeline=function(e){return t(this,e),this})}();
//# sourceMappingURL=index.1b034e0c.js.map
