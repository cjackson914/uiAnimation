var animation_min=function(t){"use strict";return t.toggleAnimation=function(){var t=document.getElementById("toggle-button");t.addEventListener("click",()=>{t.className.includes("active")?(t.className="toggle-button",buttonTl.reverse()):(t.className="toggle-button active",buttonTl.play())})},t}({});