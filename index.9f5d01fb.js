(()=>{const e={mobileButton:document.querySelector("button[data-buy-now]"),buyNowModal:document.querySelector("div[data-buy-now-modal]"),headerButton:document.querySelector("button[data-buy-now-menu]"),closeLink:document.querySelector(".buy-now-close"),closeIcon:document.querySelector(".close-icon"),body:document.querySelector("body"),menu:document.querySelector(".mob-menu")};function n(){e.closeLink.classList.add("is-hidden"),e.buyNowModal.classList.add("is-hidden"),e.menu.classList.contains("is-shown")||e.body.classList.remove("no-scroll")}e.headerButton.addEventListener("click",(function(){e.closeLink.classList.remove("is-hidden"),e.buyNowModal.classList.remove("is-hidden"),e.body.classList.add("no-scroll")})),e.closeLink.addEventListener("click",n),e.closeIcon.addEventListener("click",n),e.mobileButton.addEventListener("click",(function(){e.closeLink.classList.remove("is-hidden"),e.buyNowModal.classList.remove("is-hidden")})),e.closeLink.addEventListener("click",n),e.closeIcon.addEventListener("click",n),$((function(){let e=$(".header"),n=$(".hero").height();$(window).scroll((function(){$(this).scrollTop()<n?e.css({background:"transparent"}):e.css({background:"rgba(241, 154, 154, 0.3)"})}))}))})();let e=document.getElementById("firstCount"),n=document.getElementById("secondCount"),o=document.getElementById("thirdCount");document.getElementById("plusFirst").onclick=function(){e.innerHTML<100&&e.innerHTML++},document.getElementById("plusSecond").onclick=function(){n.innerHTML<100&&n.innerHTML++},document.getElementById("plusThird").onclick=function(){o.innerHTML<100&&o.innerHTML++},document.getElementById("minusFirst").onclick=function(){e.innerHTML>0&&e.innerHTML--},document.getElementById("minusSecond").onclick=function(){n.innerHTML>0&&n.innerHTML--},document.getElementById("minusThird").onclick=function(){o.innerHTML>0&&o.innerHTML--};
//# sourceMappingURL=index.9f5d01fb.js.map
