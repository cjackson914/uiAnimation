import {gsap} from "gsap";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(DrawSVGPlugin);

const campingTL = gsap.timeline();

export function toggleAnimation(){

  campingTL.to("#sky",{duration:1, fill:"#3a6f84"},"play")
  .to("#sun",{morphSVG:"#moon", duration: 1, x:192, alpha:0},"play")
  // .from("#moon",{morphSVG:"#sun", duration: 1, x:-192, alpha:0},"play")

  .to("#ground",{duration: 1, fill:"#29353a"},"play")
  .to("#lake",{duration: 1, alpha:0},"play")
  .to("#canoe",{duration: 1, alpha:0},"play")
  .to("#table",{duration: 1, alpha:0},"play")
  .to("#path1, #path2",{duration: 1, alpha:0, drawSVG:"100%"},"play")
  .to("#tree1, #tree2, #tree3",{duration: 1, alpha:0},"play")

  .from("#tent",{duration: 1, alpha:0},"play")
  .from("#logs",{duration: 1, alpha:0},"play")
  .from("#fire",{duration: 1, alpha:0},"play")
  .from("#mainstar",{duration: 1, alpha:0},"play")
  .from("#shoot1",{duration: 1, alpha:0, drawSVG: "100%"},"play")
  .from("#shoot2",{duration: 1, alpha:0},"play")
  .from("#stars",{duration: 1, alpha:0},"play")
  .from("#tree4, #tree5, #tree6",{duration: 1, alpha:0},"play");


  return campingTL;


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