!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),sound:document.getElementById("myAudio")},n=null;t.stopBtn.disabled=!0,t.startBtn.style.marginTop="10%",t.startBtn.style.marginLeft="50%",t.startBtn.style.fontSize="200%",t.stopBtn.style.fontSize="200%",t.stopBtn.style.marginLeft="1%",t.startBtn.addEventListener("click",(function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.abd0a8d8.js.map
