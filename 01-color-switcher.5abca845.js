const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.startBtn.classList.add("active"),t.stopBtn.classList.remove("active"),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,t.startBtn.classList.remove("active"),t.stopBtn.classList.add("active"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.5abca845.js.map