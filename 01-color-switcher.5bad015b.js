!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},a=null;t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.startBtn.classList.add("active"),t.stopBtn.classList.remove("active"),a=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.startBtn.classList.remove("active"),t.stopBtn.classList.add("active"),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.5bad015b.js.map