!function(){var e={openMenuBtn:document.querySelector(".menu-open-btn"),closeMenuBtn:document.querySelector(".menu-close-btn"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body"),menu_list:document.querySelector(".mob-menu__list")};function n(){e.menu.classList.toggle("is-shown"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menu_list.addEventListener("click",n)}(),$(document).on("click",".header__link",(function(e){e.preventDefault();var n=$(this).attr("href");$("html, body").animate({scrollTop:$(n).offset().top-0},800)})),$(document).on("click",".mob-menu__link",(function(e){e.preventDefault();var n=$(this).attr("href");$("html, body").animate({scrollTop:$(n).offset().top-0},800)}));
//# sourceMappingURL=index.9ce74a5e.js.map
