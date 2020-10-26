import {gsap} from "gsap";

import {toggleAnimation} from "./animation.js";
// import {backgroundAnimation} from "./background.js";
// toggleAnimation();
// backgroundNight();
// backgroundAnimation();


const mainTL = gsap.timeline({paused:true});

mainTL.add(toggleAnimation())

var isNight = false;


var toggle = document.getElementById("toggle-button");

toggle.addEventListener('click',()=>{
  
    if(isNight === false){

    mainTL.play();
    isNight = true;
  } else {
    mainTL.reverse();
    isNight = false;
  }  
});
