!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n={intervalId:null,isActive:!1};t.addEventListener("click",(function(){n.isActive&&(t.disabled=!1),t.disabled=!0,n.intervalId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(n.intervalId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d33ff537.js.map