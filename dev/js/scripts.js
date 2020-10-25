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

// var buttonTl = new TimelineMax({paused:true});
// buttonTl.to('#background-day', alpha:0, {
//   morphSVG:{shape:'#background-night'},
//   ease:Elastic.easeInOut
// })

toggle.addEventListener('click',()=>{
  

    
  //if(toggle.className.includes("active")){
    if(isNight === false){
    //toggle.className = "toggle-button";
    //buttonTl.reverse();
    mainTL.play();
    isNight = true;
  } else {
    //toggle.className = "toggle-button active";
    
    //buttonTl.play();

    mainTL.reverse();
    isNight = false;
  }  
});
