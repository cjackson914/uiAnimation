import {gsap} from "gsap";

import {toggleAnimation, backgroundAnimation} from "./animation.js";
toggleAnimation();
backgroundAnimation();


const mainTL = gsap.timeline({paused:true});

mainTL.add(toggleAnimation());


// var toggle = document.getElementById("toggle-button");

// // var buttonTl = new TimelineMax({paused:true});
// // buttonTl.to('#cross', 0.6, {
// //   morphSVG:{shape:'#checkmark'},
// //   ease:Elastic.easeInOut
// // })

// toggle.addEventListener('click',()=>{
//   if(toggle.className.includes("active")){
//     toggle.className = "toggle-button";
//     buttonTl.reverse();
//   } else {
//     toggle.className = "toggle-button active";
//     buttonTl.play();
//   }  
// });

