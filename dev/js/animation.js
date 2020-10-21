import {gsap} from "gsap";
// import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
// gsap.registerPlugin(MorphSVGPlugin);

export function toggleAnimation(){



var toggle = document.getElementById("toggle-button");

// var buttonTl = new TimelineMax({paused:true});
// buttonTl.to('#background-day', alpha:0, {
//   morphSVG:{shape:'#background-night'},
//   ease:Elastic.easeInOut
// })

toggle.addEventListener('click',()=>{
  if(toggle.className.includes("active")){
    toggle.className = "toggle-button";
    buttonTl.reverse();
  } else {
    toggle.className = "toggle-button active";
    
    buttonTl.play();
  }  
});

// var background = backgroundNight.from("#background-night",{alpha:0});
// background.reverse();

// toggle.onclick = function() {
//   background.reversed(!background.reversed());
// }

// toggle.addEventListener('click',()=>{
//   if(toggle.className.includes("active")){
//     toggle.className = "background-night";
//     buttonTl.reverse();
//   } else {
//     toggle.className = "background-day";
    
//     buttonTl.play();
//   }  
// });

}