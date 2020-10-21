// import {gsap} from "gsap";
// import { Timeline } from "gsap/gsap-core";

import {gsap} from "gsap";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export function toggleAnimation(){




var toggle = document.getElementById("toggle-button");

// var buttonTl = new TimelineMax({paused:true});
// buttonTl.to('#background-day', 0.6, {
//   morphSVG:{shape:'#background-night'}
//   // ease:Elastic.easeInOut
// })

toggle.addEventListener('click',()=>{
  if(toggle.className.includes("active")){
    toggle.className = "toggle-button";
    // backgroundTL.play();
    buttonTl.reverse();
  } else {
    toggle.className = "toggle-button active";
    // var buttonTl = new TimelineMax({paused:true});
    // gsap.to("background-day", {duration:1, alpha:0});
    // backgroundTL.reverse();

    buttonTl.play();
  }  
});
}


const backgroundTL = gsap.timeline({
   
});
backgroundTL.to("#background-day", {duration: .5, morphSVG: "#background-night"})
;

export function backgroundAnimation(){
  return backgroundTL;
}

